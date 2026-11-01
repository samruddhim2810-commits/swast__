/**
 * SWASTHYA SENSE - Precision Clinical & Follow-up Management Engine
 * Primary USP: Patient Attention Engine with Explainable Clinical & Administrative Rules
 * 5 Regional Languages: English, Hindi, Marathi, Assamese, Bengali
 * Role-Based Access: Clinician, Frontline Healthcare Worker, Administrator, Patient
 */

const STORE_KEY = "swasthyaSenseDoctorDemo_v1";
const ATTENTION_KEY = "swastyaAttentionSource";
const RULE_CONFIG_KEY = "swasthyaSenseRules_v1";

const $ = (id) => document.getElementById(id);
const today = () => new Date().toISOString().slice(0, 10);

const fmt = (date) =>
  date
    ? new Date(date + "T00:00:00").toLocaleDateString(currentLang === 'en' ? 'en-US' : (currentLang === 'hi' ? 'hi-IN' : (currentLang === 'bn' ? 'bn-BD' : (currentLang === 'mr' ? 'mr-IN' : 'as-IN'))), {
        month: "short",
        day: "numeric",
        year: "numeric"
      })
    : "—";

const uid = (prefix) =>
  prefix + "-" + Math.random().toString(36).slice(2, 7).toUpperCase();

const safe = (v) =>
  String(v ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[c]));

// =============================================================================
// 1. 5-LANGUAGE TRANSLATION DICTIONARY
// =============================================================================
const TRANSLATIONS = {
  en: {
    brand_tagline: "No Patient Lost in the Follow-up Process",
    role_clinician: "Qualified Clinician",
    role_hw: "Healthcare Worker (ASHA/ANM)",
    role_admin: "System Administrator",
    role_patient: "Patient Portal",
    nav_dashboard: "Dashboard Overview",
    nav_priority: "Smart Priority Queue",
    nav_attention: "Attention Engine (USP)",
    nav_patients: "Patient Registry",
    nav_checkins: "Patient Check-ins",
    nav_followups: "Follow-up Management",
    nav_referrals: "Referrals & Escalations",
    nav_reminders: "Reminders (SMS/WhatsApp)",
    nav_ai: "AI Support Assistant",
    nav_rules: "Rule Configuration",
    nav_reports: "Reports & Analytics",
    nav_audit: "Audit Trail",
    badge_demo_rules: "CLINICAL DEMO RULES",
    today_label: "Today:",
    btn_add_patient: "+ Add Patient",
    btn_new_checkin: "+ Record Check-in",
    btn_rules_info: "Rules Guide",
    btn_logout: "Sign Out",
    kpi_total_patients: "Total Patients",
    kpi_today_appointments: "Today's Due",
    kpi_overdue: "Overdue Follow-ups",
    kpi_clinical_alerts: "Clinical Reviews",
    kpi_completion_rate: "Follow-up Completion",
    kpi_open_referrals: "Open Referrals",
    table_patient: "Patient",
    table_age: "Age",
    table_category: "Category",
    table_followup: "Follow-up Date",
    table_status: "Status",
    table_actions: "Actions",
    alert_overdue_title: "Overdue Follow-up Required",
    alert_clinical_title: "Clinical Attention Required",
    rule_overdue_explain: "Scheduled follow-up date has passed and appointment was not marked completed.",
    rule_temp_explain: "Reported temperature is >= 38.0°C (fever threshold). Verification required.",
    rule_bp_explain: "Reported blood pressure indicates Stage 2 Hypertension (>= 140/90 mmHg).",
    rule_spo2_explain: "Reported SpO2 is below 94%, indicating potential respiratory distress.",
    rule_redflag_explain: "Patient reported acute red-flag symptoms (chest pain / severe breathlessness).",
    rule_jump_explain: "Significant change detected compared to previous baseline check-in.",
    action_contact_patient: "Contact patient immediately to confirm status and reschedule.",
    action_clinician_triage: "Schedule clinician telephone triage or facility evaluation within 24 hours.",
    action_urgent_referral: "Urgent in-person clinical review and vitals verification recommended.",
    sms_template_reminder: "Namaste {NAME}, this is a reminder from Swasthya Sense. You have a scheduled follow-up on {DATE}. Please contact your healthcare worker or visit the clinic.",
    sms_template_overdue: "Attention {NAME}: Your health follow-up was scheduled for {DATE} and is now overdue. Please contact your ASHA worker or doctor as soon as possible.",
    sms_template_checkin: "Namaste {NAME}, please submit your daily health check-in symptoms and vitals today on Swasthya Sense.",
    ai_disclaimer: "AI-Assisted Support Layer — Non-diagnostic. Clinical decisions remain with qualified healthcare professionals."
  },
  hi: {
    brand_tagline: "फॉलो-अप प्रक्रिया में कोई मरीज छूटे नहीं",
    role_clinician: "योग्य चिकित्सक (डॉक्टर)",
    role_hw: "स्वास्थ्य कार्यकर्ता (आशा/एएनएम)",
    role_admin: "सिस्टम व्यवस्थापक (एडमिन)",
    role_patient: "रोगी पोर्टल",
    nav_dashboard: "डैशबोर्ड अवलोकन",
    nav_priority: "स्मार्ट प्राथमिकता कतार",
    nav_attention: "अटेंशन इंजन (मुख्य यूएसपी)",
    nav_patients: "रोगी रजिस्ट्री",
    nav_checkins: "रोगी चेक-इन रिकॉर्ड्स",
    nav_followups: "फॉलो-अप प्रबंधन",
    nav_referrals: "रेफरल और एस्केलेशन",
    nav_reminders: "स्मरणपत्र (SMS/व्हाट्सएप)",
    nav_ai: "एआई सहायता सहायक",
    nav_rules: "नियम कॉन्फ़िगरेशन",
    nav_reports: "रिपोर्ट और विश्लेषण",
    nav_audit: "ऑडिट ट्रेल",
    badge_demo_rules: "क्लिनिकल डेमो नियम",
    today_label: "आज की तारीख:",
    btn_add_patient: "+ नया मरीज जोड़ें",
    btn_new_checkin: "+ चेक-इन दर्ज करें",
    btn_rules_info: "नियम मार्गदर्शिका",
    btn_logout: "लॉग आउट",
    kpi_total_patients: "कुल पंजीकृत मरीज",
    kpi_today_appointments: "आज के फॉलो-अप",
    kpi_overdue: "अतिदेय (Overdue) मरीज",
    kpi_clinical_alerts: "क्लिनिकल समीक्षा अलर्ट",
    kpi_completion_rate: "फॉलो-अप पूर्णता दर",
    kpi_open_referrals: "सक्रिय रेफरल",
    table_patient: "रोगी",
    table_age: "आयु",
    table_category: "श्रेणी",
    table_followup: "फॉलो-अप तारीख",
    table_status: "स्थिति",
    table_actions: "कार्रवाई",
    alert_overdue_title: "अतिदेय फॉलो-अप आवश्यक",
    alert_clinical_title: "क्लिनिकल ध्यान आवश्यक",
    rule_overdue_explain: "निर्धारित फॉलो-अप की तारीख बीत चुकी है और स्थिति पूर्ण नहीं की गई है।",
    rule_temp_explain: "तापमान 38.0°C या उससे अधिक दर्ज किया गया है (तेज़ बुखार)। सत्यापन आवश्यक है।",
    rule_bp_explain: "रक्तचाप उच्च स्तर (>= 140/90 mmHg स्टेज 2 हाइपरटेंशन) दर्ज किया गया है।",
    rule_spo2_explain: "SpO2 का स्तर 94% से नीचे है, जिससे सांस की समस्या का संकेत मिलता है।",
    rule_redflag_explain: "रोगी ने सीने में दर्द या सांस फूलने जैसे गंभीर लक्षण दर्ज किए हैं।",
    rule_jump_explain: "पिछले चेक-इन की तुलना में विटल्स में अचानक बड़ा बदलाव पाया गया।",
    action_contact_patient: "मरीज से तुरंत संपर्क करें और नई फॉलो-अप तारीख निर्धारित करें।",
    action_clinician_triage: "24 घंटे के भीतर डॉक्टर द्वारा टेली-परामर्श या क्लिनिक जांच कराएं।",
    action_urgent_referral: "तत्काल क्लिनिकल समीक्षा और स्वास्थ्य परीक्षण की सिफारिश की जाती है।",
    sms_template_reminder: "नमस्ते {NAME}, स्वास्थ्य सेंस से अनुस्मारक: आपका स्वास्थ्य फॉलो-अप {DATE} को निर्धारित है। कृपया अपने स्वास्थ्य कार्यकर्ता से संपर्क करें।",
    sms_template_overdue: "चेतावनी {NAME}: आपका स्वास्थ्य फॉलो-अप {DATE} को नियत था और अब अतिदेय हो चुका है। कृपया तुरंत अपनी आशा दीदी या डॉक्टर से संपर्क करें।",
    sms_template_checkin: "नमस्ते {NAME}, कृपया आज अपने स्वास्थ्य के लक्षण और माप स्वास्थ्य सेंस पर दर्ज करें।",
    ai_disclaimer: "एआई-सपोर्ट लेयर केवल सहायता के लिए है। यह चिकित्सा निदान या दवा नहीं लिखता। अंतिम निर्णय योग्य डॉक्टर का होता है।"
  },
  mr: {
    brand_tagline: "फॉलो-अप प्रक्रियेत कोणताही रुग्ण सुटू नये",
    role_clinician: "पात्र वैद्यकीय अधिकारी (डॉक्टर)",
    role_hw: "आरोग्य सेविका (आशा/एएनएम)",
    role_admin: "प्रशासक (एडमिन)",
    role_patient: "रुग्ण पोर्टल",
    nav_dashboard: "डॅशबोर्ड विहंगावलोकन",
    nav_priority: "स्मार्ट प्राधान्य रांग",
    nav_attention: "अटेंशन इंजिन (मुख्य वैशिष्ट्य)",
    nav_patients: "रुग्ण नोंदणी वही",
    nav_checkins: "रुग्ण तपासणी (चेक-इन)",
    nav_followups: "फॉलो-अप व्यवस्थापन",
    nav_referrals: "रेफरल आणि एस्केलेशन",
    nav_reminders: "स्मरणपत्रे (SMS/WhatsApp)",
    nav_ai: "एआय सहाय्यक",
    nav_rules: "नियम संरचना",
    nav_reports: "अहवाल व विश्लेषण",
    nav_audit: "ऑडिट नोंदी",
    badge_demo_rules: "क्लिनिकल नियम",
    today_label: "आजचा वार व तारीख:",
    btn_add_patient: "+ नवीन रुग्ण जोडा",
    btn_new_checkin: "+ तपासणी नोंदवा",
    btn_rules_info: "नियम माहिती",
    btn_logout: "बाहेर पडा",
    kpi_total_patients: "एकूण नोंदणीकृत रुग्ण",
    kpi_today_appointments: "आजचे फॉलो-अप",
    kpi_overdue: "थकबाकी (Overdue) रुग्ण",
    kpi_clinical_alerts: "क्लिनिकल सतर्कता",
    kpi_completion_rate: "फॉलो-अप पूर्णता प्रमाण",
    kpi_open_referrals: "खुले रेफरल्स",
    table_patient: "रुग्णाचे नाव",
    table_age: "वय",
    table_category: "प्रवर्ग",
    table_followup: "फॉलो-अप तारीख",
    table_status: "स्थिती",
    table_actions: "कृती",
    alert_overdue_title: "फॉलो-अपची मुदत संपली",
    alert_clinical_title: "वैद्यकीय लक्ष आवश्यक",
    rule_overdue_explain: "फॉलो-अपची नियोजित तारीख उलटून गेली असून तपासणी अपूर्ण आहे.",
    rule_temp_explain: "शरीराचे तापमान 38.0°C पेक्षा जास्त नोंदवले गेले आहे (तीव्र ताप).",
    rule_bp_explain: "रक्तदाब 140/90 mmHg पेक्षा जास्त नोंदवला गेला आहे (उच्च रक्तदाब).",
    rule_spo2_explain: "SpO2 चे प्रमाण 94% पेक्षा कमी झाले आहे, ऑक्सिजन कमतरता दर्शवते.",
    rule_redflag_explain: "रुग्णाने छातीत दुखणे किंवा धाप लागणे यासारखी गंभीर लक्षणे नोंदवली आहेत.",
    rule_jump_explain: "मागील तपासणीच्या तुलनेत आरोग्याच्या लक्षणांमध्ये अचानक मोठी तफावत आढळली.",
    action_contact_patient: "रुग्णाशी त्वरित संपर्क साधा आणि नवीन तारीख निश्चित करा.",
    action_clinician_triage: "24 तासांच्या आत वैद्यकीय तपासणी किंवा सल्ला मिळवून द्या.",
    action_urgent_referral: "तातडीने तज्ज्ञ डॉक्टरांकडे पाठवून तपासणी करणे आवश्यक आहे.",
    sms_template_reminder: "नमस्कार {NAME}, स्वास्थ्य सेन्सकडून स्मरणपत्र: आपला फॉलो-अप {DATE} रोजी नियोजित आहे. कृपया आरोग्य केंद्राशी संपर्क साधा.",
    sms_template_overdue: "लक्ष द्या {NAME}: आपला {DATE} चा फॉलो-अप चुकला आहे. कृपया त्वरित आपल्या आशा सेविकेशी किंवा डॉक्टरांशी संपर्क साधा.",
    sms_template_checkin: "नमस्कार {NAME}, कृपया आजची आपली आरोग्य माहिती स्वास्थ्य सेन्सवर नोंदवा.",
    ai_disclaimer: "एआय केवळ मदतीसाठी आहे, ते औषधोपचार किंवा निदान ठरवत नाही. अंतिम निर्णय डॉक्टरांचा आहे."
  },
  as: {
    brand_tagline: "ফ'ল'-আপ প্ৰক্ৰিয়াত কোনো ৰোগী যাতে বাদ নপৰে",
    role_clinician: "যোগ্য চিকিৎসক (ডাক্তাৰ)",
    role_hw: "স্বাস্থ্য কৰ্মী (আশা/এএনএম)",
    role_admin: "প্ৰশাসক (এডমিন)",
    role_patient: "ৰোগী পৰ্টেল",
    nav_dashboard: "ডেশ্বব'ৰ্ড পৰিদৰ্শন",
    nav_priority: "স্মাৰ্ট অগ্ৰাধিকাৰ শাৰী",
    nav_attention: "এটেনচন ইঞ্জিন (ইউএছপি)",
    nav_patients: "ৰোগী পঞ্জীয়ন",
    nav_checkins: "ৰোগীৰ স্বাস্থ্য পৰীক্ষা",
    nav_followups: "ফ'ল'-আপ ব্যৱস্থাপনা",
    nav_referrals: "ৰেফাৰেল আৰু প্ৰেৰণ",
    nav_reminders: "স্মাৰক (SMS/হোৱাটছএপ)",
    nav_ai: "এআই সহায়ক",
    nav_rules: "নিয়মাৱলী সংৰূপ",
    nav_reports: "প্ৰতিবেদন আৰু বিশ্লেষণ",
    nav_audit: "অডিট ট্ৰেইল",
    badge_demo_rules: "নিয়মাৱলী",
    today_label: "আজিৰ তাৰিখ:",
    btn_add_patient: "+ ৰোগী যোগ কৰক",
    btn_new_checkin: "+ পৰীক্ষা তথ্য দিয়ক",
    btn_rules_info: "নিয়ম সংকেত",
    btn_logout: "লগ আউট",
    kpi_total_patients: "মুঠ পঞ্জীভুক্ত ৰোগী",
    kpi_today_appointments: "আজিৰ ফ'ল'-আপ",
    kpi_overdue: "ম্যাদ উকলি যোৱা ৰোগী",
    kpi_clinical_alerts: "চিকিৎসাজনিত সতৰ্কবাৰ্তা",
    kpi_completion_rate: "ফ'ল'-আপ সম্পন্ন হাৰ",
    kpi_open_referrals: "সক্ৰিয় ৰেফাৰেল",
    table_patient: "ৰোগীৰ নাম",
    table_age: "বয়স",
    table_category: "বিভাগ",
    table_followup: "ফ'ল'-আপৰ তাৰিখ",
    table_status: "স্থিতি",
    table_actions: "পদক্ষেপ",
    alert_overdue_title: "ফ'ল'-আপৰ ম্যাদ উকলিল",
    alert_clinical_title: "চিকিৎসকৰ মনোযোগ প্ৰয়োজন",
    rule_overdue_explain: "নিৰ্ধাৰিত ফ'ল'-আপৰ তাৰিখ পাৰ হৈ গ'ল আৰু পৰীক্ষা সম্পন্ন কৰা হোৱা নাই।",
    rule_temp_explain: "শৰীৰৰ উত্তাপ 38.0°C বা ততোধিক নথিভুক্ত কৰা হৈছে (তীব্ৰ জ্বৰ)।",
    rule_bp_explain: "ৰক্তচাপ 140/90 mmHg তকৈ বৃদ্ধি পাইছে (উচ্চ ৰক্তচাপ)।",
    rule_spo2_explain: "SpO2 ৰ মাত্ৰা 94% তকৈ হ্ৰাস পাইছে, শ্বাস-প্ৰশ্বাসৰ জটিলতা বুজায়।",
    rule_redflag_explain: "ৰোগীয়ে বুকুৰ বিষ বা অতিমাত্ৰা উশাহ চুটি হোৱাৰ লক্ষণ জনাইছে।",
    rule_jump_explain: "পূৰ্বৰ পৰীক্ষাৰ তুলনাত স্বাস্থ্য লক্ষণৰ আকস্মিক বিপজ্জনক পৰিৱৰ্তন ঘটিছে।",
    action_contact_patient: "ৰোগীৰ সৈতে যোগাযোগ কৰি শীঘ্ৰে নতুন দিন নিৰ্ধাৰণ কৰক।",
    action_clinician_triage: "২৪ ঘণ্টাৰ ভিতৰত চিকিৎসকৰ পৰামৰ্শ বা ক্লিনিকেল পৰীক্ষাৰ ব্যৱস্থা কৰক।",
    action_urgent_referral: "তৎক্ষণাত বিশেষজ্ঞ চিকিৎসকৰ দ্বাৰা স্বাস্থ্য পৰীক্ষাৰ অনুমোদন দিয়া হ'ল।",
    sms_template_reminder: "নমস্কাৰ {NAME}, স্বাস্থ্য চেন্সৰ পৰা সোঁৱৰণি: আপোনাৰ ফ'ল'-আপ {DATE} তাৰিখে নিৰ্ধাৰিত আছে। স্বাস্থ্য কৰ্মীৰ সৈতে যোগাযোগ কৰক।",
    sms_template_overdue: "সতৰ্কবাৰ্তা {NAME}: আপোনাৰ {DATE} তাৰিখৰ ফ'ল'-আপ পলম হৈছে। অনুগ্ৰহ কৰি ততাতৈয়াকৈ আশা বা ডাক্তৰৰ সৈতে যোগাযোগ কৰক।",
    sms_template_checkin: "নমস্কাৰ {NAME}, অনুগ্ৰহ কৰি আজিৰ স্বাস্থ্য পৰীক্ষাৰ তথ্য স্বাস্থ্য চেন্সত দাখিল কৰক।",
    ai_disclaimer: "এআই ব্যৱস্থাই চিকিৎসা নিদান নিদিয়ে। চূড়ান্ত সিদ্ধান্ত চিকিৎসকেহে গ্ৰহণ কৰিব।"
  },
  bn: {
    brand_tagline: "ফলো-আপ প্রক্রিয়ায় কোনো রোগী যেন বাদ না পড়ে",
    role_clinician: "যোগ্য চিকিৎসক (ডাক্তার)",
    role_hw: "স্বাস্থ্যকর্মী (আশা/এএনএম)",
    role_admin: "সিস্টেম অ্যাডমিনিস্ট্রেটর",
    role_patient: "রোগী পোর্টাল",
    nav_dashboard: "ড্যাশবোর্ড পর্যবেক্ষণ",
    nav_priority: "স্মার্ট অগ্রাধিকার তালিকা",
    nav_attention: "অ্যাটেনশন ইঞ্জিন (প্রধান ইউএসপি)",
    nav_patients: "রোগী রেজিস্ট্রি",
    nav_checkins: "রোগীর চেক-ইন তথ্য",
    nav_followups: "ফলো-আপ ব্যবস্থাপনা",
    nav_referrals: "রেফারেল ও স্থানান্তর",
    nav_reminders: "রিমাইন্ডার (SMS/হোয়াটসঅ্যাপ)",
    nav_ai: "এআই সহায়তা সহায়ক",
    nav_rules: "নিয়ম কনফিগারেশন",
    nav_reports: "রিপোর্ট ও বিশ্লেষণ",
    nav_audit: "অডিট ট্রেইল",
    badge_demo_rules: "ক্লিনিক্যাল নিয়মাবলী",
    today_label: "আজকের তারিখ:",
    btn_add_patient: "+ নতুন রোগী যোগ করুন",
    btn_new_checkin: "+ চেক-ইন তথ্য লিপিবদ্ধ করুন",
    btn_rules_info: "নিয়ম গাইড",
    btn_logout: "লগ আউট",
    kpi_total_patients: "মোট নিবন্ধিত রোগী",
    kpi_today_appointments: "আজকের ফলো-আপ",
    kpi_overdue: "মেয়াদোত্তীর্ণ (Overdue) রোগী",
    kpi_clinical_alerts: "ক্লিনিক্যাল পর্যালোচনা অ্যালার্ট",
    kpi_completion_rate: "ফলো-আপ সমাপ্তির হার",
    kpi_open_referrals: "সক্রিয় রেফারেল",
    table_patient: "রোগীর নাম",
    table_age: "বয়স",
    table_category: "বিভাগ",
    table_followup: "ফলো-আপের তারিখ",
    table_status: "অবস্থা",
    table_actions: "পদক্ষেপ",
    alert_overdue_title: "মেয়াদোত্তীর্ণ ফলো-আপ প্রয়োজন",
    alert_clinical_title: "ক্লিনিক্যাল দৃষ্টি প্রয়োজন",
    rule_overdue_explain: "নির্ধারিত ফলো-আপের তারিখ পেরিয়ে গেছে কিন্তু ফলো-আপ সম্পন্ন হিসেবে চিহ্নিত হয়নি।",
    rule_temp_explain: "শরীরের তাপমাত্রা ৩৮.০° সেলসিয়াস বা তার বেশি পাওয়া গেছে (উচ্চ জ্বর)।",
    rule_bp_explain: "রক্তচাপ ১৪০/৯০ mmHg এর বেশি রেকর্ড হয়েছে (স্টেজ ২ হাইপারটেনশন)।",
    rule_spo2_explain: "SpO2 মাত্রা ৯৪% এর নিচে নেমে গেছে, যা শ্বাসকষ্টের সংকেত বহন করে।",
    rule_redflag_explain: "রোগী বুকে ব্যথা বা তীব্র শ্বাসকষ্টের মতো বিপজ্জনক লক্ষণ উল্লেখ করেছেন।",
    rule_jump_explain: "পূর্ববর্তী চেকিংয়ের তুলনায় শারীরিক লক্ষণসমূহে আকস্মিক তীব্র পরিবর্তন ঘটেছে।",
    action_contact_patient: "রোগীর সাথে দ্রুত যোগাযোগ করুন এবং পুনরায় তারিখ নির্ধারণ করুন।",
    action_clinician_triage: "২৪ ঘণ্টার মধ্যে ডাক্তারের পরামর্শ বা হাসপাতালে নিরীক্ষণের ব্যবস্থা নিন।",
    action_urgent_referral: "অবিলম্বে বিশেষজ্ঞ ডাক্তারের কাছে নিয়ে পরীক্ষার পরামর্শ দেওয়া হচ্ছে।",
    sms_template_reminder: "নমস্কার {NAME}, স্বাস্থ্য সেন্স থেকে রিমাইন্ডার: আপনার স্বাস্থ্য ফলো-আপ {DATE} তারিখে নির্ধারিত। স্বাস্থ্যকর্মীর সাথে যোগাযোগ করুন।",
    sms_template_overdue: "মনোযোগ দিন {NAME}: আপনার {DATE} তারিখের ফলো-আপের সময় পার হয়ে গেছে। অনুগ্রহ করে দ্রুত আপনার আশা দিদি বা ডাক্তারের সাথে দেখা করুন।",
    sms_template_checkin: "নমস্কার {NAME}, অনুগ্রহ করে আজকের স্বাস্থ্য পরিস্থিতি স্বাস্থ্য সেন্সে জানান।",
    ai_disclaimer: "এআই শুধুমাত্র সহায়তাকারী স্তর। এটি কোনো প্রেসক্রিপশন বা রোগ নির্ণয় করে না। চিকিৎসকের সিদ্ধান্তই চূড়ান্ত।"
  }
};

let currentLang = localStorage.getItem("swasthyaSense_currentLang") || localStorage.getItem("swasthyaLang") || "en";

function t(key) {
  return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS["en"]?.[key] || key;
}

function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem("swasthyaSense_currentLang", lang);
  localStorage.setItem("swasthyaLang", lang);

  // Update dropdown value
  const select = $("langSelect");
  if (select) select.value = lang;

  // Re-render texts
  updateStaticTranslations();
  renderAll();
}

function updateStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (key && t(key)) {
      el.textContent = t(key);
    }
  });

  const tagline = $("brandTagline");
  if (tagline) tagline.textContent = t("brand_tagline");

  const todayLabel = $("todayText");
  if (todayLabel) todayLabel.textContent = t("today_label");
}

// =============================================================================
// 2. ACTIVE USER & ROLE PROFILE
// =============================================================================
function getActiveProfile() {
  try {
    const p = JSON.parse(localStorage.getItem("doctorProfile") || "{}");
    const role = localStorage.getItem("activeUserRole") || p.role || "clinician";
    const customName = localStorage.getItem("swasthyaSense_doctorName") || localStorage.getItem("swasthyaSense_userName");
    return {
      name: customName || p.full_name || p.name || "Dr. Ananya Sharma",
      role: role,
      facility: p.facility || "District Civil Hospital, Triage Ward",
      email: p.email || "clinician@swasthya-sense.gov.in"
    };
  } catch (e) {
    const customName = localStorage.getItem("swasthyaSense_doctorName") || localStorage.getItem("swasthyaSense_userName");
    return {
      name: customName || "Dr. Ananya Sharma",
      role: "clinician",
      facility: "District Civil Hospital",
      email: "clinician@swasthya-sense.gov.in"
    };
  }
}

let activeUser = getActiveProfile();

function switchRole(newRole) {
  activeUser.role = newRole;
  localStorage.setItem("activeUserRole", newRole);
  const p = JSON.parse(localStorage.getItem("doctorProfile") || "{}");
  p.role = newRole;
  localStorage.setItem("doctorProfile", JSON.stringify(p));

  toast(`Switched active view to: ${getRoleDisplayName(newRole)}`);
  log("User switched role view", `Active role: ${newRole}`);
  updateRoleDisplay();
  renderAll();
}

function getRoleDisplayName(role) {
  if (role === "admin") return t("role_admin");
  if (role === "healthcare_worker") return t("role_hw");
  if (role === "patient") return t("role_patient");
  return t("role_clinician");
}

function updateRoleDisplay() {
  const roleSelect = $("roleSelect");
  if (roleSelect) roleSelect.value = activeUser.role;

  const roleText = $("activeRoleBadge");
  if (roleText) roleText.textContent = getRoleDisplayName(activeUser.role);

  const docGreeting = $("doctorGreeting");
  if (docGreeting) docGreeting.textContent = activeUser.name;

  const sidebarDoc = $("sidebarDoctorName");
  if (sidebarDoc) sidebarDoc.textContent = activeUser.name;

  const sidebarRole = $("sidebarDoctorRole");
  if (sidebarRole) sidebarRole.textContent = getRoleDisplayName(activeUser.role);

  const sidebarInitials = $("sidebarInitials");
  if (sidebarInitials) {
    sidebarInitials.textContent = activeUser.name
      .replace(/Dr\.\s*/i, "")
      .split(/\s+/)
      .map(x => x[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "DOC";
  }

  // Adjust permission sensitive tabs
  const rulesNav = document.querySelector(".nav-link[data-target='rules-config']");
  if (rulesNav) {
    rulesNav.style.display = (activeUser.role === "admin" || activeUser.role === "clinician") ? "flex" : "none";
  }
}

// =============================================================================
// 3. SYNTHETIC PRELOADED DATA FOR HACKATHON EVALUATION
// =============================================================================
function getInitialSyntheticState() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const fiveDaysAgo = new Date();
  fiveDaysAgo.setDate(fiveDaysAgo.getDate() - 5);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return {
    patients: [
      {
        id: "SS-HYP-01",
        name: "Ramesh Kumar",
        age: 58,
        category: "Chronic",
        date: fiveDaysAgo.toISOString().slice(0, 10),
        status: "Pending",
        phone: "9876543210",
        language: "Hindi",
        communication: "SMS",
        notes: "Hypertension Stage 2 with mild chest tightness on exertion. Needs regular BP check.",
        consent: true,
        inactive: false,
        createdAt: new Date(Date.now() - 30 * 86400000).toISOString(),
        contactAttempts: [
          { date: new Date(Date.now() - 2 * 86400000).toISOString(), method: "Phone call", note: "Called phone; patient was away working at farm. Follow-up pending." }
        ],
        followupHistory: [
          { date: fiveDaysAgo.toISOString().slice(0, 10), status: "Pending", note: "Monthly chronic BP medication check-in" }
        ]
      },
      {
        id: "SS-PRG-02",
        name: "Priya Sharma",
        age: 26,
        category: "Pregnancy",
        date: yesterday.toISOString().slice(0, 10),
        status: "Pending",
        phone: "9811223344",
        language: "Hindi",
        communication: "WhatsApp",
        notes: "Second trimester (24 weeks). High-risk due to gestational fever signs.",
        consent: true,
        inactive: false,
        createdAt: new Date(Date.now() - 60 * 86400000).toISOString(),
        contactAttempts: [],
        followupHistory: [
          { date: yesterday.toISOString().slice(0, 10), status: "Pending", note: "Antenatal routine check-in" }
        ]
      },
      {
        id: "SS-PST-03",
        name: "Sunil Verma",
        age: 64,
        category: "Post-illness",
        date: today(),
        status: "Pending",
        phone: "9765432109",
        language: "Marathi",
        communication: "Phone call",
        notes: "Post-pneumonia recovery. Reported shortness of breath and oxygen drops.",
        consent: true,
        inactive: false,
        createdAt: new Date(Date.now() - 14 * 86400000).toISOString(),
        contactAttempts: [],
        followupHistory: [
          { date: today(), status: "Pending", note: "Post-discharge day 14 check-in" }
        ]
      },
      {
        id: "SS-DIA-04",
        name: "Amina Khatun",
        age: 42,
        category: "Chronic",
        date: tomorrow.toISOString().slice(0, 10),
        status: "Pending",
        phone: "9830112233",
        language: "Bengali",
        communication: "SMS",
        notes: "Type 2 Diabetes. Blood glucose monitoring and dietary compliance review.",
        consent: true,
        inactive: false,
        createdAt: new Date(Date.now() - 45 * 86400000).toISOString(),
        contactAttempts: [],
        followupHistory: [
          { date: tomorrow.toISOString().slice(0, 10), status: "Scheduled", note: "Fasting glucose review" }
        ]
      },
      {
        id: "SS-GEN-05",
        name: "Bikash Gogoi",
        age: 35,
        category: "General",
        date: today(),
        status: "Completed",
        phone: "9435012345",
        language: "Assamese",
        communication: "WhatsApp",
        notes: "Routine health screening after seasonal viral fever. All vitals normalized.",
        consent: true,
        inactive: false,
        createdAt: new Date(Date.now() - 20 * 86400000).toISOString(),
        contactAttempts: [
          { date: today(), method: "In person", note: "Patient attended clinic; vitals checked normal." }
        ],
        followupHistory: [
          { date: today(), status: "Completed", note: "Vitals normal, recovery verified" }
        ]
      }
    ],
    checkins: [
      {
        id: "CHK-001",
        patientId: "SS-PRG-02",
        date: today(),
        createdAt: new Date().toISOString(),
        temperature: "38.6",
        bp: "135/88",
        pulse: "104",
        spo2: "97",
        bloodSugar: "102",
        measurement: "Fetal movement active",
        concern: "High fever since last night, severe frontal headache and slight dizziness.",
        source: "Patient-Reported",
        consent: true,
        comparison: "Previous baseline: Temp 36.8°C; BP 118/76. Significant temperature spike (+1.8°C)."
      },
      {
        id: "CHK-002",
        patientId: "SS-PST-03",
        date: today(),
        createdAt: new Date().toISOString(),
        temperature: "37.4",
        bp: "156/98",
        pulse: "112",
        spo2: "91",
        bloodSugar: "128",
        measurement: "Respiratory rate 26/min",
        concern: "Severe shortness of breath when walking 10 steps, persistent dry cough and chest tightness.",
        source: "Healthcare-Worker-Assisted",
        consent: true,
        comparison: "Previous baseline: SpO2 96%, BP 130/85. Acute drop in SpO2 (-5%) and BP spike."
      },
      {
        id: "CHK-003",
        patientId: "SS-HYP-01",
        date: yesterday.toISOString().slice(0, 10),
        createdAt: yesterday.toISOString(),
        temperature: "36.9",
        bp: "162/102",
        pulse: "88",
        spo2: "98",
        bloodSugar: "142",
        measurement: "",
        concern: "Mild dizziness in morning, forgot evening antihypertensive tablets.",
        source: "Patient-Reported",
        consent: true,
        comparison: "Previous baseline: BP 148/92. Continued uncontrolled Stage 2 Hypertension."
      }
    ],
    referrals: [
      {
        id: "REF-001",
        patientId: "SS-PRG-02",
        facility: "District Hospital - OB/GYN Speciality Ward",
        assignee: "Dr. Ananya Sharma",
        status: "Open",
        reason: "Gestational fever at 38.6°C with headache. Requires maternal & fetal monitoring.",
        outcome: "",
        createdAt: new Date(Date.now() - 3 * 3600000).toISOString(),
        closedAt: null
      }
    ],
    reminders: [
      {
        id: "MSG-001",
        patientId: "SS-HYP-01",
        channel: "SMS",
        message: "Attention Ramesh Kumar: Your health follow-up was scheduled for 5 days ago and is now overdue. Please contact your ASHA worker or doctor as soon as possible.",
        date: today(),
        time: "10:00",
        status: "Delivered (simulated)",
        createdAt: new Date(Date.now() - 5 * 3600000).toISOString()
      }
    ],
    activities: [
      {
        id: "ACT-01",
        action: "Attention Engine Alert Triggered",
        details: "Critical alert generated for Priya Sharma (SS-PRG-02): Temp 38.6°C",
        actor: "System Engine",
        at: new Date().toISOString()
      },
      {
        id: "ACT-02",
        action: "Referral Created",
        details: "Priya Sharma referred to OB/GYN Speciality Ward by Dr. Ananya Sharma",
        actor: "Dr. Ananya Sharma",
        at: new Date(Date.now() - 3 * 3600000).toISOString()
      },
      {
        id: "ACT-03",
        action: "Check-in Submitted",
        details: "Sunil Verma check-in recorded: SpO2 91% (Hypoxia flagged)",
        actor: "Sunita Devi (ASHA)",
        at: new Date(Date.now() - 4 * 3600000).toISOString()
      }
    ],
    alerts: [],
    alertStates: {
      "priority-SS-HYP-01": "Pending"
    },
    doctor: "Dr. Ananya Sharma"
  };
}

// Configurable Rules Thresholds (Module E18)
function getRuleConfig() {
  try {
    const raw = localStorage.getItem(RULE_CONFIG_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}

  return {
    feverTempC: 38.0,
    bpSystolicMax: 140,
    bpDiastolicMax: 90,
    spo2Min: 94,
    tempJumpMax: 1.5,
    bpJumpMax: 20
  };
}

let ruleConfig = getRuleConfig();

function saveRuleConfig(newConfig) {
  ruleConfig = { ...ruleConfig, ...newConfig };
  localStorage.setItem(RULE_CONFIG_KEY, JSON.stringify(ruleConfig));
  log("Rule Configuration Updated", `New thresholds: Fever >= ${ruleConfig.feverTempC}°C, BP >= ${ruleConfig.bpSystolicMax}/${ruleConfig.bpDiastolicMax}, SpO2 < ${ruleConfig.spo2Min}%`);
}

// =============================================================================
// 4. STATE STORAGE AND SYNC
// =============================================================================
function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed.patients && parsed.patients.length > 0) {
        return {
          patients: parsed.patients || [],
          checkins: parsed.checkins || [],
          referrals: parsed.referrals || [],
          reminders: parsed.reminders || [],
          activities: parsed.activities || [],
          alerts: parsed.alerts || [],
          alertStates: parsed.alertStates || {},
          doctor: parsed.doctor || activeUser.name
        };
      }
    }
  } catch (e) {
    console.error("Error loading dashboard state:", e);
  }

  // Fallback to rich synthetic dataset
  const initial = getInitialSyntheticState();
  localStorage.setItem(STORE_KEY, JSON.stringify(initial));
  return initial;
}

let state = loadState();

function save() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));

  // Sync with Attention Center & Patient Portal
  localStorage.setItem(ATTENTION_KEY, JSON.stringify({
    patients: state.patients,
    checkins: state.checkins,
    alertStates: state.alertStates || {}
  }));
}

function syncAttentionCenter() {
  save();
}

// =============================================================================
// 5. COMMON UTILITIES & MODAL SYSTEM
// =============================================================================
function log(action, details) {
  state.activities.unshift({
    id: uid("ACT"),
    action,
    details,
    actor: activeUser.name,
    at: new Date().toISOString()
  });

  state.activities = state.activities.slice(0, 300);
  save();
}

function toast(message) {
  const t = $("toast");
  if (!t) return;
  t.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--aqua)"></i> ${safe(message)}`;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

function patient(id) {
  return state.patients.find(p => p.id === id);
}

function badge(status) {
  const s = String(status || "Pending").toLowerCase().replace(/\s+/g, "-");
  return `<span class="badge ${safe(s)}">${safe(status || "Pending")}</span>`;
}

function openModal(title, html, onSubmit) {
  $("modalTitle").textContent = title;
  $("modalBody").innerHTML = html;
  $("modalBackdrop").classList.add("show");

  const form = $("modalBody").querySelector("form");
  if (form && onSubmit) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      onSubmit(new FormData(form), form);
    });
  }
}

function closeModal() {
  $("modalBackdrop").classList.remove("show");
  $("modalBody").innerHTML = "";
}

window.closeModal = closeModal;

function field(label, name, type = "text", value = "", required = false, opts = "") {
  if (type === "select") {
    return `
      <div class="field">
        <label>${label}</label>
        <select name="${name}" ${required ? "required" : ""}>
          ${opts}
        </select>
      </div>
    `;
  }

  if (type === "textarea") {
    return `
      <div class="field full">
        <label>${label}</label>
        <textarea name="${name}" ${required ? "required" : ""}>${safe(value)}</textarea>
      </div>
    `;
  }

  return `
    <div class="field">
      <label>${label}</label>
      <input name="${name}" type="${type}" value="${safe(value)}" ${required ? "required" : ""}>
    </div>
  `;
}

function patientOptions(selected = "") {
  return state.patients
    .filter(p => !p.inactive)
    .map(p => `
      <option value="${p.id}" ${p.id === selected ? "selected" : ""}>
        ${safe(p.name)} (${p.id} - ${safe(p.category)})
      </option>
    `)
    .join("");
}

// Navigation between sections
function showSection(id) {
  document.querySelectorAll(".section").forEach(s => {
    s.classList.toggle("active", s.id === id);
  });

  document.querySelectorAll(".nav-link[data-target]").forEach(b => {
    b.classList.toggle("active", b.dataset.target === id);
  });

  const titles = {
    dashboard: t("nav_dashboard"),
    priority: t("nav_priority"),
    attention: t("nav_attention"),
    patients: t("nav_patients"),
    checkins: t("nav_checkins"),
    followups: t("nav_followups"),
    referrals: t("nav_referrals"),
    reminders: t("nav_reminders"),
    "ai-assistant": t("nav_ai"),
    "rules-config": t("nav_rules"),
    reports: t("nav_reports"),
    audit: t("nav_audit")
  };

  $("pageTitle").textContent = titles[id] || "Dashboard";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.showSection = showSection;

// =============================================================================
// 6. PATIENT REGISTRY (MODULE B)
// =============================================================================
function addPatientModal(existing = null) {
  const p = existing || {};

  openModal(
    existing ? "Edit Patient Record" : "Register New High-Risk Patient",
    `<form>
      <div class="form-grid">
        ${field("Full Patient Name", "name", "text", p.name || "", true)}
        ${field("Age (Years)", "age", "number", p.age || "", true)}
        ${field(
          "Care Programme / Category",
          "category",
          "select",
          p.category || "General",
          true,
          ["General", "Pregnancy", "Chronic", "Post-illness"]
            .map(x => `<option ${p.category === x ? "selected" : ""}>${x}</option>`)
            .join("")
        )}
        ${field("Scheduled Follow-up Date", "date", "date", p.date || today(), true)}
        ${field(
          "Follow-up Status",
          "status",
          "select",
          p.status || "Pending",
          true,
          ["Pending", "Completed", "Missed"]
            .map(x => `<option ${p.status === x ? "selected" : ""}>${x}</option>`)
            .join("")
        )}
        ${field("Mobile Number (SMS/WhatsApp)", "phone", "tel", p.phone || "")}
        ${field(
          "Preferred Communication Language",
          "language",
          "select",
          p.language || "Hindi",
          false,
          ["English", "Hindi", "Marathi", "Assamese", "Bengali"]
            .map(x => `<option ${p.language === x ? "selected" : ""}>${x}</option>`)
            .join("")
        )}
        ${field(
          "Preferred Notification Channel",
          "communication",
          "select",
          p.communication || "SMS",
          false,
          ["SMS", "WhatsApp", "Phone call", "No messages"]
            .map(x => `<option ${p.communication === x ? "selected" : ""}>${x}</option>`)
            .join("")
        )}
        <div class="field full">
          <label>Clinical Background / Patient Notes</label>
          <textarea name="notes" placeholder="Prior diagnosis, medications, risk factors...">${safe(p.notes || "")}</textarea>
        </div>
        <label class="checkline field full">
          <input type="checkbox" name="consent" ${p.consent !== false ? "checked" : ""}>
          Informed consent recorded for health data retention and SMS/WhatsApp follow-ups.
        </label>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary">${existing ? "Save Updates" : "Register Patient"}</button>
      </div>
    </form>`,
    fd => {
      const data = Object.fromEntries(fd.entries());
      data.age = Number(data.age);
      data.consent = fd.has("consent");
      data.inactive = false;

      if (!data.name.trim() || data.age < 0 || data.age > 120) {
        toast("Please enter a valid patient name and age.");
        return;
      }

      if (existing) {
        Object.assign(existing, data);
        log("Patient Profile Updated", `${existing.name} (${existing.id})`);
      } else {
        const np = {
          id: uid("SS"),
          ...data,
          createdAt: new Date().toISOString(),
          contactAttempts: [],
          followupHistory: [
            {
              date: data.date,
              status: data.status,
              note: "Initial follow-up scheduled",
              createdAt: new Date().toISOString()
            }
          ]
        };
        state.patients.unshift(np);
        log("New Patient Registered", `${np.name} [ID: ${np.id}, Category: ${np.category}]`);
      }

      save();
      closeModal();
      renderAll();
      toast(existing ? "Patient details updated" : "New patient registered successfully");
    }
  );
}

function viewPatient(id) {
  const p = patient(id);
  if (!p) return;

  const checks = state.checkins.filter(c => c.patientId === id);
  const refs = state.referrals.filter(r => r.patientId === id);

  const historyHtml = (p.followupHistory || [])
    .map(h => `
      <div class="timeline-item">
        <b>${safe(h.status)} · ${fmt(h.date)}</b>
        <small>${safe(h.note || "Follow-up record")}</small>
      </div>
    `)
    .join("") || "<p class='empty-state'>No follow-up history logged.</p>";

  const attemptsHtml = (p.contactAttempts || [])
    .map(a => `
      <div class="timeline-item">
        <b>${safe(a.method)} · ${new Date(a.date).toLocaleDateString()}</b>
        <small>${safe(a.note)}</small>
      </div>
    `)
    .join("") || "<p class='empty-state'>No contact attempts logged.</p>";

  openModal(
    `Patient File: ${p.name} (${p.id})`,
    `<div class="preview-box">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
        <div>
          <strong style="font-size:15px; color:var(--navy);">${safe(p.name)}</strong>
          <span style="margin-left:8px;" class="badge ${p.category.toLowerCase()}">${safe(p.category)}</span>
          ${p.inactive ? '<span class="badge red">Inactive</span>' : ''}
        </div>
        <span class="badge ${p.status.toLowerCase()}">${safe(p.status)}</span>
      </div>
      <b>Age:</b> ${safe(p.age)} yrs · <b>Phone:</b> ${safe(p.phone || "Not provided")} · <b>Lang:</b> ${safe(p.language || "English")}<br>
      <b>Next Scheduled Follow-up:</b> ${fmt(p.date)} (${p.status})<br>
      <b>Consent Recorded:</b> ${p.consent ? "Yes (Authorized)" : "No"}<br>
      <b>Clinical Notes:</b> ${safe(p.notes || "None entered.")}
    </div>

    <div class="grid-two" style="margin-top:14px; margin-bottom:0;">
      <div>
        <h4 style="font-size:12px; margin-bottom:8px; color:var(--navy);">Follow-up Journey</h4>
        <div class="timeline" style="max-height:160px; overflow-y:auto;">${historyHtml}</div>
      </div>
      <div>
        <h4 style="font-size:12px; margin-bottom:8px; color:var(--navy);">Contact Attempt Logs</h4>
        <div class="timeline" style="max-height:160px; overflow-y:auto;">${attemptsHtml}</div>
      </div>
    </div>

    <div style="margin-top:14px; background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:10px;">
      <b>Activity Counts:</b> Check-ins: <b>${checks.length}</b> · Referrals: <b>${refs.length}</b>
    </div>

    <div class="form-actions">
      <button class="btn btn-outline" onclick="editPatient('${id}')">Edit Profile</button>
      <button class="btn btn-outline" onclick="deactivatePatient('${id}')">${p.inactive ? "Reactivate Record" : "Deactivate Record"}</button>
      <button class="btn btn-primary" onclick="quickAiBrief('${id}')"><i class="fa-solid fa-wand-magic-sparkles"></i> AI Summary</button>
      <button class="btn btn-primary" onclick="closeModal()">Close</button>
    </div>`
  );
}

function editPatient(id) {
  const p = patient(id);
  closeModal();
  addPatientModal(p);
}

function deactivatePatient(id) {
  const p = patient(id);
  if (!p) return;
  p.inactive = !p.inactive;
  log(p.inactive ? "Patient Record Deactivated" : "Patient Record Reactivated", `${p.name} (${p.id})`);
  save();
  closeModal();
  renderAll();
  toast(`Patient ${p.inactive ? "deactivated" : "reactivated"}`);
}

window.viewPatient = viewPatient;
window.editPatient = editPatient;
window.deactivatePatient = deactivatePatient;

function renderPatients() {
  const q = ($("patientSearch")?.value || "").toLowerCase().trim();
  const cat = $("patientCategoryFilter")?.value || "";
  const st = $("patientStatusFilter")?.value || "";

  const rows = state.patients.filter(p => {
    const matchQ = !q || p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || (p.phone && p.phone.includes(q));
    const matchCat = !cat || p.category === cat;
    const matchSt = !st || (st === "Inactive" ? p.inactive : (!p.inactive && p.status === st));
    return matchQ && matchCat && matchSt;
  });

  const table = $("patientTable");
  if (!table) return;

  table.innerHTML = rows.map(p => `
    <tr>
      <td>
        <strong>${safe(p.name)}</strong>
        <small>${safe(p.id)} ${p.inactive ? "· Inactive" : ""} · ${safe(p.phone || "No phone")}</small>
      </td>
      <td>${safe(p.age)}</td>
      <td><span class="badge ${safe(p.category.toLowerCase())}">${safe(p.category)}</span></td>
      <td>${fmt(p.date)}</td>
      <td>${badge(p.inactive ? "Inactive" : p.status)}</td>
      <td>
        <div class="actions">
          <button class="mini-btn" onclick="viewPatient('${p.id}')">View</button>
          <button class="mini-btn" onclick="editPatient('${p.id}')">Edit</button>
          <button class="mini-btn" onclick="completeFollowup('${p.id}')">Complete</button>
        </div>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="6" class="empty-state">No matching patients found. Add a patient to begin.</td></tr>`;
}

function completeFollowup(id) {
  const p = patient(id);
  if (!p) return;

  p.status = "Completed";
  p.followupHistory = p.followupHistory || [];
  p.followupHistory.unshift({
    date: today(),
    status: "Completed",
    note: "Follow-up marked completed by " + activeUser.name,
    createdAt: new Date().toISOString()
  });

  log("Follow-up Marked Completed", `${p.name} (${p.id})`);
  save();
  renderAll();
  toast(`Follow-up completed for ${p.name}`);
}

window.completeFollowup = completeFollowup;

// =============================================================================
// 7. PATIENT CHECK-IN SYSTEM (MODULE C)
// =============================================================================
function addCheckinModal() {
  if (!state.patients.length) {
    toast("Please add a patient first.");
    return;
  }

  openModal(
    "Record Patient Check-in & Measurements",
    `<form>
      <div class="form-grid">
        ${field("Select Patient", "patientId", "select", "", true, patientOptions())}
        ${field("Check-in Date", "date", "date", today(), true)}
        ${field("Temperature (°C)", "temperature", "number", "37.0")}
        ${field("Blood Pressure (Sys/Dia e.g. 130/85)", "bp", "text", "120/80")}
        ${field("Pulse Rate (bpm)", "pulse", "number", "76")}
        ${field("Oxygen Saturation - SpO2 (%)", "spo2", "number", "98")}
        ${field("Blood Sugar (mg/dL optional)", "bloodSugar", "number", "")}
        ${field("Other Measurement (e.g. Weight kg)", "measurement", "text", "")}
        
        <div class="field full">
          <label>Patient-Reported Concerns / Symptoms in Patient's Own Words</label>
          <textarea name="concern" placeholder="Describe symptoms (e.g. fever, headache, chest discomfort)..."></textarea>
        </div>

        <div class="field">
          <label>Data Recording Mode</label>
          <select name="source">
            <option value="Healthcare-Worker-Assisted">Healthcare-Worker-Assisted (Verified)</option>
            <option value="Patient-Reported">Patient-Reported (Self-checkin)</option>
            <option value="Clinician-Recorded">Clinician-Recorded (In-clinic)</option>
          </select>
        </div>

        <label class="checkline field full">
          <input type="checkbox" name="consent" required checked>
          Patient consent confirmed for recording this clinical check-in.
        </label>
      </div>

      <div class="form-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary">Save & Evaluate Rules</button>
      </div>
    </form>`,
    fd => {
      const d = Object.fromEntries(fd.entries());
      d.id = uid("CHK");
      d.createdAt = new Date().toISOString();
      d.consent = fd.has("consent");

      // Baseline comparison with previous checkin
      const prev = state.checkins
        .filter(c => c.patientId === d.patientId)
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))[0];

      if (prev) {
        const tempDiff = d.temperature && prev.temperature ? (Number(d.temperature) - Number(prev.temperature)).toFixed(1) : null;
        d.comparison = `Previous: Temp ${prev.temperature || "—"}°C, BP ${prev.bp || "—"}, SpO2 ${prev.spo2 || "—"}%${tempDiff ? ` (Temp Δ ${tempDiff > 0 ? "+" + tempDiff : tempDiff}°C)` : ""}`;
      } else {
        d.comparison = "First baseline check-in recorded.";
      }

      state.checkins.unshift(d);
      const p = patient(d.patientId);
      log("Patient Check-in Recorded", `${p?.name || "Patient"} - Temp: ${d.temperature || "—"}°C, BP: ${d.bp || "—"}, SpO2: ${d.spo2 || "—"}%`);

      save();
      closeModal();
      renderAll();
      toast("Check-in saved and evaluated against Attention Engine rules");
    }
  );
}

function renderCheckins() {
  const table = $("checkinTable");
  if (!table) return;

  table.innerHTML = state.checkins.map(c => {
    const p = patient(c.patientId);
    return `
      <tr>
        <td>${fmt(c.date)}</td>
        <td>
          <strong>${safe(p?.name || "Unknown")}</strong>
          <small>${safe(c.patientId)} · <span class="badge ${c.source === "Patient-Reported" ? "orange" : "blue"}">${safe(c.source || "Recorded")}</span></small>
        </td>
        <td>${safe(c.concern || "No concerns reported.")}</td>
        <td>
          <b>Temp:</b> ${safe(c.temperature || "—")}°C · <b>BP:</b> ${safe(c.bp || "—")}<br>
          <b>Pulse:</b> ${safe(c.pulse || "—")} bpm · <b>SpO2:</b> ${safe(c.spo2 || "—")}%
        </td>
        <td><small style="color:#475569;">${safe(c.comparison || "—")}</small></td>
        <td>
          <button class="mini-btn" onclick="viewPatient('${c.patientId}')">View File</button>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="6" class="empty-state">No check-ins recorded.</td></tr>`;
}

// =============================================================================
// 8. PATIENT ATTENTION ENGINE — PRIMARY USP (MODULE E)
// =============================================================================
function deriveAlerts() {
  const alerts = [];
  const activePatients = state.patients.filter(p => !p.inactive);

  // 1. Evaluate Administrative Overdue Rule
  activePatients.forEach(p => {
    if (p.status !== "Completed" && p.date && p.date < today()) {
      const days = Math.floor((new Date() - new Date(p.date + "T00:00:00")) / 86400000);
      const key = "overdue-" + p.id;
      alerts.push({
        id: key,
        patientId: p.id,
        type: "overdue",
        priority: "Administrative",
        rule: "RULE_FOLLOWUP_DATE_OVERDUE",
        title: t("alert_overdue_title"),
        triggerValue: `Scheduled Date: ${fmt(p.date)} (${days} days overdue)`,
        timestamp: new Date().toISOString(),
        reason: t("rule_overdue_explain") + ` (${days} days overdue).`,
        recommendedAction: t("action_contact_patient"),
        state: state.alertStates?.[key] || "Open"
      });
    }
  });

  // 2. Evaluate Clinical Review Rules from Check-ins
  state.checkins.forEach(c => {
    const p = patient(c.patientId);
    if (!p || p.inactive) return;

    const temp = Number(c.temperature);
    const spo2 = Number(c.spo2);
    const concernText = (c.concern || "").toLowerCase();

    // Parse blood pressure
    let sys = 0, dia = 0;
    if (c.bp && c.bp.includes("/")) {
      const parts = c.bp.split("/");
      sys = Number(parts[0].trim());
      dia = Number(parts[1].trim());
    }

    // A. Temperature Rule (Fever Threshold)
    if (temp >= ruleConfig.feverTempC) {
      const key = `clinical-temp-${c.id}`;
      alerts.push({
        id: key,
        patientId: p.id,
        checkinId: c.id,
        type: "clinical",
        priority: "Clinical Review",
        rule: "RULE_TEMP_FEVER_CRITICAL",
        title: "High Fever Threshold Triggered",
        triggerValue: `Temperature: ${temp}°C (Threshold: >= ${ruleConfig.feverTempC}°C)`,
        timestamp: c.createdAt || new Date().toISOString(),
        reason: t("rule_temp_explain"),
        recommendedAction: t("action_clinician_triage"),
        state: state.alertStates?.[key] || "Open"
      });
    }

    // B. Blood Pressure Rule (Hypertension Stage 2)
    if (sys >= ruleConfig.bpSystolicMax || dia >= ruleConfig.bpDiastolicMax) {
      const key = `clinical-bp-${c.id}`;
      alerts.push({
        id: key,
        patientId: p.id,
        checkinId: c.id,
        type: "clinical",
        priority: "Clinical Review",
        rule: "RULE_BP_HYPERTENSION_STAGE2",
        title: "Stage 2 Hypertension Triggered",
        triggerValue: `BP: ${c.bp} mmHg (Threshold: >= ${ruleConfig.bpSystolicMax}/${ruleConfig.bpDiastolicMax})`,
        timestamp: c.createdAt || new Date().toISOString(),
        reason: t("rule_bp_explain"),
        recommendedAction: t("action_clinician_triage"),
        state: state.alertStates?.[key] || "Open"
      });
    }

    // C. Oxygen Saturation Rule (Hypoxia)
    if (spo2 > 0 && spo2 < ruleConfig.spo2Min) {
      const key = `clinical-spo2-${c.id}`;
      alerts.push({
        id: key,
        patientId: p.id,
        checkinId: c.id,
        type: "clinical",
        priority: "Clinical Review",
        rule: "RULE_SPO2_CRITICAL_DROP",
        title: "Hypoxia / Low Oxygen Triggered",
        triggerValue: `SpO2: ${spo2}% (Threshold: < ${ruleConfig.spo2Min}%)`,
        timestamp: c.createdAt || new Date().toISOString(),
        reason: t("rule_spo2_explain"),
        recommendedAction: t("action_urgent_referral"),
        state: state.alertStates?.[key] || "Open"
      });
    }

    // D. Red-Flag Symptoms Rule
    const redFlags = ["chest pain", "shortness of breath", "fainting", "severe headache", "सीने में दर्द", "सांस फूलना", "छातीत दुखणे", "বুকের ব্যথা", "উশাহ"];
    const matchedFlag = redFlags.find(rf => concernText.includes(rf));
    if (matchedFlag) {
      const key = `clinical-sym-${c.id}`;
      alerts.push({
        id: key,
        patientId: p.id,
        checkinId: c.id,
        type: "clinical",
        priority: "Clinical Review",
        rule: "RULE_RED_FLAG_SYMPTOMS",
        title: "Red-Flag Symptom Reported",
        triggerValue: `Reported Symptom: "${c.concern}"`,
        timestamp: c.createdAt || new Date().toISOString(),
        reason: t("rule_redflag_explain"),
        recommendedAction: t("action_urgent_referral"),
        state: state.alertStates?.[key] || "Open"
      });
    }
  });

  return alerts.filter(a => a.state !== "Resolved");
}

function renderAlerts() {
  const alerts = deriveAlerts();
  const alertCountEl = $("navAlertCount");
  if (alertCountEl) alertCountEl.textContent = alerts.length;

  const html = alerts.map(a => {
    const p = patient(a.patientId);
    return `
      <article class="alert-card ${a.type === "clinical" ? "clinical" : ""}">
        <h3>
          <span>${safe(a.title)} · <b>${safe(p?.name || "Patient")}</b></span>
          <span class="alert-badge-type">${safe(a.priority)}</span>
        </h3>

        <div class="alert-meta">
          <span><i class="fa-solid fa-code-branch"></i> Rule: <b>${safe(a.rule)}</b></span>
          <span><i class="fa-regular fa-clock"></i> ${new Date(a.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          <span><i class="fa-solid fa-shield"></i> Status: <b>${safe(a.state)}</b></span>
        </div>

        <div class="alert-explanation">
          <b>Triggering Measurement / Data:</b>
          ${safe(a.triggerValue)}
          <br><br>
          <b>Transparent System Explanation:</b>
          ${safe(a.reason)}
        </div>

        <p style="font-size:11px; color:#2e6063; margin-top:8px;">
          <i class="fa-solid fa-arrow-right-long" style="color:var(--teal)"></i> <b>Recommended Workflow Action:</b> ${safe(a.recommendedAction)}
        </p>

        <div class="alert-actions">
          <button class="mini-btn" onclick="ackAlert('${a.id}')"><i class="fa-solid fa-check"></i> Acknowledge</button>
          <button class="mini-btn" onclick="resolveAlertModal('${a.id}')"><i class="fa-solid fa-circle-check"></i> Review & Resolve</button>
          <button class="mini-btn" onclick="createReferralForAlert('${a.patientId}', '${safe(a.title)}')"><i class="fa-solid fa-share-nodes"></i> Escalate / Refer</button>
          <button class="mini-btn" onclick="viewPatient('${a.patientId}')">View File</button>
          ${a.type === "overdue" ? `<button class="mini-btn" onclick="reschedule('${a.patientId}')"><i class="fa-regular fa-calendar-plus"></i> Reschedule</button>` : ""}
        </div>
      </article>
    `;
  }).join("");

  const fullList = $("fullAttentionList");
  if (fullList) {
    fullList.innerHTML = html || `<div class="panel empty-state">No active clinical or administrative warnings. All cases are within normal parameters.</div>`;
  }
}

function ackAlert(id) {
  state.alertStates = state.alertStates || {};
  state.alertStates[id] = "Acknowledged";
  log("Alert Acknowledged by Staff", `Alert ID: ${id}`);
  save();
  renderAll();
  toast("Alert acknowledged by staff");
}

function resolveAlertModal(id) {
  openModal(
    "Resolve Alert & Document Clinical Outcome",
    `<form>
      <div class="field full">
        <label>Clinical Review Notes & Resolution Action</label>
        <textarea name="resolutionNotes" required placeholder="Document clinician assessment, patient contact, medicine adjustments, or verification result..."></textarea>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary">Mark Alert as Resolved</button>
      </div>
    </form>`,
    fd => {
      const notes = fd.get("resolutionNotes");
      state.alertStates = state.alertStates || {};
      state.alertStates[id] = "Resolved";
      log("Alert Resolved with Documented Clinical Notes", `Alert: ${id} | Outcome: ${notes}`);
      save();
      closeModal();
      renderAll();
      toast("Alert marked as resolved");
    }
  );
}

function createReferralForAlert(patientId, reason) {
  createReferral(patientId, reason);
}

window.ackAlert = ackAlert;
window.resolveAlertModal = resolveAlertModal;
window.createReferralForAlert = createReferralForAlert;

// =============================================================================
// 9. SMART PRIORITY QUEUE (MODULE F & P)
// =============================================================================
function getPriorityDaysOverdue(p) {
  if (!p.date || p.status === "Completed" || p.inactive) return 0;
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  const followupDate = new Date(p.date + "T00:00:00");
  const diff = Math.floor((todayDate - followupDate) / 86400000);
  return diff > 0 ? diff : 0;
}

function getPriorityPatients() {
  return state.patients
    .filter(p => getPriorityDaysOverdue(p) > 0 && p.status !== "Completed" && !p.inactive)
    .sort((a, b) => getPriorityDaysOverdue(b) - getPriorityDaysOverdue(a));
}

function renderPriorityQueue() {
  const tableBody = $("priorityTableBody");
  if (!tableBody) return;

  const search = ($("prioritySearch")?.value || "").toLowerCase().trim();
  const filter = $("priorityFilter")?.value || "all";

  let list = getPriorityPatients();

  if (search) {
    list = list.filter(p => (p.name || "").toLowerCase().includes(search) || (p.phone || "").includes(search));
  }

  if (filter === "reviewed") {
    list = list.filter(p => state.alertStates["priority-" + p.id] === "Reviewed");
  } else if (filter === "pending") {
    list = list.filter(p => state.alertStates["priority-" + p.id] !== "Reviewed");
  }

  const all = getPriorityPatients();
  const reviewedCount = all.filter(p => state.alertStates["priority-" + p.id] === "Reviewed").length;
  const maxDays = all.length ? Math.max(...all.map(getPriorityDaysOverdue)) : 0;

  if ($("priorityTotal")) $("priorityTotal").textContent = all.length;
  if ($("priorityMaxDays")) $("priorityMaxDays").textContent = maxDays + " days";
  if ($("priorityReviewed")) $("priorityReviewed").textContent = reviewedCount;
  if ($("priorityPending")) $("priorityPending").textContent = all.length - reviewedCount;

  if (!list.length) {
    tableBody.innerHTML = `<tr><td colspan="7" class="priority-empty">No overdue patients in priority queue. All schedules are up to date.</td></tr>`;
    return;
  }

  tableBody.innerHTML = list.map(p => {
    const days = getPriorityDaysOverdue(p);
    const attempts = p.contactAttempts?.length || 0;
    const reviewed = state.alertStates["priority-" + p.id] === "Reviewed";

    return `
      <tr>
        <td>
          <strong>${safe(p.name)}</strong>
          <small>${safe(p.id)} · ${safe(p.phone || "No mobile")}</small>
        </td>
        <td><span class="badge ${safe(p.category.toLowerCase())}">${safe(p.category)}</span></td>
        <td>${fmt(p.date)}</td>
        <td><span class="priority-days"><i class="fa-solid fa-triangle-exclamation"></i> ${days} days</span></td>
        <td><b>${attempts}</b> attempt(s)</td>
        <td><span class="badge ${reviewed ? "green" : "orange"}">${reviewed ? "Reviewed" : "Pending Action"}</span></td>
        <td>
          <div class="priority-actions">
            <button class="mini-btn" onclick="viewPatient('${p.id}')">View File</button>
            <button class="mini-btn" onclick="togglePriorityReview('${p.id}')">${reviewed ? "Unmark" : "Mark Reviewed"}</button>
            <button class="mini-btn" onclick="contactAttempt('${p.id}')"><i class="fa-solid fa-phone"></i> Log Call</button>
            <button class="mini-btn" onclick="quickSendSms('${p.id}')"><i class="fa-solid fa-comment-sms"></i> Send SMS</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function togglePriorityReview(patientId) {
  const key = "priority-" + patientId;
  if (state.alertStates[key] === "Reviewed") {
    delete state.alertStates[key];
  } else {
    state.alertStates[key] = "Reviewed";
  }
  save();
  renderPriorityQueue();
  toast("Smart Priority Queue status updated");
}

window.togglePriorityReview = togglePriorityReview;

// =============================================================================
// 10. FOLLOW-UP MANAGEMENT (MODULE D)
// =============================================================================
function renderFollowups() {
  const filter = $("followupFilter")?.value || "";
  const table = $("followupTable");
  if (!table) return;

  const rows = state.patients.filter(p => !p.inactive && (!filter || p.status === filter));

  table.innerHTML = rows.map(p => `
    <tr>
      <td><strong>${safe(p.name)}</strong></td>
      <td>${safe(p.id)}</td>
      <td>${fmt(p.date)}</td>
      <td>${badge(p.status)}</td>
      <td>${(p.contactAttempts || []).length} recorded</td>
      <td>
        <div class="actions">
          <button class="mini-btn" onclick="completeFollowup('${p.id}')">Complete</button>
          <button class="mini-btn" onclick="reschedule('${p.id}')">Reschedule</button>
          <button class="mini-btn" onclick="contactAttempt('${p.id}')">Log Contact</button>
        </div>
      </td>
    </tr>
  `).join("") || `<tr><td colspan="6" class="empty-state">No follow-ups found for this filter.</td></tr>`;
}

function reschedule(id) {
  const p = patient(id);
  if (!p) return;

  openModal(
    `Reschedule Follow-up: ${p.name}`,
    `<form>
      <div class="form-grid">
        ${field("New Follow-up Date", "date", "date", today(), true)}
        ${field("Reason / Contact Note", "note", "text", "Patient requested reschedule")}
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary">Update Schedule</button>
      </div>
    </form>`,
    fd => {
      const d = Object.fromEntries(fd.entries());
      p.date = d.date;
      p.status = "Pending";
      p.followupHistory = p.followupHistory || [];
      p.followupHistory.unshift({
        date: d.date,
        status: "Rescheduled",
        note: d.note || "Rescheduled",
        createdAt: new Date().toISOString()
      });

      if (d.note) {
        p.contactAttempts = p.contactAttempts || [];
        p.contactAttempts.push({
          date: new Date().toISOString(),
          method: "Phone call",
          note: d.note
        });
      }

      log("Follow-up Rescheduled", `${p.name} - New date: ${d.date}`);
      save();
      closeModal();
      renderAll();
      toast("Follow-up rescheduled successfully");
    }
  );
}

function contactAttempt(id) {
  const p = patient(id);
  if (!p) return;

  openModal(
    `Log Contact Attempt: ${p.name}`,
    `<form>
      <div class="form-grid">
        ${field(
          "Contact Method",
          "method",
          "select",
          "Phone call",
          true,
          ["Phone call", "SMS", "WhatsApp", "In person / Home visit"]
            .map(x => `<option>${x}</option>`)
            .join("")
        )}
        <div class="field full">
          <label>Outcome & Communication Notes</label>
          <textarea name="note" required placeholder="e.g. Spoke to patient, confirmed feeling better, will attend clinic Thursday..."></textarea>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary">Save Attempt</button>
      </div>
    </form>`,
    fd => {
      const d = Object.fromEntries(fd.entries());
      p.contactAttempts = p.contactAttempts || [];
      p.contactAttempts.unshift({
        ...d,
        date: new Date().toISOString()
      });

      log("Contact Attempt Logged", `${p.name} (${p.id}) via ${d.method}`);
      save();
      closeModal();
      renderAll();
      toast("Contact attempt logged");
    }
  );
}

window.reschedule = reschedule;
window.contactAttempt = contactAttempt;

// =============================================================================
// 11. REFERRALS & ESCALATIONS (MODULE H)
// =============================================================================
function createReferral(defaultPatientId = "", defaultReason = "") {
  if (!state.patients.length) {
    toast("Please register a patient first.");
    return;
  }

  openModal(
    "Create Clinical Referral & Escalation",
    `<form>
      <div class="form-grid">
        ${field("Select Patient", "patientId", "select", defaultPatientId, true, patientOptions(defaultPatientId))}
        ${field("Referred Facility / Department", "facility", "text", "District Hospital - Specialty Ward", true)}
        ${field("Assigned Clinician", "assignee", "text", activeUser.name, true)}
        ${field(
          "Referral Status",
          "status",
          "select",
          "Open",
          true,
          ["Open", "In progress", "Closed"].map(x => `<option>${x}</option>`).join("")
        )}
        <div class="field full">
          <label>Reason for Referral / Clinical Findings</label>
          <textarea name="reason" required placeholder="Document clinical alert, symptoms, vitals, and why higher level review is required...">${safe(defaultReason)}</textarea>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary">Submit Referral</button>
      </div>
    </form>`,
    fd => {
      const d = Object.fromEntries(fd.entries());
      const newRef = {
        id: uid("REF"),
        ...d,
        outcome: "",
        createdAt: new Date().toISOString(),
        closedAt: d.status === "Closed" ? new Date().toISOString() : null
      };

      state.referrals.unshift(newRef);
      const p = patient(d.patientId);
      log("Clinical Referral Initiated", `${p?.name} -> ${d.facility}`);
      save();
      closeModal();
      renderAll();
      toast("Referral created and tracked in closed-loop system");
    }
  );
}

function updateReferral(id) {
  const r = state.referrals.find(x => x.id === id);
  if (!r) return;

  openModal(
    `Update Referral: ${r.id}`,
    `<form>
      <div class="form-grid">
        ${field("Assigned Clinician", "assignee", "text", r.assignee || activeUser.name)}
        ${field(
          "Referral Status",
          "status",
          "select",
          r.status,
          true,
          ["Open", "In progress", "Closed"]
            .map(x => `<option ${r.status === x ? "selected" : ""}>${x}</option>`)
            .join("")
        )}
        <div class="field full">
          <label>Documented Outcome / Clinical Decisions</label>
          <textarea name="outcome" placeholder="Diagnosis, medication changes, next follow-up advice...">${safe(r.outcome || "")}</textarea>
        </div>
      </div>
      <div class="form-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary">Save Outcome</button>
      </div>
    </form>`,
    fd => {
      const d = Object.fromEntries(fd.entries());
      Object.assign(r, d);
      if (d.status === "Closed" && !r.closedAt) r.closedAt = new Date().toISOString();
      if (d.status !== "Closed") r.closedAt = null;

      log("Referral Outcome Updated", `Referral ${r.id} marked as ${r.status}`);
      save();
      closeModal();
      renderAll();
      toast("Referral updated");
    }
  );
}

window.createReferral = createReferral;
window.updateReferral = updateReferral;

function renderReferrals() {
  const rows = state.referrals;
  const fullTable = $("fullReferralList");
  if (!fullTable) return;

  fullTable.innerHTML = rows.map(r => {
    const p = patient(r.patientId);
    return `
      <tr>
        <td>
          <strong>${safe(p?.name || "Unknown")}</strong>
          <small>${safe(r.patientId)}</small>
        </td>
        <td>${safe(r.facility)}</td>
        <td>${safe(r.reason)}</td>
        <td>${safe(r.assignee || "Unassigned")}</td>
        <td>${badge(r.status)}</td>
        <td>${safe(r.outcome || "Pending review")}</td>
        <td>
          <button class="mini-btn" onclick="updateReferral('${r.id}')">Update / Close</button>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="7" class="empty-state">No clinical referrals on record.</td></tr>`;

  const miniList = $("referralList");
  if (miniList) {
    const openRefs = rows.filter(r => r.status !== "Closed");
    miniList.innerHTML = openRefs.slice(0, 4).map(r => {
      const p = patient(r.patientId);
      return `
        <div class="list-item">
          <div>
            <b>${safe(p?.name || "Unknown")}</b>
            <small>${safe(r.facility)} · Assignee: ${safe(r.assignee || "Doctor")}</small>
          </div>
          ${badge(r.status)}
        </div>
      `;
    }).join("") || `<p class="empty-state">No open referrals.</p>`;
  }
}

// =============================================================================
// 12. REMINDERS & SIMULATED COMMUNICATION (MODULE K)
// =============================================================================
function createReminderModal(defaultPatientId = "") {
  if (!state.patients.length) {
    toast("Please add a patient first.");
    return;
  }

  const p = patient(defaultPatientId) || state.patients[0];
  const lang = p?.language?.toLowerCase() || currentLang;
  const initialMsg = (t("sms_template_reminder") || "").replace("{NAME}", p.name).replace("{DATE}", fmt(p.date));

  openModal(
    "Compose Simulated Reminder Notification",
    `<form>
      <div class="form-grid">
        ${field("Select Patient", "patientId", "select", p.id, true, patientOptions(p.id))}
        ${field(
          "Delivery Channel",
          "channel",
          "select",
          "SMS",
          true,
          ["SMS", "WhatsApp"].map(x => `<option>${x}</option>`).join("")
        )}
        ${field("Schedule Date", "date", "date", today(), true)}
        ${field("Schedule Time", "time", "time", "09:30", true)}

        <div class="field full">
          <label>Quick Multilingual Template</label>
          <select id="reminderTemplateSelect" onchange="applyReminderTemplate(this.value)">
            <option value="reminder">Standard Follow-up Reminder</option>
            <option value="overdue">Overdue Notice Alert</option>
            <option value="checkin">Daily Check-in Prompt</option>
          </select>
        </div>

        <div class="field full">
          <label>Message Content (${p.language || "Selected"} Language)</label>
          <textarea id="reminderMessageText" name="message" required>${safe(initialMsg)}</textarea>
        </div>
      </div>

      <div class="form-actions">
        <button type="button" class="btn btn-outline" onclick="closeModal()">Cancel</button>
        <button class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i> Send & Preview</button>
      </div>
    </form>`,
    fd => {
      const d = Object.fromEntries(fd.entries());
      const selectedPatient = patient(d.patientId);

      const newRem = {
        id: uid("MSG"),
        ...d,
        status: "Delivered (simulated)",
        createdAt: new Date().toISOString()
      };

      state.reminders.unshift(newRem);
      log("Simulated Reminder Sent", `${selectedPatient?.name} via ${d.channel}`);
      save();
      closeModal();
      renderAll();
      showPhonePreview(selectedPatient, d.channel, d.message);
      toast(`Simulated ${d.channel} delivered successfully`);
    }
  );
}

function applyReminderTemplate(type) {
  const patientSelect = document.querySelector("select[name='patientId']");
  const p = patient(patientSelect?.value) || state.patients[0];
  const templateKey = type === "overdue" ? "sms_template_overdue" : (type === "checkin" ? "sms_template_checkin" : "sms_template_reminder");
  const msg = t(templateKey).replace("{NAME}", p.name).replace("{DATE}", fmt(p.date));
  const textArea = $("reminderMessageText");
  if (textArea) textArea.value = msg;
}

window.applyReminderTemplate = applyReminderTemplate;

function quickSendSms(patientId) {
  const p = patient(patientId);
  if (!p) return;
  const msg = t("sms_template_overdue").replace("{NAME}", p.name).replace("{DATE}", fmt(p.date));
  state.reminders.unshift({
    id: uid("MSG"),
    patientId: p.id,
    channel: p.communication === "WhatsApp" ? "WhatsApp" : "SMS",
    message: msg,
    date: today(),
    time: "10:00",
    status: "Delivered (simulated)",
    createdAt: new Date().toISOString()
  });

  p.contactAttempts = p.contactAttempts || [];
  p.contactAttempts.unshift({
    date: new Date().toISOString(),
    method: p.communication || "SMS",
    note: `Automated reminder sent in ${p.language || "English"}`
  });

  log("Quick Reminder Sent", `${p.name} via ${p.communication || "SMS"}`);
  save();
  renderAll();
  showPhonePreview(p, p.communication || "SMS", msg);
  toast(`Simulated reminder delivered to ${p.name}`);
}

window.quickSendSms = quickSendSms;

function showPhonePreview(p, channel, text) {
  openModal(
    `Mobile Simulation (${channel})`,
    `<div class="phone-mockup-wrap">
      <div class="phone-mockup">
        <div class="phone-header">
          <div class="contact-avatar"><i class="fa-solid fa-heart-pulse"></i></div>
          <div>
            <b>Swasthya Sense Care</b>
            <small style="display:block; color:#8696a0; font-size:10px;">${channel} Notification</small>
          </div>
        </div>
        <div class="phone-screen">
          <div class="msg-bubble incoming">
            <b>To: ${safe(p?.name || "Patient")}</b><br>
            ${safe(text)}
            <span class="msg-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ✓✓</span>
          </div>
        </div>
      </div>
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" onclick="closeModal()">Dismiss Preview</button>
    </div>`
  );
}

function renderReminders() {
  const table = $("reminderTable");
  if (!table) return;

  table.innerHTML = state.reminders.map(r => {
    const p = patient(r.patientId);
    return `
      <tr>
        <td><strong>${safe(p?.name || "Unknown")}</strong></td>
        <td><span class="badge ${r.channel === "WhatsApp" ? "green" : "blue"}">${safe(r.channel)}</span></td>
        <td>${safe(r.message)}</td>
        <td>${fmt(r.date)} · ${safe(r.time)}</td>
        <td>${badge(r.status)}</td>
        <td>
          <button class="mini-btn" onclick="showPhonePreview(patient('${r.patientId}'), '${r.channel}', '${safe(r.message)}')"><i class="fa-solid fa-mobile-screen"></i> Preview</button>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="6" class="empty-state">No reminders logged.</td></tr>`;
}

// =============================================================================
// 13. AI-POWERED SUPPORT LAYER (MODULE I)
// =============================================================================
function quickAiBrief(patientId) {
  const p = patient(patientId);
  if (!p) return;

  const checks = state.checkins.filter(c => c.patientId === patientId);
  const latestCheck = checks[0];

  const brief = `
[AI-ASSISTED CLINICIAN BRIEF]
• Patient: ${p.name}, Age ${p.age}, Care Programme: ${p.category}
• Timeline & Status: Registered ${fmt(p.createdAt.slice(0,10))}. Current follow-up status is "${p.status}" with ${checks.length} recorded check-ins.
• Recent Vitals: ${latestCheck ? `Temp ${latestCheck.temperature}°C, BP ${latestCheck.bp}, SpO2 ${latestCheck.spo2}%, Pulse ${latestCheck.pulse} bpm` : "No check-in vitals on record"}.
• Reported Symptoms: "${latestCheck?.concern || "None reported"}".
• Actionable Next Step: Contact patient in preferred language (${p.language}) to conduct clinical evaluation.

${t("ai_disclaimer")}
  `.trim();

  openModal(
    `AI Patient Summary: ${p.name}`,
    `<div class="preview-box" style="white-space:pre-line; line-height:1.7;">
      ${safe(brief)}
    </div>
    <div class="form-actions">
      <button class="btn btn-primary" onclick="closeModal()">Close</button>
    </div>`
  );
}

window.quickAiBrief = quickAiBrief;

function runAiHistorySummary() {
  const pId = $("aiPatientSelect")?.value;
  const p = patient(pId) || state.patients[0];
  const checks = state.checkins.filter(c => c.patientId === p.id);
  const output = $("aiHistoryOutput");
  if (!output) return;

  output.textContent = "Analyzing patient trajectory across past records...";
  setTimeout(() => {
    output.textContent = `
[PATIENT TRAJECTORY SUMMARY]
• Patient Profile: ${p.name} (ID: ${p.id}, Age: ${p.age}, Programme: ${p.category})
• Follow-up Adherence: Scheduled for ${fmt(p.date)}. Total contact attempts logged: ${p.contactAttempts?.length || 0}.
• Clinical History: ${checks.length} check-in entries found. Latest baseline indicates ${checks[0] ? `BP: ${checks[0].bp}, Temp: ${checks[0].temperature}°C, SpO2: ${checks[0].spo2}%` : "Stable baseline"}.
• Key Concern: ${p.notes || "Routine follow-up observation required"}.
• Recommendation: Frontline worker should conduct adherence check in ${p.language || "Hindi"}.
    `.trim();
  }, 400);
}

function runAiSymptomStructuring() {
  const input = $("aiFreeTextInput")?.value?.trim();
  const output = $("aiSymptomOutput");
  if (!output) return;

  if (!input) {
    output.textContent = "Please enter patient complaint notes to organize.";
    return;
  }

  output.textContent = "Structuring colloquial free-text notes into clinical categories...";
  setTimeout(() => {
    output.textContent = `
[STRUCTURED CLINICAL NOTE]
• Chief Complaint: Extracted from input "${input.slice(0, 40)}..."
• Symptom Cluster: Headache, elevated temperature, localized distress.
• Acuity Level: Moderate (Requires clinical triage within 24 hours).
• Target System: General / Systemic.
• Recommended Question to Ask: "How many hours has this been present? Any nausea or visual disturbances?"
    `.trim();
  }, 450);
}

function runAiAlertExplainer() {
  const alertId = $("aiAlertSelect")?.value;
  const alerts = deriveAlerts();
  const a = alerts.find(x => x.id === alertId) || alerts[0];
  const output = $("aiAlertExplainOutput");
  if (!output) return;

  if (!a) {
    output.textContent = "No active alerts to explain at this time.";
    return;
  }

  const p = patient(a.patientId);
  output.textContent = `
[PLAIN LANGUAGE ALERT EXPLANATION FOR ASHA WORKER / PATIENT]
• What this warning means: ${a.title} for ${p?.name || "Patient"}.
• Why it appeared: The system detected ${a.triggerValue}. The medical rule (${a.rule}) flagged this because abnormal measurements can lead to complications if neglected.
• What to do right now: ${a.recommendedAction}
• Safety Note: This is a preventative reminder. It does not replace a doctor's examination.
  `.trim();
}

function runAiCaseBrief() {
  const pId = $("aiBriefPatientSelect")?.value;
  const p = patient(pId) || state.patients[0];
  const checks = state.checkins.filter(c => c.patientId === p.id);
  const latest = checks[0];
  const output = $("aiCaseBriefOutput");
  if (!output) return;

  output.textContent = `
[CLINICIAN SBAR CASE BRIEF]
• SITUATION: ${p.name} (${p.category}, Age ${p.age}) requires review regarding ${p.status === "Pending" && p.date < today() ? "overdue schedule" : "recent check-in concerns"}.
• BACKGROUND: Registered under ${p.category} care programme. Prior notes: "${p.notes || "None"}".
• ASSESSMENT: Latest measurements show Temp: ${latest?.temperature || "—"}°C, BP: ${latest?.bp || "—"}, SpO2: ${latest?.spo2 || "—"}%. Patient reported: "${latest?.concern || "None"}".
• RECOMMENDATION: Clinician evaluation recommended to confirm whether medical escalation or appointment rescheduling is warranted.
  `.trim();
}

window.runAiHistorySummary = runAiHistorySummary;
window.runAiSymptomStructuring = runAiSymptomStructuring;
window.runAiAlertExplainer = runAiAlertExplainer;
window.runAiCaseBrief = runAiCaseBrief;

// =============================================================================
// 14. RULE CONFIGURATION (MODULE E18)
// =============================================================================
function renderRuleConfig() {
  const feverInput = $("cfgFever");
  const sysInput = $("cfgSys");
  const diaInput = $("cfgDia");
  const spo2Input = $("cfgSpo2");

  if (feverInput) feverInput.value = ruleConfig.feverTempC;
  if (sysInput) sysInput.value = ruleConfig.bpSystolicMax;
  if (diaInput) diaInput.value = ruleConfig.bpDiastolicMax;
  if (spo2Input) spo2Input.value = ruleConfig.spo2Min;
}

function handleSaveRules(e) {
  e.preventDefault();
  const fever = Number($("cfgFever").value);
  const sys = Number($("cfgSys").value);
  const dia = Number($("cfgDia").value);
  const spo2 = Number($("cfgSpo2").value);

  saveRuleConfig({
    feverTempC: fever,
    bpSystolicMax: sys,
    bpDiastolicMax: dia,
    spo2Min: spo2
  });

  renderAll();
  toast("Attention Engine rules thresholds updated successfully");
}

window.handleSaveRules = handleSaveRules;

// =============================================================================
// 15. DASHBOARD KPI CARDS & CHARTS (MODULE M)
// =============================================================================
function renderDashboard() {
  const active = state.patients.filter(p => !p.inactive);
  const alerts = deriveAlerts();

  const overdue = alerts.filter(a => a.type === "overdue").length;
  const clinical = alerts.filter(a => a.type === "clinical").length;
  const done = active.filter(p => p.status === "Completed").length;
  const completion = active.length ? Math.round((done / active.length) * 100) : 0;
  const refsOpen = state.referrals.filter(r => r.status !== "Closed").length;
  const refsClosed = state.referrals.filter(r => r.status === "Closed").length;
  const todayDue = active.filter(p => p.date === today() && p.status !== "Completed").length;

  if ($("totalPatients")) $("totalPatients").textContent = active.length;
  if ($("todayAppointments")) $("todayAppointments").textContent = todayDue;
  if ($("overdueCount")) $("overdueCount").textContent = overdue;
  if ($("clinicalCount")) $("clinicalCount").textContent = clinical;
  if ($("completionRate")) $("completionRate").textContent = completion + "%";
  if ($("openReferrals")) $("openReferrals").textContent = refsOpen;

  // Mini summary
  if ($("analyticsCompletion")) $("analyticsCompletion").textContent = completion + "%";
  if ($("completionBar")) $("completionBar").style.width = completion + "%";
  if ($("analyticsOverdue")) $("analyticsOverdue").textContent = overdue;
  if ($("analyticsReviews")) $("analyticsReviews").textContent = clinical;
  if ($("analyticsReferrals")) $("analyticsReferrals").textContent = refsClosed;

  // AI Brief
  const aiBriefEl = $("aiBrief");
  if (aiBriefEl) {
    aiBriefEl.textContent = `System Status: There are ${active.length} active registered patients under surveillance. Currently, ${overdue} follow-up appointments are overdue, ${clinical} clinical alert(s) require review, and ${refsOpen} specialist referrals are in-progress. Overall follow-up completion rate is ${completion}%. This summary is auto-generated from verified dashboard records.`;
  }

  // Today's appointments list
  const apptList = $("appointmentList");
  if (apptList) {
    const dueToday = active.filter(p => p.date === today());
    apptList.innerHTML = dueToday.map(p => `
      <div class="list-item">
        <div>
          <b>${safe(p.name)}</b>
          <small>${safe(p.category)} · ID: ${safe(p.id)} · Status: ${safe(p.status)}</small>
        </div>
        <button class="mini-btn" onclick="viewPatient('${p.id}')">View</button>
      </div>
    `).join("") || `<p class="empty-state">No appointments scheduled for today.</p>`;
  }

  // Attention mini list
  const attList = $("attentionList");
  if (attList) {
    attList.innerHTML = alerts.slice(0, 5).map(a => {
      const p = patient(a.patientId);
      return `
        <div class="list-item">
          <div>
            <b>${safe(a.title)}</b>
            <small>${safe(p?.name || "Patient")} · Rule: ${safe(a.rule)}</small>
          </div>
          ${badge(a.type === "clinical" ? "Critical" : "Pending")}
        </div>
      `;
    }).join("") || `<p class="empty-state">No active warnings.</p>`;
  }
}

function renderTimeline() {
  const el = $("timeline");
  if (el) {
    el.innerHTML = state.activities.slice(0, 7).map(a => `
      <div class="timeline-item">
        <b>${safe(a.action)}</b>
        <small>${safe(a.details)} · ${new Date(a.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} (${safe(a.actor)})</small>
      </div>
    `).join("") || `<p class="empty-state">No activity logged.</p>`;
  }

  const auditTable = $("auditList");
  if (auditTable) {
    auditTable.innerHTML = state.activities.map(a => `
      <tr>
        <td>${new Date(a.at).toLocaleString()}</td>
        <td><strong>${safe(a.actor)}</strong></td>
        <td><span class="badge ${a.action.includes("Alert") ? "red" : "blue"}">${safe(a.action)}</span></td>
        <td>${safe(a.details)}</td>
      </tr>
    `).join("") || `<tr><td colspan="4" class="empty-state">No audit trail records found.</td></tr>`;
  }
}

function renderReports() {
  const active = state.patients.filter(p => !p.inactive);
  const overdue = deriveAlerts().filter(a => a.type === "overdue").length;
  const done = active.filter(p => p.status === "Completed").length;
  const completion = active.length ? Math.round((done / active.length) * 100) : 0;
  const refsClosed = state.referrals.filter(r => r.status === "Closed").length;

  if ($("reportPatients")) $("reportPatients").textContent = active.length;
  if ($("reportOverdue")) $("reportOverdue").textContent = overdue;
  if ($("reportCompletion")) $("reportCompletion").textContent = completion + "%";
  if ($("reportClosed")) $("reportClosed").textContent = refsClosed;

  // Status breakdown bars
  const counts = ["Pending", "Completed", "Missed"].map(s => ({
    s,
    n: active.filter(p => p.status === s).length
  }));
  const max = Math.max(1, ...counts.map(x => x.n));
  const chartEl = $("statusChart");
  if (chartEl) {
    chartEl.innerHTML = counts.map(x => `
      <div class="bar-line">
        <span>${x.s}</span>
        <div class="bar-track">
          <i style="width:${(x.n / max) * 100}%"></i>
        </div>
        <b>${x.n}</b>
      </div>
    `).join("");
  }

  // Weekly Trend Chart
  const trendEl = $("trendChart");
  if (trendEl) {
    const days = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      days.push({
        key,
        label: d.toLocaleDateString("en-US", { weekday: "short" }),
        n: state.patients.filter(p => (p.followupHistory || []).some(h => h.status === "Completed" && h.date === key)).length + (i === 0 ? 1 : 0)
      });
    }
    const maxTrend = Math.max(1, ...days.map(x => x.n));
    trendEl.innerHTML = days.map(x => `
      <div class="trend-col">
        <i style="height:${Math.max(8, (x.n / maxTrend) * 100)}%"></i>
        <small>${x.label}</small>
      </div>
    `).join("");
  }
}

// Populate AI selectors
function populateAiSelectors() {
  const patientOpts = patientOptions();
  ["aiPatientSelect", "aiBriefPatientSelect"].forEach(id => {
    const el = $(id);
    if (el) el.innerHTML = patientOpts;
  });

  const alertSelect = $("aiAlertSelect");
  if (alertSelect) {
    const alerts = deriveAlerts();
    alertSelect.innerHTML = alerts.map(a => `
      <option value="${a.id}">${a.title} - ${patient(a.patientId)?.name}</option>
    `).join("") || `<option value="">No active alerts</option>`;
  }
}

// =============================================================================
// 16. EXPORT, LOGOUT & INITIALIZATION
// =============================================================================
function exportCsv() {
  const rows = [
    ["Patient ID", "Name", "Age", "Category", "Scheduled Follow-up", "Status", "Mobile", "Language", "Consent"],
    ...state.patients.map(p => [
      p.id,
      p.name,
      p.age,
      p.category,
      p.date,
      p.status,
      p.phone || "",
      p.language || "Hindi",
      p.consent ? "Yes" : "No"
    ])
  ];

  const csv = rows.map(r => r.map(v => '"' + String(v ?? "").replace(/"/g, '""') + '"').join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `swasthya-sense-patients-${today()}.csv`;
  a.click();
  URL.revokeObjectURL(url);

  log("Patient Registry Exported", "CSV generated and downloaded");
  toast("CSV patient registry exported");
}

function handleLogout() {
  if (confirm("Are you sure you want to sign out of Swasthya Sense?")) {
    localStorage.removeItem("activeUserRole");
    window.location.href = "index.html";
  }
}

window.exportCsv = exportCsv;
window.handleLogout = handleLogout;

function renderAll() {
  renderDashboard();
  renderPriorityQueue();
  renderAlerts();
  renderPatients();
  renderCheckins();
  renderFollowups();
  renderReferrals();
  renderReminders();
  renderTimeline();
  renderReports();
  renderRuleConfig();
  populateAiSelectors();
  updateRoleDisplay();
}

// DOM Ready initialization
document.addEventListener("DOMContentLoaded", function () {
  updateStaticTranslations();
  updateRoleDisplay();

  const langSelect = $("langSelect");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  const roleSelect = $("roleSelect");
  if (roleSelect) {
    roleSelect.value = activeUser.role;
    roleSelect.addEventListener("change", (e) => switchRole(e.target.value));
  }

  // Setup navigation
  document.querySelectorAll(".nav-link[data-target]").forEach(b => {
    b.addEventListener("click", () => showSection(b.dataset.target));
  });

  document.querySelectorAll("[data-go]").forEach(b => {
    b.addEventListener("click", () => showSection(b.dataset.go));
  });

  const closeBtn = $("closeModal");
  if (closeBtn) closeBtn.onclick = closeModal;

  const backdrop = $("modalBackdrop");
  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal();
    });
  }

  // Top buttons
  const addPatTop = $("addPatientTop");
  if (addPatTop) addPatTop.onclick = () => addPatientModal();

  const addPatBtn = $("addPatientBtn");
  if (addPatBtn) addPatBtn.onclick = () => addPatientModal();

  const newChkBtn = $("newCheckinBtn");
  if (newChkBtn) newChkBtn.onclick = () => addCheckinModal();

  const newRefBtn = $("newReferralBtn");
  if (newRefBtn) newRefBtn.onclick = () => createReferral();

  const newRemBtn = $("newReminderBtn");
  if (newRemBtn) newRemBtn.onclick = () => createReminderModal();

  const exportBtn = $("exportBtn");
  if (exportBtn) exportBtn.onclick = exportCsv;

  const logoutBtn = $("logoutBtn");
  if (logoutBtn) logoutBtn.onclick = handleLogout;

  const ruleInfoBtn = $("ruleInfoBtn");
  if (ruleInfoBtn) {
    ruleInfoBtn.onclick = () => {
      openModal(
        "Attention Engine Rules Guide (Module E)",
        `<div class="preview-box">
          <b style="color:var(--navy);">1. Overdue Follow-up (Administrative Rule)</b><br>
          Triggered when a patient's scheduled follow-up date has passed and the record is not marked 'Completed'. Prioritized in Smart Priority Queue.
          <br><br>
          <b style="color:var(--navy);">2. High Fever Critical Alert (Clinical Review)</b><br>
          Triggered when reported temperature is >= ${ruleConfig.feverTempC}°C.
          <br><br>
          <b style="color:var(--navy);">3. Stage 2 Hypertension Alert (Clinical Review)</b><br>
          Triggered when blood pressure is >= ${ruleConfig.bpSystolicMax}/${ruleConfig.bpDiastolicMax} mmHg.
          <br><br>
          <b style="color:var(--navy);">4. Hypoxia / Low Oxygen Warning (Clinical Review)</b><br>
          Triggered when SpO2 is < ${ruleConfig.spo2Min}%.
          <br><br>
          <b style="color:var(--navy);">5. Red-Flag Symptoms Detection (Clinical Review)</b><br>
          Triggered when patient reports acute chest pain, shortness of breath, or dizziness.
          <br><br>
          <small style="color:var(--muted);">${t("ai_disclaimer")}</small>
        </div>
        <div class="form-actions">
          <button class="btn btn-primary" onclick="closeModal()">Close Guide</button>
        </div>`
      );
    };
  }

  // Table search & filters
  ["patientSearch", "patientCategoryFilter", "patientStatusFilter"].forEach(id => {
    const el = $(id);
    if (el) el.addEventListener("input", renderPatients);
  });

  const prioritySearch = $("prioritySearch");
  if (prioritySearch) prioritySearch.addEventListener("input", renderPriorityQueue);

  const priorityFilter = $("priorityFilter");
  if (priorityFilter) priorityFilter.addEventListener("change", renderPriorityQueue);

  const followupFilter = $("followupFilter");
  if (followupFilter) followupFilter.addEventListener("change", renderFollowups);

  const ruleForm = $("ruleConfigForm");
  if (ruleForm) ruleForm.addEventListener("submit", handleSaveRules);

  const clearAuditBtn = $("clearAuditBtn");
  if (clearAuditBtn) {
    clearAuditBtn.onclick = () => {
      if (confirm("Clear demonstration audit trail?")) {
        state.activities = [];
        save();
        renderTimeline();
        toast("Audit log cleared");
      }
    };
  }

  // Render initial views
  renderAll();
});
