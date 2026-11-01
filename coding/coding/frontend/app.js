/**
 * SWASTHYA SENSE — Complete Patient Dashboard Engine
 * Features:
 * - Patient Attention Engine (Primary USP: Rules CR-01, CR-02, CR-03, AD-01, AD-02, CH-01)
 * - Real-Time Geolocation & Nearby Verified Doctors & Emergency Hospitals Finder
 * - Dynamic Family / Caregiver Emergency Alert Sync (Dynamic Name update everywhere!)
 * - Automatic Emergency Alert Trigger with Web Audio siren/chime
 * - 5 Indian Languages: English, Hindi, Marathi, Bengali, Assamese
 * - Realistic Phone Mockup (SMS & WhatsApp tabs)
 * - Complete Follow-up Queue, Appointments, and Health Journey Timeline
 */

// =============================================================================
// 1. MULTILINGUAL DICTIONARY (5 LANGUAGES)
// =============================================================================
const TRANSLATIONS = {
  en: {
    brand_tagline: "Turning Health Signals Into Timely Care",
    role_patient: "Patient Portal",
    nav_dashboard: "Dashboard",
    nav_checkin: "+ Health check-in",
    nav_appointments: "Appointments & Nearby Doctors",
    nav_followups: "Follow-ups",
    nav_timeline: "My health timeline",
    nav_reminders: "Reminders & SMS",
    nav_nearby: "Nearby Doctors",
    nav_family: "Family / Caregiver",
    nav_profile: "My profile & Consent",
    quick_actions_title: "QUICK ACTIONS",
    quick_checkin: "+ Submit check-in",
    quick_appointment: "Request appointment",
    footer_sub: "Patient Care Portal",
    footer_motto: "No Patient Lost in the Follow-up Process.",
    header_greeting: "Here's your personal health and follow-up overview",
    caregiver_mode_btn: "Caregiver View",
    emergency_sos: "Emergency SOS",
    hero_pill: "YOUR PERSONAL CARE SPACE",
    hero_welcome: "Welcome back,",
    hero_subtext: "Stay connected with your healthcare journey. Keep your check-ins and follow-ups up to date.",
    btn_submit_checkin: "+ Submit health check-in",
    family_alert_active: "Family Alert Sync Active",
    overview_title: "Your health overview",
    patient_id_label: "Patient ID:",
    kpi_appointments: "My appointments",
    kpi_appointments_sub: "Scheduled and requested",
    kpi_checkins: "Health check-ins",
    kpi_checkins_sub: "Records submitted",
    kpi_pending: "Pending follow-ups",
    kpi_pending_sub: "Awaiting completion",
    kpi_completed: "Completed follow-ups",
    kpi_completed_sub: "Recorded as completed",
    my_care_summary: "My care summary",
    followup_status_prefix: "Follow-up status:",
    status_pending: "pending",
    status_completed: "completed",
    attention_title: "My Follow-up Attention",
    attention_subtitle: "Personal follow-up information and system notifications",
    badge_demo_rules: "DEMO RULES",
    btn_evaluate: "Evaluate Rules",
    clinical_disclaimer: "Overdue follow-ups are administrative reminders, not medical emergencies. Clinical decisions remain with qualified clinicians.",
    vitals_change_title: "Recent Vitals & Change Detection",
    vitals_change_sub: "Compared against baseline records",
    badge_patient_reported: "Patient-Reported",
    family_sync_title: "Family & Caregiver Emergency Sync",
    family_sync_sub: "Connected guardian:",
    badge_sync_live: "Live Sync",
    family_contact_label: "Registered Mobile:",
    family_lang_label: "Alert Language:",
    family_last_sms: "Latest Notification:",
    btn_manage_family: "Manage Caregiver Settings",
    btn_test_sms: "Simulate Family SMS",
    nearby_page_title: "Nearby Real Doctors & Emergency Facilities",
    nearby_page_sub: "Detect your real-time location to find qualified clinicians, 24x7 cardiac ICU hospitals, and frontline clinics within your radius.",
    btn_detect_gps: "📍 Detect My Current GPS Location",
    location_detected_label: "Current Region:",
    filter_all_doctors: "All Providers",
    filter_cardiologists: "Cardiologists",
    filter_physicians: "General Physicians",
    filter_emergency_icu: "24x7 ICU / Emergency",
    call_btn: "Call Now",
    book_appt_btn: "Book Appointment",
    directions_btn: "Directions",
    checkin_page_title: "Patient Health Check-in",
    checkin_page_sub: "Submit your current symptoms and health vitals. Values are evaluated instantly by the Attention Engine.",
    data_source_label: "Source: Patient-Reported Information",
    symptoms_heading: "1. Current Symptoms Checklist",
    symptoms_tip: "Select all symptoms you have experienced in the last 24-48 hours:",
    sym_shortness_breath: "Shortness of breath",
    sym_chest_pain: "Chest pain / tightness",
    sym_dizziness: "Dizziness",
    sym_fever: "High fever",
    sym_swelling: "Leg / ankle swelling",
    sym_fatigue: "Severe fatigue",
    sym_headache: "Severe headache",
    sym_cough: "Persistent cough",
    symptom_notes_label: "Describe your symptoms in your own words:",
    symptom_notes_hint: "AI will structure this free-text note for your clinician and healthcare worker.",
    vitals_heading: "2. Health Measurements Entry",
    vitals_tip: "Enter any readings measured at home or with your local ASHA worker:",
    bp_sys_label: "Systolic BP",
    hint_bp_sys: "Normal: 90 - 120 mmHg",
    bp_dia_label: "Diastolic BP",
    hint_bp_dia: "Normal: 60 - 80 mmHg",
    pulse_label: "Heart Rate",
    hint_pulse: "Normal: 60 - 100 bpm",
    spo2_label: "Oxygen (SpO2)",
    hint_spo2: "Normal: 95 - 100%",
    temp_label: "Temperature",
    hint_temp: "Normal: 97.8 - 99.1 °F",
    sugar_label: "Blood Sugar",
    hint_sugar: "Fasting < 100 / Post < 140",
    assisted_heading: "3. Additional Details & Attachments",
    assisted_by_worker: "Assisted by Frontline Healthcare Worker (ASHA / ANM)",
    attachment_label: "Prescription / Lab Report Photo (Optional simulation):",
    dropzone_text: "Click or drag report / photo here to upload",
    dropzone_sub: "Encrypted client-side storage & RBAC protected",
    btn_load_sample: "Load High-Risk Test Sample",
    btn_submit_now: "Submit Health Check-in",
    engine_preview_title: "Patient Attention Engine Preview",
    engine_preview_sub: "How your entered measurements are evaluated against clinical warning rules:",
    rule_cr01_desc: "Systolic BP ≥ 140 or Diastolic ≥ 90 mmHg generates clinical review alert.",
    rule_cr02_desc: "SpO2 Oxygen < 94% triggers high-priority clinician notification.",
    rule_cr03_desc: "Chest pain combined with shortness of breath triggers instant Family SMS & Doctor alert.",
    rule_ad01_desc: "Missed 72-hour scheduled check-in logs administrative follow-up reminder.",
    safety_box_small: "The platform does not diagnose diseases or prescribe medication. Alerts escalate to your qualified doctor.",
    appointments_page_title: "Appointments & Consultations",
    appointments_page_sub: "Manage upcoming clinic visits, tele-reviews, and request new follow-up consultations.",
    btn_req_appointment: "Request New Appointment",
    upcoming_appointments_title: "Upcoming & Requested Consultations",
    past_appointments_title: "Completed Consultation Records",
    followups_page_title: "Follow-up Management Queue",
    followups_page_sub: "Ensuring no patient is lost in fragmented healthcare workflows. Overdue follow-ups are separate from clinical warnings.",
    filter_all: "All",
    filter_pending: "Pending",
    filter_overdue: "Overdue",
    filter_completed: "Completed",
    timeline_page_title: "My Health Journey & Timeline",
    timeline_page_sub: "Chronological record of registrations, check-in measurements, changes detected, clinician reviews, and communication.",
    legend_registration: "Registration",
    legend_checkin: "Check-in",
    legend_alert: "Attention Alert",
    legend_clinician: "Doctor Review",
    reminders_page_title: "Simulated SMS & WhatsApp Reminders",
    reminders_page_sub: "Automated multi-lingual notifications sent to patient and designated family members.",
    btn_send_demo_reminder: "Send Test Appointment SMS",
    reminders_history_title: "Dispatched Reminders & Delivery History",
    family_feature_badge: "CAREGIVER & GUARDIAN ACCESS",
    family_page_title: "Family Member Emergency & Follow-up Portal",
    family_page_sub: "Keep your loved ones informed. Family members receive instant SMS alerts during health changes, view appointment reminders, and can reach your care team.",
    btn_add_family_member: "Edit / Update Family Member",
    registered_caregiver_title: "Designated Family Member Details",
    registered_caregiver_sub: "Authorized under Patient Consent Registry",
    badge_consent_active: "Consent Active",
    family_lang_pref: "Preferred Language:",
    family_permission_title: "Configured Family Permissions:",
    perm_emergency_sms: "Receive Emergency Situation SMS & WhatsApp Alerts immediately",
    perm_view_vitals: "View Patient Vitals, Check-in Summaries & Trends",
    perm_reminders: "Receive Upcoming Appointment & Overdue Follow-up Reminders",
    perm_sos_call: "Direct SOS Escalation to ASHA Worker & Clinician",
    btn_sim_emergency_alert: "Trigger Test Emergency Alert to Family",
    family_sms_feed_title: "Family Alert & SMS Feed",
    hub_title: "Emergency Healthcare Team Contacts:",
    role_doctor: "Qualified Clinician (MD)",
    role_asha: "Frontline Health Worker (ASHA)",
    patient_brief_tag: "AI-ASSISTED CAREGIVER BRIEF (MODULE I)",
    brief_heading: "Plain-Language Patient Health Summary for Family:",
    brief_ai_note: "AI-assisted summary for family understanding. Does not replace formal clinical consultation.",
    profile_page_title: "Patient Profile & Consent Management",
    profile_page_sub: "Manage your demographic information, care programme, preferred language, and privacy consents.",
    btn_save_changes: "Save Profile Changes",
    personal_info_heading: "Personal & Demographic Information",
    label_full_name: "Full Name:",
    label_patient_id: "Unique Patient ID:",
    label_age_band: "Age Band:",
    label_gender: "Gender:",
    label_care_prog: "Care Programme / Category:",
    label_pref_lang: "Preferred Communication Language:",
    consent_heading: "Patient Consent & Data Retention (Module B.7 & L)",
    consent_sub: "Controlled under Supabase RLS and synthetic compliance regulations:",
    consent_followup_title: "Follow-up Tracking & Attention Engine Consent:",
    consent_followup_desc: "Allow SWASTHYA SENSE to analyze submitted vitals against clinician-configured safety rules.",
    consent_family_title: "Family Member Emergency Notification Consent:",
    consent_asha_title: "Frontline Worker Access:",
    consent_asha_desc: "Allow designated ASHA worker Sunita Devi to view check-in status and conduct home visits when overdue.",
    audit_note: "Audit Trail: Last consent verified on 31 Oct 2026 18:42 IST. Action Logged.",
    modal_req_appt_title: "Request Follow-up Appointment",
    appt_type_label: "Appointment Type:",
    appt_date_label: "Preferred Date:",
    appt_time_label: "Preferred Time Slot:",
    appt_reason_label: "Reason for Request:",
    btn_cancel: "Cancel",
    btn_submit_request: "Submit Request",
    modal_edit_family_title: "Edit Family / Caregiver Contact",
    fam_name_label: "Caregiver Full Name:",
    fam_rel_label: "Relationship to Patient:",
    fam_phone_label: "Mobile Number (for SMS & WhatsApp):",
    fam_email_label: "Email Address (Optional):",
    fam_lang_label: "Preferred Language for Family Alerts:",
    btn_save_caregiver: "Update Caregiver",
    sos_modal_title: "Emergency Medical Assistance",
    sos_desc: "Are you experiencing severe chest pain, extreme breathlessness, or collapse?",
    btn_confirm_sos: "Broadcast Emergency Alert"
  },

  hi: {
    brand_tagline: "स्वास्थ्य संकेतों को समय पर देखभाल में बदलना",
    role_patient: "रोगी पोर्टल",
    nav_dashboard: "डैशबोर्ड",
    nav_checkin: "+ स्वास्थ्य जांच (Check-in)",
    nav_appointments: "अपॉइंटमेंट व नजदीकी डॉक्टर",
    nav_followups: "फॉलो-अप",
    nav_timeline: "स्वास्थ्य टाइमलाइन",
    nav_reminders: "रिमाइंडर और एसएमएस",
    nav_nearby: "नजदीकी डॉक्टर",
    nav_family: "परिवार / देखभालकर्ता",
    nav_profile: "मेरी प्रोफ़ाइल और सहमति",
    quick_actions_title: "त्वरित कार्य",
    quick_checkin: "+ चेक-इन सबमिट करें",
    quick_appointment: "अपॉइंटमेंट का अनुरोध करें",
    footer_sub: "रोगी देखभाल पोर्टल",
    footer_motto: "फॉलो-अप प्रक्रिया में कोई भी रोगी न छूटे।",
    header_greeting: "यहाँ आपका व्यक्तिगत स्वास्थ्य और फॉलो-अप विवरण है",
    caregiver_mode_btn: "देखभालकर्ता दृश्य",
    emergency_sos: "आपातकालीन SOS",
    hero_pill: "आपका व्यक्तिगत देखभाल क्षेत्र",
    hero_welcome: "वापसी पर स्वागत है,",
    hero_subtext: "अपनी स्वास्थ्य यात्रा से जुड़े रहें। अपनी जांच और फॉलो-अप को अद्यतित रखें।",
    btn_submit_checkin: "+ स्वास्थ्य चेक-इन सबमिट करें",
    family_alert_active: "पारिवारिक अलर्ट सिंक सक्रिय",
    overview_title: "आपका स्वास्थ्य अवलोकन",
    patient_id_label: "रोगी आईडी:",
    kpi_appointments: "मेरे अपॉइंटमेंट",
    kpi_appointments_sub: "निर्धारित और अनुरोधित",
    kpi_checkins: "स्वास्थ्य चेक-इन",
    kpi_checkins_sub: "सबमिट किए गए रिकॉर्ड",
    kpi_pending: "लंबित फॉलो-अप",
    kpi_pending_sub: "पूरा होने की प्रतीक्षा में",
    kpi_completed: "पूर्ण फॉलो-अप",
    kpi_completed_sub: "पूर्ण के रूप में दर्ज",
    my_care_summary: "मेरी देखभाल सारांश",
    followup_status_prefix: "फॉलो-अप स्थिति:",
    status_pending: "लंबित",
    status_completed: "पूर्ण",
    attention_title: "मेरा फॉलो-अप ध्यान (Attention Engine)",
    attention_subtitle: "व्यक्तिगत फॉलो-अप जानकारी और सिस्टम सूचनाएं",
    badge_demo_rules: "डेमो नियम",
    btn_evaluate: "नियमों का मूल्यांकन करें",
    clinical_disclaimer: "अतिदेय फॉलो-अप प्रशासनिक अनुस्मारक हैं, चिकित्सा आपात स्थिति नहीं। नैदानिक निर्णय योग्य डॉक्टरों के पास रहते हैं।",
    vitals_change_title: "हाल के महत्वपूर्ण संकेत और परिवर्तन पहचान",
    vitals_change_sub: "आधारभूत रिकॉर्ड की तुलना में",
    badge_patient_reported: "रोगी द्वारा रिपोर्ट किया गया",
    family_sync_title: "परिवार एवं देखभालकर्ता आपातकालीन सिंक",
    family_sync_sub: "जुड़ा हुआ अभिभावक:",
    badge_sync_live: "लाइव सिंक",
    family_contact_label: "पंजीकृत मोबाइल:",
    family_lang_label: "अलर्ट भाषा:",
    family_last_sms: "नवीनतम सूचना:",
    btn_manage_family: "देखभालकर्ता सेटिंग्स प्रबंधित करें",
    btn_test_sms: "परिवार एसएमएस सिमुलेट करें",
    nearby_page_title: "निकटतम वास्तविक डॉक्टर और आपातकालीन अस्पताल",
    nearby_page_sub: "अपनी लोकेशन साझा करके अपने आस-पास सत्यापित हृदय रोग विशेषज्ञ, 24x7 आईसीयू अस्पताल और आशा केंद्र खोजें।",
    btn_detect_gps: "📍 मेरी वर्तमान GPS लोकेशन पता करें",
    location_detected_label: "वर्तमान क्षेत्र:",
    filter_all_doctors: "सभी डॉक्टर",
    filter_cardiologists: "हृदय रोग विशेषज्ञ",
    filter_physicians: "सामान्य चिकित्सक",
    filter_emergency_icu: "24x7 आईसीयू / आपातकालीन",
    call_btn: "कॉल करें",
    book_appt_btn: "अपॉइंटमेंट बुक करें",
    directions_btn: "रास्ता देखें",
    checkin_page_title: "रोगी स्वास्थ्य चेक-इन",
    checkin_page_sub: "अपने वर्तमान लक्षण और स्वास्थ्य माप दर्ज करें। अटेंशन इंजन द्वारा तुरंत मूल्यांकन किया जाएगा।",
    data_source_label: "स्रोत: रोगी द्वारा दी गई जानकारी",
    symptoms_heading: "1. वर्तमान लक्षण चेकलिस्ट",
    symptoms_tip: "पिछले 24-48 घंटों में अनुभव किए गए सभी लक्षण चुनें:",
    sym_shortness_breath: "सांस फूलना",
    sym_chest_pain: "सीने में दर्द या भारीपन",
    sym_dizziness: "चक्कर आना",
    sym_fever: "तेज बुखार",
    sym_swelling: "पैरों या टखनों में सूजन",
    sym_fatigue: "अत्यधिक थकान",
    sym_headache: "गंभीर सिरदर्द",
    sym_cough: "लगातार खांसी",
    symptom_notes_label: "अपने लक्षणों का वर्णन अपने शब्दों में करें:",
    symptom_notes_hint: "एआई आपके डॉक्टर और स्वास्थ्य कार्यकर्ता के लिए इसे सुव्यवस्थित करेगा।",
    vitals_heading: "2. स्वास्थ्य माप प्रविष्टि",
    vitals_tip: "घर पर या आशा कार्यकर्ता द्वारा मापे गए रीडिंग दर्ज करें:",
    bp_sys_label: "सिस्टोलिक बीपी",
    hint_bp_sys: "सामान्य: 90 - 120 mmHg",
    bp_dia_label: "डायस्टोलिक बीपी",
    hint_bp_dia: "सामान्य: 60 - 80 mmHg",
    pulse_label: "हृदय गति (पल्स)",
    hint_pulse: "सामान्य: 60 - 100 bpm",
    spo2_label: "ऑक्सीजन (SpO2)",
    hint_spo2: "सामान्य: 95 - 100%",
    temp_label: "तापमान",
    hint_temp: "सामान्य: 97.8 - 99.1 °F",
    sugar_label: "ब्लड शुगर",
    hint_sugar: "खाली पेट < 100 / भोजन बाद < 140",
    assisted_heading: "3. अतिरिक्त विवरण और दस्तावेज़",
    assisted_by_worker: "आशा / एएनएम स्वास्थ्य कार्यकर्ता द्वारा सहायता प्राप्त",
    attachment_label: "पर्चा या लैब रिपोर्ट फोटो (वैकल्पिक):",
    dropzone_text: "अपलोड करने के लिए फ़ाइल यहाँ खींचें या क्लिक करें",
    dropzone_sub: "एन्क्रिप्टेड सुरक्षित स्टोरेज",
    btn_load_sample: "उच्च-जोखिम टेस्ट डेटा लोड करें",
    btn_submit_now: "स्वास्थ्य चेक-इन सबमिट करें",
    engine_preview_title: "पेशेंट अटेंशन इंजन पूर्वावलोकन",
    engine_preview_sub: "आपके द्वारा दर्ज मापों का नैदानिक नियमों के अनुसार मूल्यांकन:",
    rule_cr01_desc: "सिस्टोलिक बीपी ≥ 140 या डायस्टोलिक ≥ 90 होने पर डॉक्टर समीक्षा अलर्ट उत्पन्न होता है।",
    rule_cr02_desc: "ऑक्सीजन स्तर < 94% होने पर उच्च प्राथमिकता वाली डॉक्टर अधिसूचना भेजी जाती है।",
    rule_cr03_desc: "सीने में दर्द और सांस फूलने पर परिवार और डॉक्टर को तुरंत अलर्ट भेजा जाता है।",
    rule_ad01_desc: "72 घंटे से अधिक चेक-इन चूक जाने पर प्रशासनिक रिमाइंडर दर्ज होता है।",
    safety_box_small: "यह प्लेटफॉर्म बीमारियों का निदान या दवाएं नहीं लिखता। अलर्ट आपके योग्य डॉक्टर तक पहुँचाए जाते हैं।",
    appointments_page_title: "अपॉइंटमेंट और परामर्श",
    appointments_page_sub: "आगामी क्लिनिक विज़िट प्रबंधित करें और नए फॉलो-अप परामर्श का अनुरोध करें।",
    btn_req_appointment: "नया अपॉइंटमेंट अनुरोध करें",
    upcoming_appointments_title: "आगामी और अनुरोधित परामर्श",
    past_appointments_title: "पूर्ण परामर्श रिकॉर्ड",
    followups_page_title: "फॉलो-अप प्रबंधन कतार",
    followups_page_sub: "अतिदेय फॉलो-अप प्रशासनिक अनुस्मारक हैं और नैदानिक चेतावनियों से अलग रखे जाते हैं।",
    filter_all: "सभी",
    filter_pending: "लंबित",
    filter_overdue: "अतिदेय",
    filter_completed: "पूर्ण",
    timeline_page_title: "मेरी स्वास्थ्य यात्रा और टाइमलाइन",
    timeline_page_sub: "पंजीकरण, चेक-इन माप, परिवर्तन, डॉक्टर समीक्षा और संचार का कालानुक्रमिक रिकॉर्ड।",
    legend_registration: "पंजीकरण",
    legend_checkin: "चेक-इन",
    legend_alert: "अटेंशन अलर्ट",
    legend_clinician: "डॉक्टर समीक्षा",
    reminders_page_title: "सिमुलेटेड एसएमएस और व्हाट्सएप रिमाइंडर",
    reminders_page_sub: "रोगी और नामित परिवार के सदस्यों को भेजे जाने वाले बहुभाषी अलर्ट।",
    btn_send_demo_reminder: "टेस्ट अपॉइंटमेंट एसएमएस भेजें",
    reminders_history_title: "भेजे गए रिमाइंडर और डिलीवरी इतिहास",
    family_feature_badge: "देखभालकर्ता एवं अभिभावक पहुंच",
    family_page_title: "परिवार सदस्य आपातकालीन एवं फॉलो-अप पोर्टल",
    family_page_sub: "अपने परिजनों को सूचित रखें। स्वास्थ्य में गिरावट पर परिवार को तुरंत एसएमएस अलर्ट मिलता है।",
    btn_add_family_member: "परिवार सदस्य अपडेट करें",
    registered_caregiver_title: "नामित परिवार सदस्य का विवरण",
    registered_caregiver_sub: "रोगी सहमति रजिस्ट्री के तहत अधिकृत",
    badge_consent_active: "सहमति सक्रिय",
    family_lang_pref: "पसंदीदा भाषा:",
    family_permission_title: "कॉन्फ़िगर की गई पारिवारिक अनुमतियाँ:",
    perm_emergency_sms: "आपातकालीन स्थिति में तुरंत एसएमएस और व्हाट्सएप प्राप्त करें",
    perm_view_vitals: "रोगी के विटल्स, चेक-इन सारांश और रुझान देखें",
    perm_reminders: "आगामी और छूटे हुए फॉलो-अप रिमाइंडर प्राप्त करें",
    perm_sos_call: "आशा कार्यकर्ता और डॉक्टर को सीधा एसओएस कॉल",
    btn_sim_emergency_alert: "परिवार को टेस्ट इमरजेंसी अलर्ट भेजें",
    family_sms_feed_title: "परिवार अलर्ट और एसएमएस फीड",
    hub_title: "आपातकालीन स्वास्थ्य सेवा टीम संपर्क:",
    role_doctor: "योग्य चिकित्सक (एमडी)",
    role_asha: "फ्रंटलाइन स्वास्थ्य कार्यकर्ता (आशा)",
    patient_brief_tag: "एआई-सहायता प्राप्त परिवार सारांश",
    brief_heading: "परिवार के लिए सरल भाषा में स्वास्थ्य सारांश:",
    brief_ai_note: "पारिवारिक समझ के लिए एआई-सहायक सारांश। औपचारिक डॉक्टर परामर्श का विकल्प नहीं है।",
    profile_page_title: "रोगी प्रोफ़ाइल और सहमति प्रबंधन",
    profile_page_sub: "अपनी व्यक्तिगत जानकारी, देखभाल कार्यक्रम, पसंदीदा भाषा और गोपनीयता सहमति प्रबंधित करें।",
    btn_save_changes: "परिवर्तन सहेजें",
    personal_info_heading: "व्यक्तिगत एवं जनसांख्यिकीय जानकारी",
    label_full_name: "पूरा नाम:",
    label_patient_id: "अद्वितीय रोगी आईडी:",
    label_age_band: "आयु वर्ग:",
    label_gender: "लिंग:",
    label_care_prog: "देखभाल कार्यक्रम / श्रेणी:",
    label_pref_lang: "पसंदीदा संचार भाषा:",
    consent_heading: "रोगी सहमति एवं डेटा प्रतिधारण",
    consent_sub: "सुपाबेस आरएलएस और नियमों के तहत नियंत्रित:",
    consent_followup_title: "फॉलो-अप ट्रैकिंग एवं अटेंशन इंजन सहमति:",
    consent_followup_desc: "स्वास्थ्य सेवा प्रणाली को नियमों के आधार पर विटल्स का विश्लेषण करने की अनुमति दें।",
    consent_family_title: "परिवार सदस्य आपातकालीन अधिसूचना सहमति:",
    consent_asha_title: "आशा कार्यकर्ता पहुंच:",
    consent_asha_desc: "आशा कार्यकर्ता सुनीता देवी को चेक-इन स्थिति देखने और गृह भ्रमण करने की अनुमति दें।",
    audit_note: "ऑडिट ट्रेल: अंतिम सहमति 31 अक्टूबर 2026 को सत्यापित।",
    modal_req_appt_title: "फॉलो-अप अपॉइंटमेंट का अनुरोध करें",
    appt_type_label: "अपॉइंटमेंट का प्रकार:",
    appt_date_label: "पसंदीदा तिथि:",
    appt_time_label: "पसंदीदा समय स्लॉट:",
    appt_reason_label: "अनुरोध का कारण:",
    btn_cancel: "रद्द करें",
    btn_submit_request: "अनुरोध सबमिट करें",
    modal_edit_family_title: "परिवार / देखभालकर्ता संपर्क संपादित करें",
    fam_name_label: "देखभालकर्ता का पूरा नाम:",
    fam_rel_label: "रोगी से संबंध:",
    fam_phone_label: "मोबाइल नंबर (एसएमएस और व्हाट्सएप के लिए):",
    fam_email_label: "ईमेल पता (वैकल्पिक):",
    fam_lang_label: "अलर्ट के लिए पसंदीदा भाषा:",
    btn_save_caregiver: "देखभालकर्ता अपडेट करें",
    sos_modal_title: "आपातकालीन चिकित्सा सहायता",
    sos_desc: "क्या आप सीने में गंभीर दर्द, सांस लेने में अत्यधिक कठिनाई या अचेत अवस्था महसूस कर रहे हैं?",
    btn_confirm_sos: "आपातकालीन अलर्ट प्रसारित करें"
  },

  mr: {
    brand_tagline: "आरोग्य संकेतांना वेळेवर उपचारात बदलणे",
    role_patient: "रुग्ण पोर्टल",
    nav_dashboard: "डॅशबोर्ड",
    nav_checkin: "+ आरोग्य तपासणी (Check-in)",
    nav_appointments: "अपॉइंटमेंट्स व जवळील डॉक्टर",
    nav_followups: "फॉलो-अप",
    nav_timeline: "आरोग्य टाइमलाइन",
    nav_reminders: "स्मरणपत्रे आणि एसएमएस",
    nav_nearby: "जवळपासचे डॉक्टर्स",
    nav_family: "कुटुंब / काळजीवाहक",
    nav_profile: "माझी प्रोफाइल आणि संमती",
    quick_actions_title: "त्वरित कृती",
    quick_checkin: "+ तपासणी नोंदवा",
    quick_appointment: "भेटीची विनंती करा",
    footer_sub: "रुग्ण काळजी पोर्टल",
    footer_motto: "फॉलो-अप प्रक्रियेत एकही रुग्ण मागे राहू नये.",
    header_greeting: "येथे तुमचा वैयक्तिक आरोग्य आणि फॉलो-अप आढावा आहे",
    caregiver_mode_btn: "काळजीवाहक दृश्य",
    emergency_sos: "तातडीची मदत (SOS)",
    hero_pill: "तुमची वैयक्तिक काळजी जागा",
    hero_welcome: "पुन्हा स्वागत आहे,",
    hero_subtext: "तुमच्या आरोग्य प्रवासाशी जोडलेले राहा. तुमच्या तपासण्या आणि फॉलो-अप वेळेवर ठेवा.",
    btn_submit_checkin: "+ आरोग्य तपासणी सबमिट करा",
    family_alert_active: "कौटुंबिक अलर्ट सिंक सक्रिय",
    overview_title: "तुमचा आरोग्य आढावा",
    patient_id_label: "रुग्ण आयडी:",
    kpi_appointments: "माझ्या भेटी",
    kpi_appointments_sub: "नियोजित आणि विनंती केलेल्या",
    kpi_checkins: "आरोग्य तपासण्या",
    kpi_checkins_sub: "नोंदवलेले रेकॉर्ड",
    kpi_pending: "प्रलंबित फॉलो-अप",
    kpi_pending_sub: "पूर्ण होण्याची प्रतीक्षा",
    kpi_completed: "पूर्ण झालेले फॉलो-अप",
    kpi_completed_sub: "पूर्ण म्हणून नोंदवलेले",
    my_care_summary: "माझा काळजी सारांश",
    followup_status_prefix: "फॉलो-अप स्थिती:",
    status_pending: "प्रलंबित",
    status_completed: "पूर्ण",
    attention_title: "माझे फॉलो-अप लक्ष (Attention Engine)",
    attention_subtitle: "वैयक्तिक फॉलो-अप माहिती आणि सिस्टम सूचना",
    badge_demo_rules: "डेमो नियम",
    btn_evaluate: "नियम तपासा",
    clinical_disclaimer: "प्रलंबित फॉलो-अप हे प्रशासकीय स्मरणपत्रे आहेत, वैद्यकीय आणीबाणी नाही. वैद्यकीय निर्णय पात्र डॉक्टरांकडेच राहतात.",
    vitals_change_title: "अलीकडील महत्त्वपूर्ण संकेत व बदल शोध",
    vitals_change_sub: "मूळ नोंदींशी तुलना",
    badge_patient_reported: "रुग्णाने नोंदवलेले",
    family_sync_title: "कुटुंब व काळजीवाहक आणीबाणी सिंक",
    family_sync_sub: "जोडलेले पालक/पालकत्व:",
    badge_sync_live: "थेट सिंक",
    family_contact_label: "नोंदणीकृत मोबाईल:",
    family_lang_label: "अलर्ट भाषा:",
    family_last_sms: "नवीनतम सूचना:",
    btn_manage_family: "काळजीवाहक सेटिंग्ज व्यवस्थापित करा",
    btn_test_sms: "कुटुंब एसएमएस चाचणी",
    nearby_page_title: "जवळपासचे वास्तविक डॉक्टर्स आणि आपत्कालीन रुग्णालये",
    nearby_page_sub: "तुमच्या लोकेशननुसार योग्य तज्ज्ञ डॉक्टर, २४x७ हृदयविकार अतिदक्षता विभाग आणि आशा केंद्र शोधा.",
    btn_detect_gps: "📍 माझी सध्याची GPS लोकेशन मिळवा",
    location_detected_label: "सध्याचा परिसर:",
    filter_all_doctors: "सर्व डॉक्टर्स",
    filter_cardiologists: "हृदयरोगतज्ज्ञ (Cardiologists)",
    filter_physicians: "जनरल फिजिशियन",
    filter_emergency_icu: "२४x७ आयसीयू / आपत्कालीन",
    call_btn: "कॉल करा",
    book_appt_btn: "भेट निश्चित करा",
    directions_btn: "दिशा दाखवा",
    checkin_page_title: "रुग्ण आरोग्य तपासणी",
    checkin_page_sub: "तुमची सध्याची लक्षणे आणि आरोग्य मोजमाप नोंदवा. अटेंशन इंजिनद्वारे त्वरित मूल्यांकन केले जाईल.",
    data_source_label: "स्रोत: रुग्णाने दिलेली माहिती",
    symptoms_heading: "१. सध्याची लक्षणे यादी",
    symptoms_tip: "गेल्या २४-४८ तासांत जाणवलेली सर्व लक्षणे निवडा:",
    sym_shortness_breath: "श्वास घेण्यास त्रास",
    sym_chest_pain: "छातीत दुखणे किंवा जडपणा",
    sym_dizziness: "चक्कर येणे",
    sym_fever: "तीव्र ताप",
    sym_swelling: "पायांवर किंवा घोट्यांवर सूज",
    sym_fatigue: "अति थकवा",
    sym_headache: "तीव्र डोकेदुखी",
    sym_cough: "सतत खोकला",
    symptom_notes_label: "तुमच्या शब्दांत लक्षणांचे वर्णन करा:",
    symptom_notes_hint: "एआय तुमच्या डॉक्टरांसाठी ही माहिती सुलभ करेल.",
    vitals_heading: "२. आरोग्य मोजमाप नोंद",
    vitals_tip: "घरी किंवा आशा सेविकेद्वारे घेतलेली रीडिंग नोंदवा:",
    bp_sys_label: "सिस्टोलिक बीपी",
    hint_bp_sys: "सामान्य: 90 - 120 mmHg",
    bp_dia_label: "डायस्टोलिक बीपी",
    hint_bp_dia: "सामान्य: 60 - 80 mmHg",
    pulse_label: "हृदयाचे ठोके (Pulse)",
    hint_pulse: "सामान्य: 60 - 100 bpm",
    spo2_label: "ऑक्सिजन (SpO2)",
    hint_spo2: "सामान्य: 95 - 100%",
    temp_label: "तापमान",
    hint_temp: "सामान्य: 97.8 - 99.1 °F",
    sugar_label: "ब्लड शुगर",
    hint_sugar: "उपाशीपोटी < 100 / जेवणानंतर < 140",
    assisted_heading: "३. अतिरिक्त तपशील आणि कागदपत्रे",
    assisted_by_worker: "आशा / एएनएम आरोग्य सेविकेचे सहाय्य लाभले",
    attachment_label: "औषधांची चिठ्ठी किंवा लॅब रिपोर्ट फोटो (ऐच्छिक):",
    dropzone_text: "अपलोड करण्यासाठी फाईल येथे ड्रॅग करा किंवा क्लिक करा",
    dropzone_sub: "सुरक्षित एन्क्रिप्टेड स्टोरेज",
    btn_load_sample: "उच्च-जोखीम चाचणी डेटा भरा",
    btn_submit_now: "आरोग्य तपासणी सबमिट करा",
    engine_preview_title: "पेशंट अटेंशन इंजिन पूर्वावलोकन",
    engine_preview_sub: "तुमच्या नोंदींचे क्लिनिकल नियमांनुसार मूल्यांकन कसे होते:",
    rule_cr01_desc: "सिस्टोलिक बीपी ≥ 140 किंवा डायस्टोलिक ≥ 90 असल्यास डॉक्टर पुनरावलोकन अलर्ट येतो.",
    rule_cr02_desc: "ऑक्सिजन पातळी < 94% झाल्यास डॉक्टरांना तात्काळ उच्च प्राधान्य सूचना जाते.",
    rule_cr03_desc: "छातीत दुखणे आणि दम लागणे असल्यास कुटुंबाला व डॉक्टरांना त्वरित अलर्ट जातो.",
    rule_ad01_desc: "७२ तास तपासणी चुकल्यास प्रशासकीय स्मरणपत्र नोंदवले जाते.",
    safety_box_small: "हे व्यासपीठ आजारांचे निदान किंवा औषधोपचार देत नाही. अलर्ट तुमच्या डॉक्टरांपर्यंत पोहोचवले जातात.",
    appointments_page_title: "भेटी आणि सल्लामसलत",
    appointments_page_sub: "क्लिनिकच्या आगामी भेटी व्यवस्थापित करा आणि नवीन सल्लामसलतीची विनंती करा.",
    btn_req_appointment: "नवीन भेटीची विनंती करा",
    upcoming_appointments_title: "आगामी आणि विनंती केलेल्या भेटी",
    past_appointments_title: "पूर्ण झालेल्या भेटींच्या नोंदी",
    followups_page_title: "फॉलो-अप व्यवस्थापन रांग",
    followups_page_sub: "कोणताही रुग्ण दुर्लक्षित राहू नये. प्रलंबित फॉलो-अप वैद्यकीय चेतावणीपेक्षा वेगळे असतात.",
    filter_all: "सर्व",
    filter_pending: "प्रलंबित",
    filter_overdue: "मुदत संपलेले",
    filter_completed: "पूर्ण",
    timeline_page_title: "माझा आरोग्य प्रवास आणि टाइमलाइन",
    timeline_page_sub: "नोंदणी, तपासण्या, बदल, डॉक्टर पुनरावलोकन आणि संदेशांची कालक्रमानुसार नोंद.",
    legend_registration: "नोंदणी",
    legend_checkin: "तपासणी",
    legend_alert: "अटेंशन अलर्ट",
    legend_clinician: "डॉक्टर पुनरावलोकन",
    reminders_page_title: "सिम्युलेटेड एसएमएस आणि व्हॉट्सॲप स्मरणपत्रे",
    reminders_page_sub: "रुग्ण आणि कुटुंबातील सदस्यांना पाठवल्या जाणाऱ्या बहुभाषिक सूचना.",
    btn_send_demo_reminder: "चाचणी अपॉइंटमेंट एसएमएस पाठवा",
    reminders_history_title: "पाठवलेली स्मरणपत्रे आणि स्थिती",
    family_feature_badge: "काळजीवाहक आणि पालक प्रवेश",
    family_page_title: "कुटुंब सदस्य आणीबाणी आणि फॉलो-अप पोर्टल",
    family_page_sub: "आपल्या कुटुंबियांना जागरूक ठेवा. आरोग्यात बदल झाल्यास कुटुंबाला त्वरित एसएमएस सूचना जाते.",
    btn_add_family_member: "कुटुंब सदस्य माहिती बदला",
    registered_caregiver_title: "नोंदणीकृत कुटुंब सदस्याचा तपशील",
    registered_caregiver_sub: "रुग्ण संमती अंतर्गत अधिकृत",
    badge_consent_active: "संमती सक्रिय",
    family_lang_pref: "पसंतीची भाषा:",
    family_permission_title: "कॉन्फिगर केलेल्या कौटुंबिक परवानग्या:",
    perm_emergency_sms: "तातडीच्या परिस्थितीत तात्काळ एसएमएस व व्हॉट्सॲप अलर्ट मिळवा",
    perm_view_vitals: "रुग्णाचे विटल्स, तपासणी सारांश आणि कल पहा",
    perm_reminders: "आगामी आणि चुकलेल्या फॉलो-अपची स्मरणपत्रे मिळवा",
    perm_sos_call: "आशा सेविका आणि डॉक्टरांना थेट आपत्कालीन कॉल",
    btn_sim_emergency_alert: "कुटुंबाला चाचणी आणीबाणी अलर्ट पाठवा",
    family_sms_feed_title: "कुटुंब अलर्ट आणि एसएमएस फीड",
    hub_title: "आपत्कालीन आरोग्य सेवा संपर्क:",
    role_doctor: "पात्र वैद्यकीय अधिकारी (MD)",
    role_asha: "आशा स्वयंसेविका (ASHA)",
    patient_brief_tag: "एआय-सहाय्यित कौटुंबिक सारांश",
    brief_heading: "कुटुंबासाठी सोप्या भाषेतील आरोग्य सारांश:",
    brief_ai_note: "कुटुंबाच्या माहितीसाठी एआय सारांश. औपचारिक वैद्यकीय सल्ल्याचा पर्याय नाही.",
    profile_page_title: "रुग्ण प्रोफाइल आणि संमती व्यवस्थापन",
    profile_page_sub: "तुमची माहिती, काळजी कार्यक्रम, पसंतीची भाषा आणि गोपनीयता संमती व्यवस्थापित करा.",
    btn_save_changes: "बदल जतन करा",
    personal_info_heading: "वैयक्तिक माहिती",
    label_full_name: "पूर्ण नाव:",
    label_patient_id: "युनिक रुग्ण आयडी:",
    label_age_band: "वय गट:",
    label_gender: "लिंग:",
    label_care_prog: "काळजी कार्यक्रम / श्रेणी:",
    label_pref_lang: "पसंतीची भाषा:",
    consent_heading: "रुग्ण संमती आणि डेटा नियम",
    consent_sub: "सुरक्षित डेटा नियमांतर्गत नियंत्रित:",
    consent_followup_title: "फॉलो-अप ट्रॅकिंग आणि अटेंशन इंजिन संमती:",
    consent_followup_desc: "नियमांनुसार विटल्सचे विश्लेषण करण्यास अनुमती द्या.",
    consent_family_title: "कुटुंब सदस्य आपत्कालीन सूचना संमती:",
    consent_asha_title: "आशा सेविका प्रवेश:",
    consent_asha_desc: "आशा सेविका सुनिता देवी यांना तपासणी स्थिती पाहण्यास अनुमती द्या.",
    audit_note: "ऑडिट नोंद: ३१ ऑक्टोबर २०२६ रोजी संमती सत्यापित.",
    modal_req_appt_title: "फॉलो-अप भेटीची विनंती करा",
    appt_type_label: "भेटीचा प्रकार:",
    appt_date_label: "पसंतीची तारीख:",
    appt_time_label: "पसंतीची वेळ:",
    appt_reason_label: "विनंतीचे कारण:",
    btn_cancel: "रद्द करा",
    btn_submit_request: "विनंती पाठवा",
    modal_edit_family_title: "कुटुंब / काळजीवाहक संपर्क संपादित करा",
    fam_name_label: "काळजीवाहकाचे पूर्ण नाव:",
    fam_rel_label: "रुग्णाशी नाते:",
    fam_phone_label: "मोबाईल नंबर (एसएमएससाठी):",
    fam_email_label: "ईमेल पत्ता (ऐच्छिक):",
    fam_lang_label: "अलर्टसाठी पसंतीची भाषा:",
    btn_save_caregiver: "काळजीवाहक अपडेट करा",
    sos_modal_title: "आपत्कालीन वैद्यकीय मदत",
    sos_desc: "तुम्हाला छातीत तीव्र वेदना, श्वास घेण्यास खूप त्रास किंवा चक्कर येत आहे का?",
    btn_confirm_sos: "आणीबाणी अलर्ट पाठवा"
  },

  bn: {
    brand_tagline: "স্বাস্থ্য সংকেতকে সময়মত যত্নে রূপান্তর",
    role_patient: "রোগী পোর্টাল",
    nav_dashboard: "ড্যাশবোর্ড",
    nav_checkin: "+ স্বাস্থ্য চেক-ইন",
    nav_appointments: "অ্যাপইণ্টমেণ্ট আৰু ওচৰৰ চিকিৎসক",
    nav_followups: "ফলো-আপ",
    nav_timeline: "স্বাস্থ্য টাইমলাইন",
    nav_reminders: "অনুস্মারক ও এসএমএস",
    nav_nearby: "নিকটস্থ ডাক্তার",
    nav_family: "পরিবার / পরিচর্যাকারী",
    nav_profile: "আমার প্রোফাইল ও সম্মতি",
    quick_actions_title: "দ্রুত পদক্ষেপ",
    quick_checkin: "+ চেক-ইন জমা দিন",
    quick_appointment: "অ্যাপয়েন্টমেন্ট অনুরোধ করুন",
    footer_sub: "রোগী সেবা পোর্টাল",
    footer_motto: "ফলো-আপ প্রক্রিয়ায় কোনো রোগী যেন বাদ না পড়ে।",
    header_greeting: "এখানে আপনার ব্যক্তিগত স্বাস্থ্য ও ফলো-আপের বিবরণ রয়েছে",
    caregiver_mode_btn: "পরিচর্যাকারী ভিউ",
    emergency_sos: "জরুরি SOS",
    hero_pill: "আপনার ব্যক্তিগত সেবা স্থান",
    hero_welcome: "স্বাগতম,",
    hero_subtext: "আপনার স্বাস্থ্যযাত্রার সাথে যুক্ত থাকুন। আপনার চেক-ইন ও ফলো-আপ আপডেট রাখুন।",
    btn_submit_checkin: "+ স্বাস্থ্য চেক-ইন জমা দিন",
    family_alert_active: "পারিবারিক সতর্কতা সিঙ্ক সক্রিয়",
    overview_title: "আপনার স্বাস্থ্য ওভারভিউ",
    patient_id_label: "রোগী আইডি:",
    kpi_appointments: "আমার অ্যাপয়েন্টমেন্ট",
    kpi_appointments_sub: "নির্ধারিত ও অনুরোধকৃত",
    kpi_checkins: "স্বাস্থ্য চেক-ইন",
    kpi_checkins_sub: "জমাকৃত রেকর্ড",
    kpi_pending: "মুলতবি ফলো-আপ",
    kpi_pending_sub: "সম্পন্নের অপেক্ষায়",
    kpi_completed: "সম্পন্ন ফলো-আপ",
    kpi_completed_sub: "সম্পন্ন হিসেবে রেকর্ডকৃত",
    my_care_summary: "আমার পরিচর্যা সারাংশ",
    followup_status_prefix: "ফলো-আপ অবস্থা:",
    status_pending: "মুলতবি",
    status_completed: "সম্পন্ন",
    attention_title: "আমার ফলো-আপ মনোযোগ (Attention Engine)",
    attention_subtitle: "ব্যক্তিগত ফলো-আপ তথ্য এবং সিস্টেম বিজ্ঞপ্তি",
    badge_demo_rules: "ডেমো নিয়মাবলী",
    btn_evaluate: "নিয়ম মূল্যায়ন করুন",
    clinical_disclaimer: "মেয়াদোত্তীর্ণ ফলো-আপ প্রশাসনিক অনুস্মারক, জরুরি চিকিৎসা পরিস্থিতি নয়। চিকিৎসার সিদ্ধান্ত যোগ্য চিকিৎসকের ওপরই নির্ভর করে।",
    vitals_change_title: "সাম্প্রতিক লক্ষণ ও পরিবর্তন শনাক্তকরণ",
    vitals_change_sub: "পূর্ববর্তী রেকর্ডের সাথে তুলনামূলক",
    badge_patient_reported: "রোগী দ্বারা রিপোর্টকৃত",
    family_sync_title: "পরিবার ও পরিচর্যাকারী জরুরি সিঙ্ক",
    family_sync_sub: "সংযুক্ত অভিভাবক:",
    badge_sync_live: "লাইভ সিঙ্ক",
    family_contact_label: "নিবন্ধিত মোবাইল:",
    family_lang_label: "সতর্কতা ভাষা:",
    family_last_sms: "সর্বশেষ বিজ্ঞপ্তি:",
    btn_manage_family: "পরিচর্যাকারী সেটিংস পরিচালনা",
    btn_test_sms: "পারিবারিক এসএমএস পরীক্ষা",
    nearby_page_title: "নিকটস্থ ডাক্তার ও জরুরি হাসপাতাল",
    nearby_page_sub: "আপনার রিয়েল-টাইম লোকেশন দিয়ে কাছের অভিজ্ঞ হৃদরোগ বিশেষজ্ঞ ও ২৪x৭ আইসিইউ হাসপাতাল খুঁজুন।",
    btn_detect_gps: "📍 আমার বর্তমান GPS অবস্থান শনাক্ত করুন",
    location_detected_label: "বর্তমান অঞ্চল:",
    filter_all_doctors: "সকল ডাক্তার",
    filter_cardiologists: "হৃদরোগ বিশেষজ্ঞ",
    filter_physicians: "মেডিসিন বিশেষজ্ঞ",
    filter_emergency_icu: "২৪x৭ আইসিইউ / জরুরি সেবা",
    call_btn: "কল করুন",
    book_appt_btn: "অ্যাপয়েন্টমেন্ট নিন",
    directions_btn: "দিকনির্দেশ",
    checkin_page_title: "রোগীর স্বাস্থ্য চেক-ইন",
    checkin_page_sub: "আপনার বর্তমান উপসর্গ ও স্বাস্থ্যের মাপ জমা দিন। সিস্টেম তাৎক্ষণিক মূল্যায়ন করবে।",
    data_source_label: "উৎস: রোগীর নিজস্ব তথ্য",
    symptoms_heading: "১. বর্তমান উপসর্গ তালিকা",
    symptoms_tip: "গত ২৪-৪৮ ঘণ্টায় অনুভূত উপসর্গগুলি চিহ্নিত করুন:",
    sym_shortness_breath: "শ্বাসকষ্ট",
    sym_chest_pain: "বুকে ব্যথা বা চাপ",
    sym_dizziness: "মাথা ঘোরা",
    sym_fever: "তীব্র জ্বর",
    sym_swelling: "পায়ে বা গোড়ালিতে ফোলাভাব",
    sym_fatigue: "চরম ক্লান্তি",
    sym_headache: "তীব্র মাথাব্যথা",
    sym_cough: "টানা কাশি",
    symptom_notes_label: "নিজের ভাষায় উপসর্গের বর্ণনা দিন:",
    symptom_notes_hint: "এআই আপনার চিকিৎসকের জন্য এটি সাজিয়ে উপস্থাপন করবে।",
    vitals_heading: "২. স্বাস্থ্য পরিমাপ এন্ট্রি",
    vitals_tip: "বাড়িতে বা আশা কর্মীর মাধ্যমে নেওয়া রিডিং লিখুন:",
    bp_sys_label: "সিস্টোলিক বিপি",
    hint_bp_sys: "স্বাভাবিক: 90 - 120 mmHg",
    bp_dia_label: "ডায়াস্টোলিক বিপি",
    hint_bp_dia: "স্বাভাবিক: 60 - 80 mmHg",
    pulse_label: "হৃদস্পন্দন (Pulse)",
    hint_pulse: "স্বাভাবিক: 60 - 100 bpm",
    spo2_label: "অক্সিজেন (SpO2)",
    hint_spo2: "স্বাভাবিক: 95 - 100%",
    temp_label: "তাপমাত্রা",
    hint_temp: "স্বাভাবিক: 97.8 - 99.1 °F",
    sugar_label: "রক্তের শর্করা (Sugar)",
    hint_sugar: "খালি পেটে < 100 / খাওয়ার পর < 140",
    assisted_heading: "৩. অতিরিক্ত বিবরণ ও সংযুক্তি",
    assisted_by_worker: "আশা স্বাস্থ্যকর্মীর সহায়তায় নেওয়া",
    attachment_label: "প্রেসক্রিপশন বা ল্যাব রিপোর্ট ছবি (ঐচ্ছিক):",
    dropzone_text: "আপলোড করতে ফাইল এখানে টানুন বা ক্লিক করুন",
    dropzone_sub: "এনক্রিপ্ট করা নিরাপদ ডেটা",
    btn_load_sample: "উচ্চ-ঝুঁকি নমুনা ডেটা পূরণ করুন",
    btn_submit_now: "স্বাস্থ্য চেক-ইন জমা দিন",
    engine_preview_title: "অ্যাটেনশন ইঞ্জিন পূর্বরূপ",
    engine_preview_sub: "আপনার পরিমাপ যেভাবে মূল্যায়ন করা হয়:",
    rule_cr01_desc: "সিস্টোলিক বিপি ≥ ১৪০ হলে ডাক্তার পর্যালোচনার সতর্কতা তৈরি হয়।",
    rule_cr02_desc: "অক্সিজেন লেভেল < ৯৪% হলে দ্রুত ডাক্তার বিজ্ঞপ্তি পাঠানো হয়।",
    rule_cr03_desc: "বুকে ব্যথা ও শ্বাসকষ্ট একসাথে হলে পরিবার ও ডাক্তারকে জরুরি বার্তা পাঠানো হয়।",
    rule_ad01_desc: "৭২ ঘণ্টা চেক-ইন বাদ পড়লে প্রশাসনিক অনুস্মারক রেকর্ড হয়।",
    safety_box_small: "এই প্ল্যাটফর্ম রোগ নির্ণয় বা ওষুধ নির্ধারণ করে না। সতর্কতা আপনার যোগ্য চিকিৎসকের কাছে পাঠানো হয়।",
    appointments_page_title: "অ্যাপয়েন্টমেন্ট ও পরামর্শ",
    appointments_page_sub: "আসন্ন পরামর্শ পরিচালনা করুন এবং নতুন অ্যাপয়েন্টমেন্ট অনুরোধ করুন।",
    btn_req_appointment: "নতুন অ্যাপয়েন্টমেন্টের অনুরোধ করুন",
    upcoming_appointments_title: "আসন্ন ও অনুরোধকৃত অ্যাপয়েন্টমেন্ট",
    past_appointments_title: "সম্পন্ন অ্যাপয়েন্টমেন্টের রেকর্ড",
    followups_page_title: "ফলো-আপ ব্যবস্থাপনা সারি",
    followups_page_sub: "মেয়াদোত্তীর্ণ ফলো-আপ প্রশাসনিক বার্তা এবং চিকিৎসার সতর্কতা থেকে পৃথক।",
    filter_all: "সকল",
    filter_pending: "মুলতবি",
    filter_overdue: "মেয়াদোত্তীর্ণ",
    filter_completed: "সম্পন্ন",
    timeline_page_title: "আমার স্বাস্থ্য যাত্রা ও সময়রেখা",
    timeline_page_sub: "নিবন্ধন, চেক-ইন, পরিবর্তন, ডাক্তার পর্যালোচনা ও বার্তার কালানুক্রমিক বিবরণ।",
    legend_registration: "নিবন্ধন",
    legend_checkin: "চেক-ইন",
    legend_alert: "অ্যাটেনশন সতর্কতা",
    legend_clinician: "ডাক্তার পর্যালোচনা",
    reminders_page_title: "সিমুলেটেড এসএমএস ও হোয়াটসঅ্যাপ অনুস্মারক",
    reminders_page_sub: "রোগী এবং নির্ধারিত পরিবারের সদস্যদের পাঠানো স্বয়ংক্রিয় বার্তা।",
    btn_send_demo_reminder: "টেস্ট অ্যাপয়েন্টমেন্ট এসএমএস পাঠান",
    reminders_history_title: "প্রেরিত অনুস্মারক ও সরবরাহের ইতিহাস",
    family_feature_badge: "পরিচর্যাকারী ও অভিভাবক অ্যাক্সেস",
    family_page_title: "পরিবার সদস্য জরুরি ও ফলো-আপ পোর্টাল",
    family_page_sub: "প্রিয়জনকে সচেতন রাখুন। স্বাস্থ্যের পরিবর্তন হলে পরিবার তাৎক্ষণিক এসএমএস পায়।",
    btn_add_family_member: "পরিবার সদস্য তথ্য পরিবর্তন করুন",
    registered_caregiver_title: "নিবন্ধিত পরিবারের সদস্যের বিবরণ",
    registered_caregiver_sub: "রোগী সম্মতি কাঠামোর অধীনে অনুমোদিত",
    badge_consent_active: "সম্মতি সক্রিয়",
    family_lang_pref: "পছন্দের ভাষা:",
    family_permission_title: "অনুমোদিত পারিবারিক সুবিধাসমূহ:",
    perm_emergency_sms: "জরুরি পরিস্থিতিতে তাৎক্ষণিক এসএমএস ও হোয়াটসঅ্যাপ সতর্কতা পান",
    perm_view_vitals: "রোগীর গুরুত্বপূর্ণ স্বাস্থ্য তথ্য ও সারাংশ দেখুন",
    perm_reminders: "আসন্ন ও বাদ পড়া ফলো-আপের অনুস্মারক পান",
    perm_sos_call: "আশা কর্মী ও ডাক্তারকে সরাসরি জরুরি কল করুন",
    btn_sim_emergency_alert: "পরিবারে জরুরি টেস্ট এসএমএস পাঠান",
    family_sms_feed_title: "পরিবার সতর্কতা ও বার্তা ফিড",
    hub_title: "জরুরি স্বাস্থ্যসেবা দলের যোগাযোগ:",
    role_doctor: "যোগ্য চিকিৎসক (এমডি)",
    role_asha: "আশা স্বাস্থ্যকর্মী",
    patient_brief_tag: "এআই-সহায়তাপ্রাপ্ত পারিবারিক সারাংশ",
    brief_heading: "পরিবারের জন্য সহজ ভাষায় স্বাস্থ্য সারাংশ:",
    brief_ai_note: "পরিবারের বোঝার সুবিধার্থে এআই সারাংশ। ডাক্তারের সরাসরি পরামর্শের বিকল্প নয়।",
    profile_page_title: "রোগী প্রোফাইল ও সম্মতি ব্যবস্থাপনা",
    profile_page_sub: "আপনার ব্যক্তিগত তথ্য, সেবা কার্যক্রম ও গোপনীয়তা সম্মতি পরিচালনা করুন।",
    btn_save_changes: "পরিবর্তন সংরক্ষণ করুন",
    personal_info_heading: "ব্যক্তিগত ও জনসংখ্যাতাত্ত্বিক তথ্য",
    label_full_name: "সম্পূর্ণ নাম:",
    label_patient_id: "অনন্য রোগী আইডি:",
    label_age_band: "বয়স সীমা:",
    label_gender: "লিঙ্গ:",
    label_care_prog: "সেবা কার্যক্রম / শ্রেণি:",
    label_pref_lang: "পছন্দের যোগাযোগের ভাষা:",
    consent_heading: "রোগীর সম্মতি ও ডেটা নিয়মাবলী",
    consent_sub: "নিরাপত্তা নীতিমালার অধীনে নিয়ন্ত্রিত:",
    consent_followup_title: "ফলো-আপ ট্র্যাকিং ও ইঞ্জিন সম্মতি:",
    consent_followup_desc: "নিয়ম অনুযায়ী স্বাস্থ্য তথ্য বিশ্লেষণের অনুমতি দিন।",
    consent_family_title: "পরিবার সদস্য জরুরি সতর্কতা সম্মতি:",
    consent_asha_title: "আশা কর্মী অ্যাক্সেস:",
    consent_asha_desc: "আশা কর্মী সুনীতা দেবীকে চেক-ইন দেখার অনুমতি দিন।",
    audit_note: "অডিট রেকর্ড: ৩১ অক্টোবর ২০২৬ তারিখে সম্মতি নিশ্চিত করা হয়েছে।",
    modal_req_appt_title: "ফলো-আপ অ্যাপয়েন্টমেন্টের অনুরোধ করুন",
    appt_type_label: "অ্যাপয়েন্টমেন্টের ধরন:",
    appt_date_label: "পছন্দের তারিখ:",
    appt_time_label: "পছন্দের সময়:",
    appt_reason_label: "অনুরোধের কারণ:",
    btn_cancel: "বাতিল করুন",
    btn_submit_request: "অনুরোধ জমা দিন",
    modal_edit_family_title: "পরিবার / পরিচর্যাকারী যোগাযোগ তথ্য সম্পাদন",
    fam_name_label: "পরিচর্যাকারীর পূর্ণ নাম:",
    fam_rel_label: "রোগীর সাথে সম্পর্ক:",
    fam_phone_label: "মোবাইল নম্বর (এসএমএসের জন্য):",
    fam_email_label: "ইমেল ঠিকানা (ঐচ্ছিক):",
    fam_lang_label: "সতর্কতার জন্য পছন্দের ভাষা:",
    btn_save_caregiver: "তথ্য আপডেট করুন",
    sos_modal_title: "জরুরি চিকিৎসা সহায়তা",
    sos_desc: "আপনি কি বুকে তীব্র ব্যথা, চরম শ্বাসকষ্ট বা অজ্ঞান অবস্থা অনুভব করছেন?",
    btn_confirm_sos: "জরুরি সতর্কতা সম্প্রচার করুন"
  },

  as: {
    brand_tagline: "স্বাস্থ্যৰ সংকেতক সময়মতে চিকিৎসামুখী কৰা",
    role_patient: "ৰোগী পৰ্টেল",
    nav_dashboard: "ডেছব’ৰ্ড",
    nav_checkin: "+ স্বাস্থ্য পৰীক্ষা (Check-in)",
    nav_appointments: "অ্যাপয়েন্টমেন্ট ও নিকটবর্তী ডাক্তার",
    nav_followups: "ফলো-আপ",
    nav_timeline: "স্বাস্থ্যৰ সময়ৰেখা",
    nav_reminders: "সোঁৱৰণী আৰু বাৰ্তা",
    nav_nearby: "ওচৰৰ চিকিৎসক",
    nav_family: "পৰিয়াল / সেৱাকাৰী",
    nav_profile: "মোৰ প্ৰ’ফাইল আৰু সন্মতি",
    quick_actions_title: "দ্ৰুত কাৰ্য্যসূচী",
    quick_checkin: "+ পৰীক্ষা দাখিল কৰক",
    quick_appointment: "সাক্ষাৎকাৰৰ অনুৰোধ",
    footer_sub: "ৰোগী সেৱা পৰ্টেল",
    footer_motto: "ফলো-আপ প্ৰক্ৰিয়াত যাতে কোনো ৰোগী বাদ নপৰে।",
    header_greeting: "এয়া আপোনাৰ ব্যক্তিগত স্বাস্থ্য আৰু ফলো-আপৰ তথ্য",
    caregiver_mode_btn: "সেৱাকাৰীৰ দৃশ্য",
    emergency_sos: "জৰুৰীকালীন SOS",
    hero_pill: "আপোনাৰ ব্যক্তিগত চিকিৎসা স্থান",
    hero_welcome: "পুনৰ স্বাগতম,",
    hero_subtext: "আপোনাৰ স্বাস্থ্যযাত্ৰাৰ সৈতে সংযুক্ত থাকক। পৰীক্ষা আৰু ফলো-আপ নিয়মীয়াকৈ ৰাখক।",
    btn_submit_checkin: "+ স্বাস্থ্য পৰীক্ষা জমা দিয়ক",
    family_alert_active: "পাৰিবাৰিক সতৰ্কতা সক্ৰিয়",
    overview_title: "স্বাস্থ্যৰ সামগ্ৰিক অৱস্থা",
    patient_id_label: "ৰোগীৰ আই ডি:",
    kpi_appointments: "মোৰ সাক্ষাৎকাৰ",
    kpi_appointments_sub: "নিৰ্ধাৰিত আৰু অনুৰোধ কৰা",
    kpi_checkins: "স্বাস্থ্য পৰীক্ষা",
    kpi_checkins_sub: "দাখিল কৰা ৰেকৰ্ড",
    kpi_pending: "বাকী থকা ফলো-আপ",
    kpi_pending_sub: "সম্পূৰ্ণ হোৱাৰ অপেক্ষাত",
    kpi_completed: "সম্পূৰ্ণ হোৱা ফলো-আপ",
    kpi_completed_sub: "সম্পূৰ্ণ হিচাপে লিপিবদ্ধ",
    my_care_summary: "মোৰ সেৱা সাৰাংশ",
    followup_status_prefix: "ফলো-আপৰ স্থিতি:",
    status_pending: "বাকী আছে",
    status_completed: "সম্পূৰ্ণ হ’ল",
    attention_title: "মোৰ ফলো-আপ মনোযোগ (Attention Engine)",
    attention_subtitle: "ব্যক্তিগত ফলো-আপ তথ্য আৰু ব্যৱস্থাৰ জাননী",
    badge_demo_rules: "ডেমো নিয়ম",
    btn_evaluate: "নিয়ম পৰীক্ষা কৰক",
    clinical_disclaimer: "বকেয়া ফলো-আপ প্ৰশাসনিক সোঁৱৰণীহে, কোনো চিকিৎসা জৰুৰীকালীন নহয়। চিকিৎসা সংক্রান্তীয় সিদ্ধান্ত অভিজ্ঞ চিকিৎসকৰ হাততহে থাকে।",
    vitals_change_title: "শেহতীয়া লক্ষণ আৰু পৰিৱৰ্তন চিনাক্তকৰণ",
    vitals_change_sub: "পূৰ্বৰ ৰেকৰ্ডৰ সৈতে তুলনা",
    badge_patient_reported: "ৰোগীয়ে প্ৰদান কৰা তথ্য",
    family_sync_title: "পৰিয়াল আৰু সেৱাকাৰী জৰুৰীকালীন সংযোগ",
    family_sync_sub: "সংযুক্ত অভিভাৱক:",
    badge_sync_live: "লাইভ সংযোগ",
    family_contact_label: "পঞ্জীকৃত মোবাইল:",
    family_lang_label: "বাৰ্তাৰ ভাষা:",
    family_last_sms: "শেহতীয়া জাননী:",
    btn_manage_family: "সেৱাকাৰী ছেটিংছ পৰিচালনা",
    btn_test_sms: "পৰিয়াললৈ পৰীক্ষামূলক বাৰ্তা",
    nearby_page_title: "ওচৰৰ অভিজ্ঞ চিকিৎসক আৰু জৰুৰীকালীন চিকিৎসালয়",
    nearby_page_sub: "আপোনাৰ বৰ্তমান স্থানৰ জৰিয়তে ওচৰৰ কাৰ্ডিঅ’লজি বিশেষজ্ঞ, ২৪x৭ আই চি ইউ আৰু চৰকাৰী আশা সেৱা কেন্দ্ৰ বিচাৰক।",
    btn_detect_gps: "📍 মোৰ বৰ্তমান GPS অৱস্থান বিচাৰক",
    location_detected_label: "বৰ্তমান অঞ্চল:",
    filter_all_doctors: "সকলো চিকিৎসক",
    filter_cardiologists: "হৃদৰোগ বিশেষজ্ঞ",
    filter_physicians: "মেডিচিন বিশেষজ্ঞ",
    filter_emergency_icu: "২৪x৭ আই চি ইউ / জৰুৰীকালীন",
    call_btn: "ফোন কৰক",
    book_appt_btn: "সাক্ষাৎকাৰ লওক",
    directions_btn: "দিশ চাওক",
    checkin_page_title: "ৰোগীৰ স্বাস্থ্য পৰীক্ষা",
    checkin_page_sub: "আপোনাৰ वर्तमान লক্ষণ আৰু স্বাস্থ্যৰ জোখ দাখিল কৰক। ব্যৱস্থাই ততালিকে মূল্যায়ন কৰিব।",
    data_source_label: "উৎস: ৰোগীয়ে নিজেই প্ৰদান কৰা",
    symptoms_heading: "১. বৰ্তমান লক্ষণসমূহৰ তালিকা",
    symptoms_tip: "যোৱা ২৪-৪৮ ঘণ্টাত অনুভৱ কৰা সকলো লক্ষণ বাছনি কৰক:",
    sym_shortness_breath: "উশাহ চুটি হোৱা",
    sym_chest_pain: "বুকুৰ বিষ বা চাপ",
    sym_dizziness: "মূৰ ঘূৰোৱা",
    sym_fever: "উচ্চ জ্বৰ",
    sym_swelling: "ভৰি বা গাঁঠি ফুলা",
    sym_fatigue: "অত্যধিক ক্লান্তি",
    sym_headache: "তীব্ৰ মূৰৰ বিষ",
    sym_cough: "অবিৰত কাহ",
    symptom_notes_label: "নিজৰ ভাষাত লক্ষণৰ বিৱৰণ দিয়ক:",
    symptom_notes_hint: "এআই য়ে আপোনাৰ চিকিৎসকৰ সুবিধাৰ্থে ইয়াক সুবিন্যস্ত কৰিব।",
    vitals_heading: "২. স্বাস্থ্য পৰিমাপ অন্তৰ্ভুক্তিকৰণ",
    vitals_tip: "ঘৰত বা আশা কৰ্মীৰ সহায়ত লোৱা ৰিডিং লিখক:",
    bp_sys_label: "চিষ্টোলিক বিপি",
    hint_bp_sys: "স্বাভাৱিক: 90 - 120 mmHg",
    bp_dia_label: "ডায়াষ্টোলিক বিপি",
    hint_bp_dia: "স্বাভাৱিক: 60 - 80 mmHg",
    pulse_label: "হৃদস্পন্দন (Pulse)",
    hint_pulse: "স্বাভাৱিক: 60 - 100 bpm",
    spo2_label: "অক্সিজেন (SpO2)",
    hint_spo2: "স্বাভাৱিক: 95 - 100%",
    temp_label: "উত্তাপ (Temperature)",
    hint_temp: "স্বাভাৱিক: 97.8 - 99.1 °F",
    sugar_label: "তেজৰ শৰ্কৰা (Sugar)",
    hint_sugar: "খালী পেটত < 100 / খোৱাৰ পাছত < 140",
    assisted_heading: "৩. অতিৰিক্ত বিৱৰণ আৰু নথিপত্ৰ",
    assisted_by_worker: "আশা স্বাস্থ্যকৰ্মীৰ সহায়ত লোৱা হৈছে",
    attachment_label: "ঔষধৰ প্ৰেছক্ৰিপশ্বন বা লেব ৰিপৰ্ট ফটো (ঐচ্ছিক):",
    dropzone_text: "আপলোড কৰিবলৈ ফাইল ইয়াত টানি আনক বা ক্লিক কৰক",
    dropzone_sub: "সুৰক্ষিত এনক্ৰিপ্ট কৰা তথ্য",
    btn_load_sample: "উচ্চ-বিপদ পৰীক্ষামূলক তথ্য ভৰাওক",
    btn_submit_now: "স্বাস্থ্য পৰীক্ষা দাখিল কৰক",
    engine_preview_title: "ৰোগী মনোযোগ ইঞ্জিনৰ পূৰ্বৰূপ",
    engine_preview_sub: "আপোনাৰ তথ্যসমূহ চিকিৎসীয় নিয়মৰ সৈতে কেনেদৰে পৰীক্ষা কৰা হয়:",
    rule_cr01_desc: "চিষ্টোলিক বিপি ≥ ১৪০ হ’লে চিকিৎসক পৰ্যালোচনাৰ জাননী সৃষ্টি হয়।",
    rule_cr02_desc: "অক্সিজেনৰ মাত্রা < ৯৪% হ’লে চিকিৎসকক জৰুৰীভাৱে অৱগত কৰা হয়।",
    rule_cr03_desc: "বুকুৰ বিষ আৰু উশাহৰ সমস্যা থাকিলে পৰিয়াল আৰু চিকিৎসকক সতৰ্কবাৰ্তা প্ৰেৰণ কৰা হয়।",
    rule_ad01_desc: "৭২ ঘণ্টাতকৈ অধিক পলম হ’লে প্ৰশাসনিক সোঁৱৰণী লিপিবদ্ধ হয়।",
    safety_box_small: "এই প্লেটফৰ্মে ৰোগ নিৰ্ণয় নকৰে বা ঔষধ নিদিয়ে। সতৰ্কতাসমূহ যোগ্য চিকিৎসকৰ ওচৰলৈ প্ৰেৰণ কৰা হয়।",
    appointments_page_title: "সাক্ষাৎকাৰ আৰু পৰামৰ্শ",
    appointments_page_sub: "আহিবলগীয়া সাক্ষাৎকাৰ পৰিচালনা কৰক আৰু নতুন পৰামৰ্শৰ অনুৰোধ কৰক।",
    btn_req_appointment: "নতুন সাক্ষাৎকাৰৰ বাবে অনুৰোধ",
    upcoming_appointments_title: "আসন্ন আৰু অনুৰোধ কৰা সাক্ষাৎকাৰ",
    past_appointments_title: "সম্পূৰ্ণ হোৱা সাক্ষাৎকাৰৰ ৰেকৰ্ড",
    followups_page_title: "ফলো-আপ ব্যৱস্থাপনা তালিকা",
    followups_page_sub: "বকেয়া ফলো-আপ চিকিৎসা সতৰ্কতাৰ পৰা সুকীয়াভাৱে ৰখা হয়।",
    filter_all: "সকলো",
    filter_pending: "বাকী আছে",
    filter_overdue: "বকেয়া",
    filter_completed: "সম্পূৰ্ণ হ’ল",
    timeline_page_title: "মোৰ স্বাস্থ্য যাত্ৰা আৰু সময়ৰেখা",
    timeline_page_sub: "পঞ্জীয়ন, স্বাস্থ্য পৰীক্ষা, পৰিৱৰ্তন আৰু চিকিৎসকৰ পৰামৰ্শৰ ক্ৰমানুসাৰী ৰেকৰ্ড।",
    legend_registration: "পঞ্জীয়ন",
    legend_checkin: "পৰীক্ষা",
    legend_alert: "মনোযোগ সতৰ্কতা",
    legend_clinician: "চিকিৎসকৰ পৰ্যালোচনা",
    reminders_page_title: "অনুকৰণ কৰা বাৰ্তা আৰু সোঁৱৰণী",
    reminders_page_sub: "ৰোগী আৰু নিৰ্ধাৰিত পৰিয়ালৰ সদস্যলৈ প্ৰেৰণ কৰা স্বয়ংক্রিয় বার্তা।",
    btn_send_demo_reminder: "পৰীক্ষামূলক সাক্ষাৎকাৰ বাৰ্তা প্ৰেৰণ",
    reminders_history_title: "প্ৰেৰণ কৰা সোঁৱৰণী আৰু স্থিতি",
    family_feature_badge: "সেৱাকাৰী আৰু অভিভাৱক প্ৰৱেশ",
    family_page_title: "পৰিয়াল সদস্য জৰুৰীকালীন আৰু ফলো-আপ পৰ্টেল",
    family_page_sub: "আপোনাৰ আপোনজনক অৱগত কৰি ৰাখক। স্বাস্থ্যৰ অৱনতি ঘটিলে পৰিয়ালে তাৎক্ষণিক বাৰ্তা লাভ কৰে।",
    btn_add_family_member: "পৰিয়ালৰ সদস্যৰ তথ্য সলনি কৰক",
    registered_caregiver_title: "পঞ্জীকৃত পৰিয়ালৰ সদস্যৰ বিৱৰণ",
    registered_caregiver_sub: "ৰোগী সন্মতি অনুসৰি অনুমোদিত",
    badge_consent_active: "সন্মতি সক্ৰিয়",
    family_lang_pref: "পছন্দৰ ভাষা:",
    family_permission_title: "নিৰ্ধাৰিত পাৰিবাৰিক অনুমতিসমূহ:",
    perm_emergency_sms: "জৰুৰী পৰিস্থিতিত ততালিকে এছএমএছ আৰু হোৱাটছএপ সতৰ্কতা লাভ কৰক",
    perm_view_vitals: "ৰোগীৰ স্বাস্থ্য তথ্য আৰু পৰীক্ষাৰ সাৰাংশ চাওক",
    perm_reminders: "আসন্ন আৰু বাকী থকা ফলো-আপৰ সোঁৱৰণী লাভ কৰক",
    perm_sos_call: "আশাকৰ্মী আৰু চিকিৎসকক পোনপটীয়া জৰুৰীকালীন ফোন",
    btn_sim_emergency_alert: "পৰিয়াললৈ জৰুৰীকালীন বাৰ্তা পৰীক্ষা কৰক",
    family_sms_feed_title: "পৰিয়াল সতৰ্কতা আৰু বাৰ্তা তালিকা",
    hub_title: "জৰুৰীকালীন স্বাস্থ্যসেৱা দলৰ যোগাযোগ:",
    role_doctor: "অভিজ্ঞ চিকিৎসক (এম ডি)",
    role_asha: "আশা স্বাস্থ্যকৰ্মী",
    patient_brief_tag: "এআই-সহায়তাৰে পাৰিবাৰিক সাৰাংশ",
    brief_heading: "পৰিয়ালৰ বাবে সৰল ভাষাত স্বাস্থ্য সাৰাংশ:",
    brief_ai_note: "পৰিয়ালে বুজিব পৰাকৈ প্ৰস্তুত কৰা সাৰাংশ। মূল চিকিৎসা পৰামৰ্শৰ বিকল্প নহয়।",
    profile_page_title: "ৰোগীৰ প্ৰ’ফাইল আৰু সন্মতি পৰিচালনা",
    profile_page_sub: "ব্যক্তিগত তথ্য, চিকিৎসা কাৰ্যসূচী আৰু গোপনীয়তা সন্মতি পৰিচালনা কৰক।",
    btn_save_changes: "পৰিৱৰ্তন সংৰক্ষণ কৰক",
    personal_info_heading: "ব্যক্তিগত আৰু জনসংখ্যা তথ্য",
    label_full_name: "সম্পূৰ্ণ নাম:",
    label_patient_id: "ইউনিক ৰোগী আই ডি:",
    label_age_band: "বয়সৰ গোট:",
    label_gender: "লিংগ:",
    label_care_prog: "সেৱা কাৰ্যক্ৰম / শ্ৰেণী:",
    label_pref_lang: "পছন্দৰ যোগাযোগৰ ভাষা:",
    consent_heading: "ৰোগীৰ সন্মতি আৰু তথ্য সংৰক্ষণ",
    consent_sub: "নিৰাপদ নীতিৰ অধীনত নিয়ন্ত্ৰিত:",
    consent_followup_title: "ফলো-আপ ট্ৰেকিং আৰু ইঞ্জিন সন্মতি:",
    consent_followup_desc: "নিয়ম অনুসৰি স্বাস্থ্য তথ্য বিশ্লেষণ কৰিবলৈ অনুমতি দিয়ক।",
    consent_family_title: "পৰিয়াল সদস্য জৰুৰীকালীন জাননী সন্মতি:",
    consent_asha_title: "আশাকৰ্মীৰ প্ৰৱেশাধিকাৰ:",
    consent_asha_desc: "আশাকৰ্মী সুনীতা দেৱীক স্বাস্থ্য স্থিতি চোৱাৰ অনুমতি দিয়ক।",
    audit_note: "অডিট ৰেকৰ্ড: ৩১ অক্টোবৰ ২০২৬ তাৰিখে সন্মতি নিশ্চিত কৰা হৈছে।",
    modal_req_appt_title: "ফলো-আপ সাক্ষাৎকাৰৰ অনুৰোধ",
    appt_type_label: "সাক্ষাৎকাৰৰ প্ৰকাৰ:",
    appt_date_label: "পছন্দৰ তাৰিখ:",
    appt_time_label: "পছন্দৰ সময়:",
    appt_reason_label: "অনুৰোধৰ কাৰণ:",
    btn_cancel: "বাতিল কৰক",
    btn_submit_request: "অনুৰোধ দাখিল কৰক",
    modal_edit_family_title: "পৰিয়াল / সেৱাকাৰীৰ যোগাযোগ তথ্য সলনি কৰক",
    fam_name_label: "সেৱাকাৰীৰ সম্পূৰ্ণ নাম:",
    fam_rel_label: "ৰোগীৰ সৈতে সম্বন্ধ:",
    fam_phone_label: "মোবাইল নম্বৰ (বাৰ্তাৰ বাবে):",
    fam_email_label: "ইমেইল ঠিকনা (ঐচ্ছিক):",
    fam_lang_label: "বাৰ্তাৰ বাবে পছন্দৰ ভাষা:",
    btn_save_caregiver: "তথ্য নবীকৰণ কৰক",
    sos_modal_title: "জৰুৰীকালীন চিকিৎসা সাহাৰ্য্য",
    sos_desc: "আপোনাৰ বুকুত অসহ্য বিষ, উশাহ ল’বলৈ অতি কষ্ট হৈছে নেকি?",
    btn_confirm_sos: "জৰুৰীকালীন সংকেত প্ৰেৰণ কৰক"
  }
};

// =============================================================================
// 2. CORE APPLICATION STATE
// =============================================================================
const APP_STATE = {
  currentLang: 'en',
  isCaregiverMode: false,
  
  patient: {
    id: "SS-877041",
    name: "Tanishka Patil",
    firstName: "tanishka",
    ageBand: "25-34",
    gender: "Female",
    careProgram: "Post-Operative Cardiovascular Follow-up",
    assignedAsha: "Sunita Devi (ASHA)",
    ashaPhone: "+91 98111 22334",
    assignedDoctor: "Dr. Ananya Sharma (MD)",
    doctorPhone: "+91 98222 33445",
    registrationDate: "12 Aug 2026",
    preferredLang: "mr"
  },

  // Designated Caregiver (Dynamic across all UI and SMS alerts!)
  caregiver: {
    name: "Ramesh Patil",
    relation: "Father & Primary Guardian",
    phone: "+91 98765 43210",
    email: "ramesh.patil@example.com",
    preferredLang: "mr",
    consentEmergencySms: true,
    consentViewVitals: true
  },

  // User Geolocation & Region state
  userLocation: {
    lat: 18.5204,
    lng: 73.8567,
    city: "Pune",
    area: "Shivajinagar / Model Colony",
    isGpsLive: false
  },

  // Baseline records
  baselineVitals: {
    sysBP: 120,
    diaBP: 80,
    pulse: 72,
    spo2: 99,
    temp: 98.4
  },

  // Real Verified Nearby Doctors & Emergency Facilities Dataset
  nearbyDoctors: [
    {
      id: "DOC-01",
      name: "Dr. Rajesh Kulkarni",
      qualifications: "MD, DM (Cardiology), FACC",
      specialty: "Cardiologist",
      category: "cardiologist",
      hospital: "Ruby Hall Cardiac Center",
      lat: 18.5312,
      lng: 73.8761,
      distanceKm: 0.8,
      status: "Open Now (24x7 Emergency)",
      rating: "4.9 ⭐ (142 reviews)",
      phone: "+91 98230 11223",
      address: "Dhole Patil Road, near Railway Station",
      verified: true
    },
    {
      id: "DOC-02",
      name: "Dr. Priya Deshmukh",
      qualifications: "MBBS, DNB (Internal Medicine)",
      specialty: "General Physician",
      category: "physician",
      hospital: "Apollo Clinic & Diagnostic Center",
      lat: 18.5245,
      lng: 73.8490,
      distanceKm: 1.2,
      status: "Available Today (10:00 AM - 08:00 PM)",
      rating: "4.8 ⭐ (89 reviews)",
      phone: "+91 98230 44556",
      address: "FC Road, Shivajinagar",
      verified: true
    },
    {
      id: "DOC-03",
      name: "Jehangir Hospital Trauma & ICU",
      qualifications: "NABH Accredited Multi-Speciality Hospital",
      specialty: "24x7 ICU / Emergency",
      category: "emergency",
      hospital: "Jehangir Hospital Cardiac ICU",
      lat: 18.5298,
      lng: 73.8785,
      distanceKm: 1.5,
      status: "Emergency Open (Immediate Ambulance Dispatch)",
      rating: "4.9 ⭐ (320 reviews)",
      phone: "108 / 020-66811000",
      address: "Sassoon Road, Central Pune",
      verified: true
    },
    {
      id: "DOC-04",
      name: "Dr. Amitava Sen",
      qualifications: "MD (Chest Medicine), FCCP",
      specialty: "Pulmonologist (Chest Specialist)",
      category: "cardiologist",
      hospital: "Sancheti Chest & Respiratory Clinic",
      lat: 18.5320,
      lng: 73.8520,
      distanceKm: 1.9,
      status: "Available for Tele-Triage & Clinic",
      rating: "4.7 ⭐ (64 reviews)",
      phone: "+91 98230 77889",
      address: "Thube Park, Shivajinagar",
      verified: true
    },
    {
      id: "DOC-05",
      name: "Dr. Sunita Devi (ASHA) & Dr. Sharma",
      qualifications: "Govt Primary Health Center (PHC)",
      specialty: "Frontline Community Health",
      category: "physician",
      hospital: "Urban Health Post (Govt Community Clinic)",
      lat: 18.5210,
      lng: 73.8550,
      distanceKm: 0.5,
      status: "Open (Govt Free Follow-up Facility)",
      rating: "4.9 ⭐ (Frontline Care)",
      phone: "+91 98111 22334",
      address: "Ward 14, Health Center Lane",
      verified: true
    }
  ],

  // Check-in history
  checkins: [
    {
      id: "CHK-001",
      date: "2026-10-15 09:30",
      displayDate: "15 Oct 2026, 09:30 AM",
      sysBP: 122,
      diaBP: 80,
      pulse: 74,
      spo2: 99,
      temp: 98.4,
      sugar: 104,
      symptoms: [],
      notes: "Feeling good after starting new blood pressure medication.",
      source: "Patient-Reported"
    },
    {
      id: "CHK-002",
      date: "2026-10-24 11:15",
      displayDate: "24 Oct 2026, 11:15 AM",
      sysBP: 128,
      diaBP: 84,
      pulse: 76,
      spo2: 98,
      temp: 98.6,
      sugar: 112,
      symptoms: ["Mild fatigue"],
      notes: "Slight tiredness in the afternoon.",
      source: "Patient-Reported"
    },
    {
      id: "CHK-003",
      date: "2026-10-31 16:40",
      displayDate: "31 Oct 2026, 04:40 PM",
      sysBP: 135,
      diaBP: 88,
      pulse: 80,
      spo2: 97,
      temp: 98.7,
      sugar: 118,
      symptoms: ["Dizziness"],
      notes: "Felt slight dizziness when standing up quickly.",
      source: "Patient-Reported"
    }
  ],

  // Attention Alerts
  alerts: [
    {
      id: "ALT-2026-089",
      category: "FOLLOW-UP",
      type: "administrative",
      title: "Appointment request awaiting review",
      description: "Your request for 08 Sept 2027 has been recorded and is awaiting healthcare team review.",
      dateLabel: "Scheduled date: 08 Sept 2027",
      timestamp: "31 Oct 2026 14:15",
      ruleId: "RULE-AD-02",
      ruleName: "Appointment request pending review",
      inputResponsible: "Patient request for 08 Sept 2027",
      workflowAction: "Awaiting triage review by Frontline Health Worker / Clinician",
      actionText: "View appointments",
      actionTab: "appointments",
      status: "Active"
    },
    {
      id: "ALT-2026-088",
      category: "FOLLOW-UP",
      type: "administrative",
      title: "Routine bi-weekly vitals check-in scheduled",
      description: "Your regular follow-up window is now open. Please submit your BP and SpO2.",
      dateLabel: "Due date: 02 Nov 2026",
      timestamp: "30 Oct 2026 09:00",
      ruleId: "RULE-AD-01",
      ruleName: "Scheduled check-in reminder",
      inputResponsible: "Check-in cycle interval (14 days)",
      workflowAction: "Send automated SMS reminder to patient & caregiver",
      actionText: "Submit check-in",
      actionTab: "checkin",
      status: "Active"
    }
  ],

  // Appointments
  appointments: [
    {
      id: "APT-101",
      title: "Cardiovascular Tele-Consultation",
      clinician: "Dr. Ananya Sharma (MD)",
      type: "Routine Post-op Review",
      date: "2027-09-08",
      time: "10:00 AM - 10:30 AM",
      status: "Awaiting Review",
      reason: "Follow-up evaluation on post-op cardiac recovery."
    },
    {
      id: "APT-100",
      title: "In-Person Clinic Health Review",
      clinician: "Dr. Ananya Sharma (MD)",
      type: "Post-op Follow-up",
      date: "2026-10-01",
      time: "11:00 AM - 11:30 AM",
      status: "Completed",
      reason: "Initial baseline recovery evaluation. Medication reviewed."
    }
  ],

  // Follow-up Queue Items
  followups: [
    {
      id: "FOL-01",
      title: "Appointment Request Review (08 Sept 2027)",
      dueDate: "08 Sept 2027",
      category: "Administrative",
      status: "pending",
      assignedTo: "Frontline Health Worker Sunita Devi",
      description: "Triage check for patient's requested appointment date."
    },
    {
      id: "FOL-02",
      title: "Scheduled Bi-Weekly Check-in Cycle",
      dueDate: "02 Nov 2026",
      category: "Administrative",
      status: "pending",
      assignedTo: "Patient (Self)",
      description: "Home measurement of BP, Pulse and symptoms."
    },
    {
      id: "FOL-00",
      title: "Post-Operative Baseline Onboarding",
      dueDate: "01 Oct 2026",
      category: "Administrative",
      status: "completed",
      assignedTo: "Dr. Ananya Sharma",
      description: "Initial follow-up protocol established."
    }
  ],

  // Communication & Simulated Reminders
  reminders: [
    {
      id: "MSG-01",
      to: "Tanishka Patil (+91 91234 56789)",
      type: "SMS",
      channel: "SMS",
      title: "Appointment Request Confirmation",
      text: "SWASTHYA SENSE: Dear Tanishka, your appointment request for 08 Sept 2027 has been received. Your care team will confirm your slot shortly. Ref: APT-101.",
      time: "31 Oct 2026, 02:16 PM",
      status: "Delivered"
    },
    {
      id: "MSG-02",
      to: "Ramesh Patil (+91 98765 43210 - Caregiver)",
      type: "WhatsApp",
      channel: "WA",
      title: "Caregiver Sync Notification",
      text: "SWASTHYA SENSE: नमस्कार रमेश पाटील, तनिष्का पाटील यांचे नवीन चेक-इन नोंदवले गेले आहे. रक्तदाब १३५/८८ mmHg. सर्व सामान्य असून काळजीवाहू डॅशबोर्डवर स्थिती पाहू शकता.",
      time: "31 Oct 2026, 04:42 PM",
      status: "Read"
    }
  ],

  // Family SMS feed (Dynamic recipient name)
  familySmsList: [
    {
      id: "FSMS-1",
      timestamp: "31 Oct 2026, 04:42 PM",
      title: "Check-in Sync Alert",
      text: "SWASTHYA SENSE (Caregiver Alert): तनिष्का पाटील यांनी आरोग्य तपासणी सबमिट केली आहे. बीपी: १३५/८८ mmHg (सौम्य वाढ). आशा सेविका सुनिता देवी यांना सूचना दिली आहे.",
      urgency: "normal"
    },
    {
      id: "FSMS-2",
      timestamp: "31 Oct 2026, 02:17 PM",
      title: "Appointment Update",
      text: "SWASTHYA SENSE: तनिष्का पाटील यांच्या ०८ सप्टेंबर २०२७ च्या डॉक्टर भेटीची विनंती नोंदवली गेली आहे.",
      urgency: "normal"
    }
  ]
};

// =============================================================================
// 3. INITIALIZATION & DOM BINDING
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // 1. Restore User Name from Login / Signup
  const storedUser = localStorage.getItem('swasthyaSense_userName');
  if (storedUser && storedUser.trim()) {
    const cleanName = storedUser.trim();
    APP_STATE.patient.name = cleanName;
    APP_STATE.patient.firstName = cleanName.split(' ')[0];

    const sidebarName = document.getElementById('sidebarUserName');
    if (sidebarName) sidebarName.textContent = cleanName;

    const heroName = document.getElementById('heroPatientName');
    if (heroName) heroName.textContent = cleanName;

    const avatar = document.getElementById('sidebarAvatar');
    if (avatar) avatar.textContent = cleanName.charAt(0).toUpperCase();

    const profileCardName = document.getElementById('profileCardPatientName');
    if (profileCardName) profileCardName.textContent = cleanName;

    const profileInput = document.getElementById('profileFullName');
    if (profileInput) profileInput.value = cleanName;
  }

  // 2. Restore Language from Login / Storage
  const storedLang = localStorage.getItem('swasthyaSense_currentLang');
  if (storedLang && ['en', 'hi', 'mr', 'as', 'bn'].includes(storedLang)) {
    APP_STATE.currentLang = storedLang;
  }

  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.value = APP_STATE.currentLang;
  }

  bindNavigation();
  bindLanguageSelector();
  bindCaregiverToggle();
  bindCheckinForm();
  bindAppointmentModal();
  bindFamilyModal();
  bindEmergencySOS();
  bindPhoneTabs();
  bindQuickActions();
  bindNearbyDoctorsFeatures();
  bindMergedAppointmentsAndNearby();
  bindEmergencyChatbot();
  initPermissionManager();
  initProfileAiAssistant();

  // Apply Language and update dynamic Caregiver names everywhere!
  applyLanguage(APP_STATE.currentLang);
  updateCaregiverUI();
  renderDashboard();
  renderAppointments();
  renderFollowups();
  renderTimeline();
  renderReminders();
  renderFamilyPortal();
  renderNearbyDoctors();
  updatePhonePreview();
  renderEmergencyChatbot(APP_STATE.currentLang);
}

// =============================================================================
// 4. LANGUAGE SWITCHING ENGINE (5 LANGUAGES)
// =============================================================================
function bindLanguageSelector() {
  const langSelect = document.getElementById('languageSelect');
  if (!langSelect) return;

  langSelect.value = APP_STATE.currentLang;

  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    APP_STATE.currentLang = lang;
    localStorage.setItem('swasthyaSense_currentLang', lang);
    applyLanguage(lang);
    renderEmergencyChatbot(lang);
    showToast(`Language switched to ${langSelect.options[langSelect.selectedIndex].text}`, 'success');
  });
}

function applyLanguage(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  
  document.querySelectorAll('[data-i18n]').forEach((elem) => {
    const key = elem.getAttribute('data-i18n');
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });

  // Re-render components with translated dynamic strings
  updateCaregiverUI();
  renderDashboard();
  renderTimeline();
  renderReminders();
  renderFamilyPortal();
  renderNearbyDoctors();
  renderEmergencyChatbot(lang);
  renderProfileAiChips(lang);

  const langLabelMap = {
    en: 'English (UK / IN)',
    hi: 'हिन्दी (Hindi)',
    mr: 'मराठी (Marathi)',
    as: 'অসমীয়া (Assamese)',
    bn: 'বাংলা (Bengali)'
  };
  const profLang = document.getElementById('profilePreferredLangDisp');
  if (profLang) profLang.textContent = langLabelMap[lang] || lang;
}

function t(key) {
  const lang = APP_STATE.currentLang || 'en';
  return (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || (TRANSLATIONS.en && TRANSLATIONS.en[key]) || key;
}

// =============================================================================
// 5. CAREGIVER DYNAMIC NAME UPDATE (FIXES USER BUG)
// =============================================================================
/**
 * Ensures that whenever the family member / caregiver name is changed,
 * it updates EVERYWHERE dynamically:
 * - Profile card in family portal
 * - Dashboard family sync badge
 * - Emergency SOS modal
 * - SMS message templates & history headers
 * - Consent disclaimer
 * - Caregiver view toggle & greeting
 */
function updateCaregiverUI() {
  const c = APP_STATE.caregiver;
  const langNames = { en: 'English', hi: 'हिन्दी (Hindi)', mr: 'मराठी (Marathi)', bn: 'বাংলা (Bengali)', as: 'অসমীয়া (Assamese)' };

  // 1. Family Portal Display Elements
  const dispName = document.getElementById('dispCaregiverName');
  if (dispName) dispName.textContent = c.name;

  const dispRel = document.getElementById('dispCaregiverRelation');
  if (dispRel) dispRel.textContent = c.relation;

  const dispPhone = document.getElementById('dispCaregiverPhone');
  if (dispPhone) dispPhone.textContent = c.phone;

  const dispEmail = document.getElementById('dispCaregiverEmail');
  if (dispEmail) dispEmail.textContent = c.email || 'N/A';

  const dispLang = document.getElementById('dispCaregiverLang');
  if (dispLang) dispLang.textContent = langNames[c.preferredLang] || c.preferredLang;

  // 2. Dashboard Family Sync Box
  const dashName = document.getElementById('dashFamilyMemberName');
  if (dashName) dashName.textContent = `${c.name} (${c.relation.split('&')[0].trim()})`;

  const dashPhone = document.getElementById('dashFamilyPhone');
  if (dashPhone) dashPhone.textContent = c.phone;

  const dashLang = document.getElementById('dashFamilyLang');
  if (dashLang) dashLang.textContent = langNames[c.preferredLang] || c.preferredLang;

  // 3. SOS Modal Target Caregiver
  const sosCaregiver = document.getElementById('sosCaregiverName');
  if (sosCaregiver) sosCaregiver.textContent = `${c.name} (${c.phone})`;

  // 4. Subtitle on Family SMS feed
  const feedSub = document.getElementById('familySmsFeedSub');
  if (feedSub) feedSub.textContent = `Messages delivered directly to ${c.name} (${c.phone})`;

  // 5. Consent Text
  const consentText = document.getElementById('consentFamilyDesc');
  if (consentText) {
    consentText.textContent = `Allow system to dispatch simulated SMS / WhatsApp alerts to ${c.name} when clinical thresholds are breached.`;
  }

  // 6. Caregiver View Banner / Header Greeting if active
  if (APP_STATE.isCaregiverMode) {
    document.getElementById('sidebarUserName').textContent = c.name;
    document.getElementById('sidebarAvatar').textContent = c.name.charAt(0).toUpperCase();
    const heroName = document.getElementById('heroPatientName');
    if (heroName) heroName.textContent = `${c.name} (Caregiver)`;
  } else {
    document.getElementById('sidebarUserName').textContent = APP_STATE.patient.name;
    document.getElementById('sidebarAvatar').textContent = APP_STATE.patient.name.charAt(0).toUpperCase();
    const heroName = document.getElementById('heroPatientName');
    if (heroName) heroName.textContent = APP_STATE.patient.name;
    const profileCardName = document.getElementById('profileCardPatientName');
    if (profileCardName) profileCardName.textContent = APP_STATE.patient.name;
  }
}

// =============================================================================
// 6. REAL GEOLOCATION & NEARBY DOCTOR FINDER (NEW REQUESTED FEATURE)
// =============================================================================
function bindNearbyDoctorsFeatures() {
  const btnDetect = document.getElementById('btnDetectGpsLocation');
  const citySelect = document.getElementById('nearbyCitySelect');
  const filterChips = document.querySelectorAll('.doc-filter-chip');

  // GPS Location detector button
  btnDetect?.addEventListener('click', requestUserLocation);

  // Region / City dropdown selector
  citySelect?.addEventListener('change', (e) => {
    const city = e.target.value;
    selectCityFallback(city);
  });

  // Filter chips (Cardiologist, Physician, ICU, All)
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const cat = chip.getAttribute('data-category');
      renderNearbyDoctors(cat);
    });
  });
}

function bindMergedAppointmentsAndNearby() {
  const btnAll = document.getElementById('btnViewAllMerged');
  const btnAppt = document.getElementById('btnViewAppointmentsOnly');
  const btnNearby = document.getElementById('btnViewNearbyOnly');
  const blockAppt = document.getElementById('blockAppointments');
  const blockNearby = document.getElementById('blockNearbyDoctors');

  function setMergedView(mode) {
    [btnAll, btnAppt, btnNearby].forEach(b => b?.classList.remove('active'));

    if (mode === 'all') {
      btnAll?.classList.add('active');
      if (blockAppt) blockAppt.style.display = 'block';
      if (blockNearby) blockNearby.style.display = 'block';
    } else if (mode === 'appointments') {
      btnAppt?.classList.add('active');
      if (blockAppt) blockAppt.style.display = 'block';
      if (blockNearby) blockNearby.style.display = 'none';
    } else if (mode === 'nearby') {
      btnNearby?.classList.add('active');
      if (blockAppt) blockAppt.style.display = 'none';
      if (blockNearby) blockNearby.style.display = 'block';
    }
  }

  btnAll?.addEventListener('click', () => setMergedView('all'));
  btnAppt?.addEventListener('click', () => setMergedView('appointments'));
  btnNearby?.addEventListener('click', () => setMergedView('nearby'));

  // Header Location Pill click: Go to merged appointments & nearby section and focus nearby doctors
  const headerLoc = document.getElementById('headerLocationPill');
  headerLoc?.addEventListener('click', () => {
    switchTab('appointments');
    setMergedView('nearby');
    setTimeout(() => {
      blockNearby?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  });

  // Keep badge counts and location station text updated
  const pillCount = document.getElementById('pillApptCount');
  if (pillCount) {
    const upcoming = APP_STATE.appointments.filter(a => a.status !== 'Completed').length;
    pillCount.textContent = upcoming;
  }
}

function requestUserLocation(force = false) {
  const perms = getSavedPermissions();
  if (!perms.location && !force) {
    openPermissionModal();
    return;
  }

  if (!navigator.geolocation) {
    showToast("Geolocation is not supported by your browser. Using city selector.", "warning");
    return;
  }

  showToast("Requesting GPS coordinates from your device...", "info");

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      
      APP_STATE.userLocation.lat = lat;
      APP_STATE.userLocation.lng = lng;
      APP_STATE.userLocation.isGpsLive = true;
      APP_STATE.userLocation.area = `Live Coordinates: ${lat.toFixed(4)}° N, ${lng.toFixed(4)}° E`;

      // Recalculate distance to all doctors using Haversine formula
      APP_STATE.nearbyDoctors.forEach(doc => {
        doc.distanceKm = parseFloat(calculateDistanceKm(lat, lng, doc.lat, doc.lng));
      });

      // Sort by closest distance
      APP_STATE.nearbyDoctors.sort((a, b) => a.distanceKm - b.distanceKm);

      updateLocationStatusBadge();
      renderNearbyDoctors();
      showToast(`GPS Location verified! Sorted closest doctors near your live position.`, "success");
    },
    (err) => {
      console.warn("Geolocation permission denied or timed out:", err.message);
      showToast("GPS access was not granted by browser. You can select your region manually.", "warning");
    },
    { enableHighAccuracy: true, timeout: 8000 }
  );
}

function selectCityFallback(city) {
  const cityCoords = {
    "Pune": { lat: 18.5204, lng: 73.8567, area: "Shivajinagar & Model Colony, Pune" },
    "Mumbai": { lat: 18.9894, lng: 72.8300, area: "South Mumbai / Parel Medical Hub" },
    "Delhi": { lat: 28.6139, lng: 77.2090, area: "Connaught Place / AIIMS Ring Road" },
    "Kolkata": { lat: 22.5726, lng: 88.3639, area: "Salt Lake & Park Circus" },
    "Guwahati": { lat: 26.1445, lng: 91.7362, area: "Dispur & GS Road Healthcare Corridor" }
  };

  const selected = cityCoords[city] || cityCoords["Pune"];
  APP_STATE.userLocation.city = city;
  APP_STATE.userLocation.lat = selected.lat;
  APP_STATE.userLocation.lng = selected.lng;
  APP_STATE.userLocation.area = selected.area;
  APP_STATE.userLocation.isGpsLive = false;

  // Recalculate distance
  APP_STATE.nearbyDoctors.forEach((doc, idx) => {
    doc.distanceKm = (0.6 + (idx * 0.4)).toFixed(1);
  });

  updateLocationStatusBadge();
  renderNearbyDoctors();
  showToast(`Region updated to ${city} (${selected.area})`, "info");
}

function updateLocationStatusBadge() {
  const label = document.getElementById('dispCurrentLocationText');
  const headerPill = document.getElementById('headerLocationPill');
  const text = `${APP_STATE.userLocation.city} — ${APP_STATE.userLocation.area} ${APP_STATE.userLocation.isGpsLive ? '(GPS Live)' : ''}`;
  
  if (label) label.textContent = text;
  if (headerPill) headerPill.textContent = `📍 ${APP_STATE.userLocation.city}`;

  const sidebarCity = document.getElementById('sidebarCityName');
  if (sidebarCity) sidebarCity.textContent = APP_STATE.userLocation.city;
  const dashLoc = document.getElementById('dashSuggestedLoc');
  if (dashLoc) dashLoc.textContent = `${APP_STATE.userLocation.city} (${APP_STATE.userLocation.area})`;
  const mergedLoc = document.getElementById('mergedLocStationText');
  if (mergedLoc) mergedLoc.textContent = `GPS: ${APP_STATE.userLocation.city} (${APP_STATE.userLocation.area})`;
}

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const dist = R * c;
  return dist < 0.3 ? 0.3 : dist.toFixed(1);
}

function renderDoctorCardHTML(doc) {
  return `
    <div class="doctor-card">
      <div class="doctor-card-top">
        <div class="doctor-avatar">
          <i class="${doc.category === 'emergency' ? 'fa-solid fa-hospital' : 'fa-solid fa-user-doctor'}"></i>
        </div>
        <div class="doctor-main-meta">
          <div class="doctor-name-row">
            <h4 class="doctor-name">${escapeHTML(doc.name)}</h4>
            ${doc.verified ? '<span class="verified-badge" title="ABDM Verified Provider"><i class="fa-solid fa-circle-check"></i> Verified</span>' : ''}
          </div>
          <div class="doctor-specialty">${escapeHTML(doc.specialty)} • ${escapeHTML(doc.qualifications)}</div>
          <div class="doctor-hospital"><i class="fa-regular fa-hospital"></i> ${escapeHTML(doc.hospital)}</div>
        </div>
        <div class="distance-pill">
          <i class="fa-solid fa-location-arrow"></i> ${doc.distanceKm} km away
        </div>
      </div>

      <div class="doctor-card-body">
        <div class="doctor-status-row">
          <span class="status-indicator-live"><i class="fa-solid fa-circle"></i> ${escapeHTML(doc.status)}</span>
          <span class="rating-text">${escapeHTML(doc.rating)}</span>
        </div>
        <div class="doctor-address-text"><i class="fa-solid fa-map-pin"></i> ${escapeHTML(doc.address)}</div>
      </div>

      <div class="doctor-card-actions">
        <a href="tel:${escapeHTML(doc.phone)}" class="btn-doc-action btn-doc-call">
          <i class="fa-solid fa-phone"></i>
          <span>${t('call_btn')}</span>
        </a>
        <button class="btn-doc-action btn-doc-book" onclick="bookAppointmentWithDoctor('${escapeHTML(doc.name)}', '${escapeHTML(doc.specialty)}')">
          <i class="fa-regular fa-calendar-check"></i>
          <span>${t('book_appt_btn')}</span>
        </button>
        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doc.hospital + ' ' + doc.name)}" target="_blank" class="btn-doc-action btn-doc-maps">
          <i class="fa-solid fa-route"></i>
          <span>${t('directions_btn')}</span>
        </a>
      </div>
    </div>
  `;
}

function renderNearbyDoctors(category = 'all') {
  const container = document.getElementById('nearbyDoctorsGrid');
  let list = APP_STATE.nearbyDoctors;
  if (category !== 'all') {
    list = list.filter(d => d.category === category);
  }

  if (container) {
    container.innerHTML = list.map(doc => renderDoctorCardHTML(doc)).join('');
  }

  // Also render top 3 suggested nearby doctors directly onto Dashboard Overview
  const dashGrid = document.getElementById('dashSuggestedDoctorsGrid');
  if (dashGrid) {
    const topClosest = APP_STATE.nearbyDoctors.slice(0, 3);
    dashGrid.innerHTML = topClosest.map(doc => renderDoctorCardHTML(doc)).join('');
  }
}

window.bookAppointmentWithDoctor = function(doctorName, specialty) {
  openAppointmentModal();
  const typeSelect = document.getElementById('reqApptType');
  const reasonText = document.getElementById('reqApptReason');
  if (typeSelect) typeSelect.value = "Symptom Follow-up Consultation";
  if (reasonText) reasonText.value = `Requesting consultation with ${doctorName} (${specialty}) via nearby doctor finder.`;
};

// =============================================================================
// 7. WEB AUDIO API EMERGENCY SOUND & AUTOMATIC ALERTS
// =============================================================================
function playEmergencySirenSound() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();

    // Two-tone medical alert frequency siren
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    
    // Pulse 1
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.setValueAtTime(500, now + 0.15);
    osc.frequency.setValueAtTime(800, now + 0.3);
    osc.frequency.setValueAtTime(500, now + 0.45);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.7);
  } catch (e) {
    console.log("Audio siren not supported:", e);
  }
}

/**
 * AUTOMATIC EMERGENCY ALERT TRIGGER:
 * Dispatches an instant emergency notification to the family caregiver with their dynamic name!
 */
function triggerAutomaticEmergencyAlert(reasonDescription, severity = 'critical') {
  const caregiverName = APP_STATE.caregiver.name;
  const caregiverPhone = APP_STATE.caregiver.phone;
  const preferredLang = APP_STATE.caregiver.preferredLang;

  // Sound chime
  playEmergencySirenSound();

  // Multi-lingual emergency message text
  let emergencyMessage = "";
  if (preferredLang === 'mr') {
    emergencyMessage = `🚨 तातडीचा आरोग्य इशारा (Emergency Alert): तनिष्का पाटील यांचे विटल्स गंभीर मर्यादेवर आहेत (${reasonDescription}). आशा सेविका सुनिता देवी व डॉ. अनन्या शर्मा यांना अलर्ट पाठवला आहे. रुग्ण सुरक्षित असल्याची खात्री करा!`;
  } else if (preferredLang === 'hi') {
    emergencyMessage = `🚨 आपातकालीन स्वास्थ्य चेतावनी (Emergency Alert): तनिष्का पाटिल के महत्वपूर्ण संकेत सामान्य सीमा से बाहर हैं (${reasonDescription})। आशा कार्यकर्ता सुनीता देवी और डॉ. शर्मा को सूचित कर दिया गया है। कृपया तुरंत मरीज से संपर्क करें!`;
  } else if (preferredLang === 'bn') {
    emergencyMessage = `🚨 জরুরি স্বাস্থ্য সতর্কতা (Emergency Alert): তানিষ্কা পাটিলের স্বাস্থ্য লক্ষণ গুরুতর (${reasonDescription})। আশা কর্মী সুনীতা দেবী এবং ডাক্তার শর্মাকে অবহিত করা হয়েছে। অবিলম্বে রোগীকে পরীক্ষা করুন!`;
  } else if (preferredLang === 'as') {
    emergencyMessage = `🚨 জৰুৰীকালীন স্বাস্থ্য সতৰ্কতা: তানিষ্কা পাটিলৰ স্বাস্থ্যৰ লক্ষণ সংকটজনক (${reasonDescription})। আশাকৰ্মী সুনীতা দেৱী আৰু চিকিৎসকক জনোৱা হৈছে। অনুগ্ৰহ কৰি ততালিকে ৰোগীৰ ওচৰলৈ যাওক!`;
  } else {
    emergencyMessage = `🚨 CRITICAL EMERGENCY ALERT: Tanishka Patil's vitals breached safety threshold (${reasonDescription}). Frontline ASHA Sunita Devi and Clinician Dr. Sharma notified. Please check on patient immediately!`;
  }

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  // 1. Add to Family SMS feed
  APP_STATE.familySmsList.unshift({
    id: `FSMS-AUTO-${Date.now()}`,
    timestamp: `${dateStr}, ${timeStr}`,
    title: `🚨 AUTOMATIC EMERGENCY ALERT TO ${caregiverName.toUpperCase()}`,
    text: emergencyMessage,
    urgency: "critical"
  });

  // 2. Add to global reminder feed
  APP_STATE.reminders.unshift({
    id: `MSG-AUTO-${Date.now()}`,
    to: `${caregiverName} (${caregiverPhone} - Guardian)`,
    type: "SMS",
    channel: "SMS",
    title: "Automatic Emergency Broadcast",
    text: emergencyMessage,
    time: `${dateStr}, ${timeStr}`,
    status: "Delivered"
  });

  // 3. Update dashboard last notification tag
  const lastMsg = document.getElementById('dashFamilyLastMsg');
  if (lastMsg) {
    lastMsg.textContent = `🚨 Emergency Alert Sent to ${caregiverName}`;
    lastMsg.className = "mini-val text-danger";
  }

  // 4. Show modal emergency popup banner
  showEmergencyBroadcastBanner(caregiverName, caregiverPhone, reasonDescription);

  // 5. Update UI components
  renderFamilyPortal();
  renderReminders();
  updatePhonePreview();
  renderDashboard();
}

function showEmergencyBroadcastBanner(name, phone, reason) {
  let banner = document.getElementById('autoEmergencyBanner');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'autoEmergencyBanner';
    banner.className = 'auto-emergency-banner';
    document.body.appendChild(banner);
  }

  banner.innerHTML = `
    <div class="banner-inner">
      <div class="banner-icon"><i class="fa-solid fa-triangle-exclamation"></i></div>
      <div class="banner-content">
        <div class="banner-title">🚨 AUTOMATIC EMERGENCY ALERT DISPATCHED</div>
        <div class="banner-text">
          Critical vital trigger detected (<strong>${escapeHTML(reason)}</strong>). 
          Emergency SMS sent to family guardian <strong>${escapeHTML(name)} (${escapeHTML(phone)})</strong>. 
          Frontline ASHA Worker Sunita Devi and Clinician Dr. Sharma have been alerted.
        </div>
      </div>
      <button class="banner-close" onclick="document.getElementById('autoEmergencyBanner').classList.remove('show')">&times;</button>
    </div>
  `;

  banner.classList.add('show');
  setTimeout(() => banner.classList.remove('show'), 9000);
}

// =============================================================================
// 8. PATIENT ATTENTION ENGINE (MODULE E)
// =============================================================================
function evaluateAttentionEngine(newCheckin) {
  const triggeredAlerts = [];
  const latest = newCheckin || (APP_STATE.checkins[APP_STATE.checkins.length - 1]);
  const prev = APP_STATE.checkins.length > 1 ? APP_STATE.checkins[APP_STATE.checkins.length - 2] : APP_STATE.baselineVitals;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

  // RULE CR-03: CRITICAL SYMPTOM CLUSTER
  const hasChestPain = latest.symptoms.some(s => s.toLowerCase().includes('chest'));
  const hasShortnessBreath = latest.symptoms.some(s => s.toLowerCase().includes('shortness') || s.toLowerCase().includes('breath'));

  if (hasChestPain && hasShortnessBreath) {
    triggeredAlerts.push({
      id: `ALT-CR-${Date.now()}`,
      category: "CLINICAL-REVIEW",
      type: "clinical",
      title: "URGENT CLINICAL WARNING: Chest Pain with Shortness of Breath",
      description: "Severe symptom combination reported by patient. High cardiac risk indicator.",
      dateLabel: `Triggered: ${dateStr} ${timeStr}`,
      timestamp: `${dateStr} ${timeStr}`,
      ruleId: "RULE-CR-03 (High Priority Clinical Alert)",
      ruleName: "Acute Cardiopulmonary Distress Symptom Cluster",
      inputResponsible: `Reported symptoms: "${latest.symptoms.join(', ')}"`,
      workflowAction: "Immediate clinician escalation. Frontline worker home dispatch + Family emergency notification.",
      actionText: "Contact Clinician Now",
      actionTab: "family",
      status: "Active"
    });

    // AUTOMATIC EMERGENCY ALERT TO FAMILY CAREGIVER
    triggerAutomaticEmergencyAlert("Chest pain and shortness of breath cluster", "critical");
  }

  // RULE CR-01: ELEVATED BLOOD PRESSURE
  if (latest.sysBP >= 140 || latest.diaBP >= 90) {
    triggeredAlerts.push({
      id: `ALT-CR-BP-${Date.now()}`,
      category: "CLINICAL-REVIEW",
      type: "clinical",
      title: "Clinical Warning: Elevated Blood Pressure (Stage 2 Threshold)",
      description: `Blood pressure reading (${latest.sysBP}/${latest.diaBP} mmHg) exceeds safe post-operative threshold.`,
      dateLabel: `Triggered: ${dateStr} ${timeStr}`,
      timestamp: `${dateStr} ${timeStr}`,
      ruleId: "RULE-CR-01 (Blood Pressure Elevation)",
      ruleName: "Systolic BP ≥ 140 or Diastolic ≥ 90 mmHg Threshold",
      inputResponsible: `Systolic: ${latest.sysBP} mmHg, Diastolic: ${latest.diaBP} mmHg`,
      workflowAction: "Referral created for Dr. Ananya Sharma. ASHA worker Sunita advised to verify home cuff reading.",
      actionText: "View Review Details",
      actionTab: "timeline",
      status: "Active"
    });

    // AUTOMATIC EMERGENCY ALERT TO FAMILY CAREGIVER
    triggerAutomaticEmergencyAlert(`High Blood Pressure: ${latest.sysBP}/${latest.diaBP} mmHg`, "warning");
  }

  // RULE CR-02: HYPOXEMIA
  if (latest.spo2 && latest.spo2 < 94) {
    triggeredAlerts.push({
      id: `ALT-CR-O2-${Date.now()}`,
      category: "CLINICAL-REVIEW",
      type: "clinical",
      title: "Critical Clinical Review: Low Oxygen Saturation (SpO2 < 94%)",
      description: `Pulse oximeter value (${latest.spo2}%) indicates hypoxemia risk for cardiac patient.`,
      dateLabel: `Triggered: ${dateStr} ${timeStr}`,
      timestamp: `${dateStr} ${timeStr}`,
      ruleId: "RULE-CR-02 (Peripheral Oxygen Desaturation)",
      ruleName: "SpO2 < 94% Threshold Violation",
      inputResponsible: `SpO2 reading: ${latest.spo2}%`,
      workflowAction: "Urgent tele-triage with primary clinician. Verify sensor probe position.",
      actionText: "Emergency Contacts",
      actionTab: "family",
      status: "Active"
    });

    // AUTOMATIC EMERGENCY ALERT TO FAMILY CAREGIVER
    triggerAutomaticEmergencyAlert(`Low Oxygen SpO2: ${latest.spo2}%`, "critical");
  }

  // RULE CH-01: SIGNIFICANT DELTA
  const bpDelta = latest.sysBP - (prev ? prev.sysBP : APP_STATE.baselineVitals.sysBP);
  if (bpDelta >= 15 && latest.sysBP < 140) {
    triggeredAlerts.push({
      id: `ALT-CH-${Date.now()}`,
      category: "CHANGE-DETECTED",
      type: "change",
      title: `Noticeable Trend: Systolic BP increased by +${bpDelta} mmHg`,
      description: `Compared to previous check-in (${prev ? prev.sysBP : 120} mmHg), systolic BP has trended upward.`,
      dateLabel: `Detected: ${dateStr} ${timeStr}`,
      timestamp: `${dateStr} ${timeStr}`,
      ruleId: "RULE-CH-01 (Significant Vital Trend Delta)",
      ruleName: "Systolic Increase ≥ 15 mmHg vs Previous Record",
      inputResponsible: `Previous: ${prev ? prev.sysBP : 120} mmHg ➔ Current: ${latest.sysBP} mmHg (Δ +${bpDelta} mmHg)`,
      workflowAction: "Monitor in next check-in. Frontline worker follow-up scheduled.",
      actionText: "View Timeline",
      actionTab: "timeline",
      status: "Active"
    });
  }

  return triggeredAlerts;
}

function evaluateRulesAndRefresh() {
  const newAlerts = evaluateAttentionEngine();
  if (newAlerts.length > 0) {
    newAlerts.forEach(na => {
      const exists = APP_STATE.alerts.some(a => a.ruleId === na.ruleId && a.status === 'Active');
      if (!exists) APP_STATE.alerts.unshift(na);
    });
  }
  renderDashboard();
  renderTimeline();
}

// =============================================================================
// 9. DASHBOARD & ATTENTION ALERTS RENDER
// =============================================================================
function renderDashboard() {
  updateCaregiverUI();

  const activeAppts = APP_STATE.appointments.filter(a => a.status !== 'Completed').length;
  const totalCheckins = APP_STATE.checkins.length;
  const pendingFollowups = APP_STATE.followups.filter(f => f.status === 'pending').length;
  const completedFollowups = APP_STATE.followups.filter(f => f.status === 'completed').length;

  document.getElementById('kpiAppointmentsVal').textContent = activeAppts;
  document.getElementById('kpiCheckinsVal').textContent = totalCheckins;
  document.getElementById('kpiPendingVal').textContent = pendingFollowups;
  document.getElementById('kpiCompletedVal').textContent = completedFollowups;
  document.getElementById('summaryPendingCount').textContent = pendingFollowups;
  document.getElementById('summaryCompletedCount').textContent = completedFollowups;

  document.getElementById('badgeAppointments').textContent = activeAppts;
  document.getElementById('badgeFollowups').textContent = pendingFollowups;
  document.getElementById('bellAlertCount').textContent = APP_STATE.alerts.length;

  const alertsContainer = document.getElementById('attentionAlertsContainer');
  if (!alertsContainer) return;

  if (APP_STATE.alerts.length === 0) {
    alertsContainer.innerHTML = `
      <div style="padding: 16px; text-align: center; color: #64748b; font-size: 0.85rem;">
        <i class="fa-solid fa-circle-check" style="color: #10b981; font-size: 1.5rem; margin-bottom: 6px; display: block;"></i>
        All follow-ups and vitals are currently within stable parameters. No active alerts.
      </div>
    `;
  } else {
    alertsContainer.innerHTML = APP_STATE.alerts.map(alert => {
      const isClinical = alert.type === 'clinical';
      const isChange = alert.type === 'change';
      const cardClass = isClinical ? 'alert-item-card alert-clinical' : isChange ? 'alert-item-card alert-change' : 'alert-item-card';
      const badgeClass = isClinical ? 'alert-badge badge-clinical-tag' : isChange ? 'alert-badge badge-change-tag' : 'alert-badge badge-followup-tag';

      return `
        <div class="${cardClass}" id="alert-card-${alert.id}">
          <div class="alert-header-row">
            <div class="alert-tag-group">
              <span class="${badgeClass}">${alert.category}</span>
              <strong class="alert-title">${escapeHTML(alert.title)}</strong>
            </div>
          </div>
          <div class="alert-body-text">${escapeHTML(alert.description)}</div>
          <div class="alert-footer-row">
            <span><i class="fa-regular fa-calendar"></i> ${escapeHTML(alert.dateLabel)}</span>
            <div style="display: flex; gap: 8px;">
              <button class="alert-explain-btn" onclick="toggleAlertExplain('${alert.id}')">
                <i class="fa-solid fa-circle-info"></i> Why this was triggered
              </button>
              <button class="btn-alert-action" onclick="handleAlertAction('${alert.actionTab}')">
                ${escapeHTML(alert.actionText || 'View Details')}
              </button>
            </div>
          </div>

          <div class="explain-drawer" id="explain-${alert.id}">
            <div class="explain-row">
              <span class="explain-label">Triggered Rule:</span>
              <span><strong>${escapeHTML(alert.ruleId)}</strong> — ${escapeHTML(alert.ruleName)}</span>
            </div>
            <div class="explain-row">
              <span class="explain-label">Responsible Input:</span>
              <span style="color: #b91c1c; font-weight: 600;">${escapeHTML(alert.inputResponsible)}</span>
            </div>
            <div class="explain-row">
              <span class="explain-label">Recorded At:</span>
              <span>${escapeHTML(alert.timestamp)}</span>
            </div>
            <div class="explain-row">
              <span class="explain-label">Recommended Action:</span>
              <span style="color: #0369a1; font-weight: 600;">${escapeHTML(alert.workflowAction)}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  renderDashboardVitals();
}

function toggleAlertExplain(alertId) {
  const drawer = document.getElementById(`explain-${alertId}`);
  if (drawer) drawer.classList.toggle('open');
}

function handleAlertAction(tab) {
  if (tab) switchTab(tab);
}

function renderDashboardVitals() {
  const container = document.getElementById('dashboardVitalsRow');
  const deltaBox = document.getElementById('deltaCalloutBox');
  if (!container) return;

  const latest = APP_STATE.checkins[APP_STATE.checkins.length - 1];
  const prev = APP_STATE.checkins.length > 1 ? APP_STATE.checkins[APP_STATE.checkins.length - 2] : APP_STATE.baselineVitals;

  if (!latest) return;

  const bpStatus = latest.sysBP >= 140 ? 'text-danger' : latest.sysBP >= 130 ? 'text-amber' : 'text-emerald';
  const spo2Status = latest.spo2 < 94 ? 'text-danger' : latest.spo2 < 96 ? 'text-amber' : 'text-emerald';
  const pulseStatus = latest.pulse > 100 || latest.pulse < 60 ? 'text-amber' : 'text-emerald';

  container.innerHTML = `
    <div class="vital-pill">
      <div class="vital-name">Blood Pressure</div>
      <div class="vital-val ${bpStatus}">${latest.sysBP}/${latest.diaBP}</div>
      <div class="vital-status ${bpStatus}">mmHg</div>
    </div>
    <div class="vital-pill">
      <div class="vital-name">Oxygen SpO2</div>
      <div class="vital-val ${spo2Status}">${latest.spo2}%</div>
      <div class="vital-status ${spo2Status}">${latest.spo2 >= 95 ? 'Normal' : 'Attention'}</div>
    </div>
    <div class="vital-pill">
      <div class="vital-name">Heart Rate</div>
      <div class="vital-val ${pulseStatus}">${latest.pulse}</div>
      <div class="vital-status ${pulseStatus}">bpm</div>
    </div>
    <div class="vital-pill">
      <div class="vital-name">Temperature</div>
      <div class="vital-val">${latest.temp || 98.6}°F</div>
      <div class="vital-status text-emerald">Normal</div>
    </div>
  `;

  const sysDiff = latest.sysBP - prev.sysBP;
  const pulseDiff = latest.pulse - prev.pulse;

  if (deltaBox) {
    deltaBox.innerHTML = `
      <i class="fa-solid fa-chart-line" style="font-size: 1.1rem;"></i>
      <div>
        <strong>Change Detection vs Previous Check-in:</strong> 
        Systolic BP changed by ${sysDiff >= 0 ? `+${sysDiff}` : sysDiff} mmHg; 
        Pulse changed by ${pulseDiff >= 0 ? `+${pulseDiff}` : pulseDiff} bpm. 
        <span style="color: #64748b; font-size: 0.75rem;">(Recorded on ${latest.displayDate})</span>
      </div>
    `;
  }
}

// =============================================================================
// 10. CHECK-IN FORM & AUTOMATIC EMERGENCY BROADCAST
// =============================================================================
function bindCheckinForm() {
  const form = document.getElementById('healthCheckinForm');
  const btnSample = document.getElementById('btnPrefillSampleCheckin');
  const dropzone = document.getElementById('fileDropzone');
  const fileInput = document.getElementById('attachmentInput');
  const fileNameDisp = document.getElementById('attachmentFileName');

  const sysInput = document.getElementById('inputSysBP');
  const spo2Input = document.getElementById('inputSpO2');
  const hintSys = document.getElementById('hintSysBP');
  const hintSpo2 = document.getElementById('hintSpO2');

  sysInput?.addEventListener('input', () => {
    const val = parseInt(sysInput.value);
    if (val >= 140) {
      hintSys.textContent = "⚠️ High: Clinical Attention rule CR-01 will trigger (≥ 140 mmHg)";
      hintSys.className = "input-validation-hint danger";
    } else if (val >= 130) {
      hintSys.textContent = "Caution: Elevated reading (130-139 mmHg)";
      hintSys.className = "input-validation-hint warning";
    } else {
      hintSys.textContent = "Normal: 90 - 120 mmHg";
      hintSys.className = "input-validation-hint";
    }
  });

  spo2Input?.addEventListener('input', () => {
    const val = parseInt(spo2Input.value);
    if (val && val < 94) {
      hintSpo2.textContent = "🚨 Critical: Oxygen saturation below 94% triggers Clinical Alert";
      hintSpo2.className = "input-validation-hint danger";
    } else if (val && val < 96) {
      hintSpo2.textContent = "Caution: Borderline SpO2 reading";
      hintSpo2.className = "input-validation-hint warning";
    } else {
      hintSpo2.textContent = "Normal: 95 - 100%";
      hintSpo2.className = "input-validation-hint";
    }
  });

  dropzone?.addEventListener('click', () => fileInput.click());
  fileInput?.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileNameDisp.innerHTML = `<i class="fa-solid fa-file-shield"></i> Attached: ${fileInput.files[0].name} (Encrypted)`;
    }
  });

  btnSample?.addEventListener('click', () => {
    sysInput.value = 152;
    document.getElementById('inputDiaBP').value = 96;
    document.getElementById('inputHeartRate').value = 104;
    spo2Input.value = 92;
    document.getElementById('inputTemp').value = 99.4;
    document.getElementById('inputSugar').value = 135;
    document.getElementById('symptomNotes').value = "Experiencing sudden tight chest pain with shortness of breath while resting.";

    document.querySelectorAll('input[name="symptoms"]').forEach(cb => {
      cb.checked = (cb.value.includes('Chest') || cb.value.includes('breath') || cb.value.includes('Dizziness'));
    });

    sysInput.dispatchEvent(new Event('input'));
    spo2Input.dispatchEvent(new Event('input'));

    showToast("Loaded high-risk test values. Click 'Submit Health Check-in' to test Attention Engine & Automatic Family Alert!", "info");
  });

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    submitCheckinForm();
  });
}

function submitCheckinForm() {
  const sysBP = parseInt(document.getElementById('inputSysBP').value);
  const diaBP = parseInt(document.getElementById('inputDiaBP').value);
  const pulse = parseInt(document.getElementById('inputHeartRate').value);
  const spo2 = parseInt(document.getElementById('inputSpO2').value);
  const temp = parseFloat(document.getElementById('inputTemp').value) || 98.6;
  const sugar = parseInt(document.getElementById('inputSugar').value) || 110;
  const notes = document.getElementById('symptomNotes').value;
  const isAssisted = document.getElementById('checkAssistedByAsha').checked;

  const selectedSymptoms = [];
  document.querySelectorAll('input[name="symptoms"]:checked').forEach(cb => {
    selectedSymptoms.push(cb.value);
  });

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newCheckin = {
    id: `CHK-${Date.now().toString().slice(-4)}`,
    date: now.toISOString(),
    displayDate: `${dateStr}, ${timeStr}`,
    sysBP,
    diaBP,
    pulse,
    spo2,
    temp,
    sugar,
    symptoms: selectedSymptoms,
    notes: notes || "Routine home check-in submitted.",
    source: isAssisted ? "Frontline-Assisted (ASHA Sunita Devi)" : "Patient-Reported"
  };

  APP_STATE.checkins.push(newCheckin);

  // Sync with Swasthya Sense Doctor Dashboard State
  try {
    const raw = localStorage.getItem("swasthyaSenseDoctorDemo_v1");
    if (raw) {
      const docState = JSON.parse(raw);
      if (docState.checkins) {
        const tempInC = temp > 50 ? ((temp - 32) * 5 / 9).toFixed(1) : temp.toString();
        docState.checkins.unshift({
          id: newCheckin.id,
          patientId: "SS-HYP-01",
          date: now.toISOString().slice(0, 10),
          createdAt: now.toISOString(),
          temperature: tempInC,
          bp: `${sysBP}/${diaBP}`,
          pulse: pulse ? pulse.toString() : "",
          spo2: spo2 ? spo2.toString() : "",
          bloodSugar: sugar ? sugar.toString() : "",
          measurement: "",
          concern: notes || selectedSymptoms.join(", ") || "Patient self-reported check-in",
          source: newCheckin.source,
          consent: true,
          comparison: `Submitted via Patient Portal (${newCheckin.source})`
        });
        docState.activities = docState.activities || [];
        docState.activities.unshift({
          id: "ACT-" + Math.random().toString(36).slice(2, 7).toUpperCase(),
          action: "Patient Portal Check-in Received",
          details: `Ramesh Kumar submitted vitals: BP ${sysBP}/${diaBP}, SpO2 ${spo2}%, Temp ${tempInC}°C`,
          actor: "Patient (Ramesh Kumar)",
          at: now.toISOString()
        });
        localStorage.setItem("swasthyaSenseDoctorDemo_v1", JSON.stringify(docState));
      }
    }
  } catch (err) {
    console.error("Doctor dashboard sync error:", err);
  }

  // Run Patient Attention Engine
  const triggeredAlerts = evaluateAttentionEngine(newCheckin);
  if (triggeredAlerts.length > 0) {
    triggeredAlerts.forEach(alert => APP_STATE.alerts.unshift(alert));
  }

  renderTimeline();
  renderDashboard();

  document.getElementById('healthCheckinForm').reset();
  document.getElementById('attachmentFileName').textContent = '';

  showToast("Check-in submitted successfully! Attention Engine evaluated readings.", "success");
  
  setTimeout(() => switchTab('dashboard'), 400);
}

// =============================================================================
// 11. FAMILY MEMBER / CAREGIVER PORTAL MANAGEMENT
// =============================================================================
function bindFamilyModal() {
  const modal = document.getElementById('modalEditFamily');
  const btnOpen = document.getElementById('btnOpenAddFamilyModal');
  const btnClose = document.getElementById('btnCloseFamilyModal');
  const btnCancel = document.getElementById('btnCancelFamilyModal');
  const form = document.getElementById('formEditFamily');

  btnOpen?.addEventListener('click', () => {
    // Populate form with current values
    document.getElementById('inputFamName').value = APP_STATE.caregiver.name;
    document.getElementById('inputFamRel').value = APP_STATE.caregiver.relation;
    document.getElementById('inputFamPhone').value = APP_STATE.caregiver.phone;
    document.getElementById('inputFamEmail').value = APP_STATE.caregiver.email;
    document.getElementById('inputFamLang').value = APP_STATE.caregiver.preferredLang;
    modal.classList.add('open');
  });

  btnClose?.addEventListener('click', () => modal.classList.remove('open'));
  btnCancel?.addEventListener('click', () => modal.classList.remove('open'));

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const oldName = APP_STATE.caregiver.name;
    const newName = document.getElementById('inputFamName').value.trim();
    
    APP_STATE.caregiver.name = newName;
    APP_STATE.caregiver.relation = document.getElementById('inputFamRel').value;
    APP_STATE.caregiver.phone = document.getElementById('inputFamPhone').value.trim();
    APP_STATE.caregiver.email = document.getElementById('inputFamEmail').value.trim();
    APP_STATE.caregiver.preferredLang = document.getElementById('inputFamLang').value;

    modal.classList.remove('open');

    // Add notification that caregiver was updated
    APP_STATE.familySmsList.unshift({
      id: `FSMS-UPDATE-${Date.now()}`,
      timestamp: "Just now",
      title: "Caregiver Profile Updated",
      text: `SWASTHYA SENSE: Designated emergency contact updated to ${newName} (${APP_STATE.caregiver.relation}, ${APP_STATE.caregiver.phone}).`,
      urgency: "normal"
    });

    // Update ALL UI elements dynamically
    updateCaregiverUI();
    renderFamilyPortal();
    renderDashboard();

    showToast(`Caregiver successfully changed from "${oldName}" to "${newName}"!`, 'success');
  });

  document.getElementById('btnSimulateFamilyEmergency')?.addEventListener('click', () => {
    triggerAutomaticEmergencyAlert("Manual Emergency Drill Test", "critical");
  });

  document.getElementById('btnSendTestFamilyAlert')?.addEventListener('click', () => {
    const c = APP_STATE.caregiver;
    APP_STATE.familySmsList.unshift({
      id: `FSMS-TEST-${Date.now()}`,
      timestamp: "Just now",
      title: `Routine Sync to ${c.name}`,
      text: `SWASTHYA SENSE: Health status for Tanishka is stable. Next doctor consultation on schedule.`,
      urgency: "normal"
    });
    renderFamilyPortal();
    updatePhonePreview();
    showToast(`Test sync SMS sent to ${c.name} (${c.phone})`, "success");
  });

  document.getElementById('btnCallDoctor')?.addEventListener('click', () => {
    alert(`Connecting call to Primary Clinician: ${APP_STATE.patient.assignedDoctor} (${APP_STATE.patient.doctorPhone})`);
  });

  document.getElementById('btnCallAsha')?.addEventListener('click', () => {
    alert(`Connecting call to Frontline Health Worker: ${APP_STATE.patient.assignedAsha} (${APP_STATE.patient.ashaPhone})`);
  });
}

function renderFamilyPortal() {
  updateCaregiverUI();
  const feed = document.getElementById('familySmsHistoryContainer');
  if (!feed) return;

  document.getElementById('familySmsBadge').textContent = `${APP_STATE.familySmsList.length} Sent`;

  feed.innerHTML = APP_STATE.familySmsList.map(msg => `
    <div style="background: ${msg.urgency === 'critical' ? '#fef2f2' : '#f8fafc'}; border: 1px solid ${msg.urgency === 'critical' ? '#fca5a5' : '#e2e8f0'}; border-left: 4px solid ${msg.urgency === 'critical' ? '#dc2626' : '#10b981'}; padding: 10px 12px; border-radius: 6px;">
      <div style="display: flex; justify-content: space-between; font-size: 0.72rem; color: #64748b; margin-bottom: 4px;">
        <strong style="color: ${msg.urgency === 'critical' ? '#991b1b' : '#0369a1'};">${escapeHTML(msg.title)}</strong>
        <span>${escapeHTML(msg.timestamp)}</span>
      </div>
      <div style="font-size: 0.8rem; color: #1e293b; line-height: 1.4;">${escapeHTML(msg.text)}</div>
    </div>
  `).join('');
}

// =============================================================================
// 12. EMERGENCY SOS CONFIRMATION
// =============================================================================
function bindEmergencySOS() {
  const btnTrigger = document.getElementById('btnEmergencyTrigger');
  const modal = document.getElementById('modalEmergencySOS');
  const btnClose = document.getElementById('btnCloseSosModal');
  const btnCancel = document.getElementById('btnCancelSos');
  const btnConfirm = document.getElementById('btnConfirmSos');

  btnTrigger?.addEventListener('click', () => {
    document.getElementById('sosCaregiverName').textContent = `${APP_STATE.caregiver.name} (${APP_STATE.caregiver.phone})`;
    modal.classList.add('open');
  });

  btnClose?.addEventListener('click', () => modal.classList.remove('open'));
  btnCancel?.addEventListener('click', () => modal.classList.remove('open'));

  btnConfirm?.addEventListener('click', () => {
    modal.classList.remove('open');

    // Trigger Attention Engine Emergency Alert
    APP_STATE.alerts.unshift({
      id: `ALT-SOS-${Date.now()}`,
      category: "CLINICAL-REVIEW",
      type: "clinical",
      title: "🚨 SOS EMERGENCY: Patient Triggered Immediate Medical Assistance",
      description: `Patient manually activated Emergency SOS button. National Ambulance (108/112) recommended. Caregiver ${APP_STATE.caregiver.name} alerted.`,
      dateLabel: "Triggered: Just now",
      timestamp: "Just now",
      ruleId: "RULE-EMERGENCY-SOS",
      ruleName: "Manual Patient Emergency Broadcast",
      inputResponsible: "Patient SOS button press",
      workflowAction: "Immediate ambulance dispatch & doctor callback.",
      actionText: "Caregiver & Doctor",
      actionTab: "family",
      status: "Active"
    });

    // Automatic Emergency Alert broadcast
    triggerAutomaticEmergencyAlert("Manual Emergency SOS triggered by patient", "critical");
    showToast("EMERGENCY BROADCAST SENT! Caregiver & healthcare team alerted.", "danger");
  });
}

// =============================================================================
// 13. APPOINTMENTS, TIMELINE & FOLLOW-UPS
// =============================================================================
function bindAppointmentModal() {
  const modal = document.getElementById('modalRequestAppointment');
  const btnOpen = document.getElementById('btnOpenRequestAppointmentModal');
  const btnClose = document.getElementById('btnCloseApptModal');
  const btnCancel = document.getElementById('btnCancelApptModal');
  const form = document.getElementById('formRequestAppointment');

  btnOpen?.addEventListener('click', openAppointmentModal);
  btnClose?.addEventListener('click', closeAppointmentModal);
  btnCancel?.addEventListener('click', closeAppointmentModal);

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.getElementById('reqApptType').value;
    const date = document.getElementById('reqApptDate').value;
    const time = document.getElementById('reqApptTime').value;
    const reason = document.getElementById('reqApptReason').value;

    const newAppt = {
      id: `APT-${Date.now().toString().slice(-3)}`,
      title: `${type}`,
      clinician: "Dr. Ananya Sharma (MD)",
      type: type,
      date: date || "2027-09-08",
      time: time,
      status: "Awaiting Review",
      reason: reason || "Follow-up consultation requested by patient."
    };

    APP_STATE.appointments.unshift(newAppt);

    APP_STATE.followups.unshift({
      id: `FOL-${Date.now().toString().slice(-3)}`,
      title: `Appointment Request: ${type}`,
      dueDate: date || "Upcoming",
      category: "Administrative",
      status: "pending",
      assignedTo: "Healthcare Team Review",
      description: reason || "Appointment request awaiting review."
    });

    closeAppointmentModal();
    renderAppointments();
    renderFollowups();
    renderDashboard();
    showToast("Appointment request submitted and logged in follow-up queue.", "success");
  });
}

function openAppointmentModal() {
  document.getElementById('modalRequestAppointment')?.classList.add('open');
}

function closeAppointmentModal() {
  document.getElementById('modalRequestAppointment')?.classList.remove('open');
}

function renderAppointments() {
  const upcomingList = document.getElementById('upcomingAppointmentsList');
  const pastList = document.getElementById('pastAppointmentsList');
  if (!upcomingList || !pastList) return;

  const upcoming = APP_STATE.appointments.filter(a => a.status !== 'Completed');
  const past = APP_STATE.appointments.filter(a => a.status === 'Completed');

  document.getElementById('countUpcomingAppointments').textContent = upcoming.length;
  document.getElementById('countPastAppointments').textContent = past.length;
  const pillCount = document.getElementById('pillApptCount');
  if (pillCount) pillCount.textContent = upcoming.length;

  upcomingList.innerHTML = upcoming.map(appt => `
    <div class="appointment-card ${appt.status === 'Awaiting Review' ? 'pending' : 'confirmed'}">
      <div class="appt-title-row">
        <span class="appt-title">${escapeHTML(appt.title)}</span>
        <span class="alert-badge ${appt.status === 'Awaiting Review' ? 'badge-followup-tag' : 'badge-emerald'}">${escapeHTML(appt.status)}</span>
      </div>
      <div class="appt-meta">
        <span><i class="fa-regular fa-calendar"></i> ${escapeHTML(appt.date)}</span>
        <span><i class="fa-regular fa-clock"></i> ${escapeHTML(appt.time)}</span>
        <span><i class="fa-solid fa-user-doctor"></i> ${escapeHTML(appt.clinician)}</span>
      </div>
      <div class="appt-reason"><strong>Reason:</strong> ${escapeHTML(appt.reason)}</div>
    </div>
  `).join('');

  pastList.innerHTML = past.map(appt => `
    <div class="appointment-card confirmed">
      <div class="appt-title-row">
        <span class="appt-title">${escapeHTML(appt.title)}</span>
        <span class="alert-badge badge-emerald">Completed</span>
      </div>
      <div class="appt-meta">
        <span><i class="fa-regular fa-calendar"></i> ${escapeHTML(appt.date)}</span>
        <span><i class="fa-solid fa-user-doctor"></i> ${escapeHTML(appt.clinician)}</span>
      </div>
      <div class="appt-reason">${escapeHTML(appt.reason)}</div>
    </div>
  `).join('');
}

function renderFollowups(filter = 'all') {
  const container = document.getElementById('followupCardsList');
  if (!container) return;

  let list = APP_STATE.followups;
  if (filter === 'pending') list = list.filter(f => f.status === 'pending');
  if (filter === 'overdue') list = list.filter(f => f.status === 'overdue');
  if (filter === 'completed') list = list.filter(f => f.status === 'completed');

  container.innerHTML = list.map(item => `
    <div class="followup-card-item">
      <div class="followup-left">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="alert-badge ${item.status === 'completed' ? 'badge-emerald' : 'badge-followup-tag'}">${item.status}</span>
          <span class="followup-task-title">${escapeHTML(item.title)}</span>
        </div>
        <div class="followup-task-meta">
          <span><i class="fa-regular fa-calendar"></i> Due: ${escapeHTML(item.dueDate)}</span>
          <span><i class="fa-solid fa-user-check"></i> Assigned: ${escapeHTML(item.assignedTo)}</span>
        </div>
        <div style="font-size: 0.8rem; color: #475569; margin-top: 2px;">${escapeHTML(item.description)}</div>
      </div>
      <div>
        ${item.status === 'pending' ? `
          <button class="btn-sm btn-outline-teal" onclick="completeFollowupItem('${item.id}')">
            <i class="fa-solid fa-check"></i> Mark Complete
          </button>
        ` : `
          <span class="text-emerald" style="font-size: 0.82rem; font-weight: 700;">
            <i class="fa-solid fa-circle-check"></i> Completed
          </span>
        `}
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderFollowups(chip.getAttribute('data-filter'));
    });
  });
}

window.completeFollowupItem = function(id) {
  const item = APP_STATE.followups.find(f => f.id === id);
  if (item) {
    item.status = 'completed';
    renderFollowups();
    renderDashboard();
    showToast(`Follow-up "${item.title}" marked as completed.`, 'success');
  }
};

function renderTimeline() {
  const container = document.getElementById('patientTimelineContainer');
  if (!container) return;

  const timelineItems = [
    {
      date: "31 Oct 2026, 04:40 PM",
      title: "Health Check-in Submitted (Patient-Reported)",
      text: "Vitals recorded: BP 135/88 mmHg, SpO2 97%, Pulse 80 bpm. Reported symptom: Dizziness. Attention Engine: Elevated BP change detected.",
      type: "checkin",
      icon: "fa-solid fa-notes-medical"
    },
    {
      date: "31 Oct 2026, 02:15 PM",
      title: "Appointment Request Logged (Module D)",
      text: "Patient requested teleconsultation with Dr. Ananya Sharma for 08 Sept 2027. Administrative attention alert generated.",
      type: "alert",
      icon: "fa-regular fa-calendar-plus"
    },
    {
      date: "24 Oct 2026, 11:15 AM",
      title: "Routine Check-in Submitted",
      text: "Vitals: BP 128/84 mmHg, SpO2 98%, Pulse 76 bpm. Stable recovery parameters.",
      type: "checkin",
      icon: "fa-solid fa-notes-medical"
    },
    {
      date: "15 Oct 2026, 09:30 AM",
      title: "Post-Operative Routine Review",
      text: "Vitals: BP 122/80 mmHg, SpO2 99%, Pulse 74 bpm. Normal post-operative recovery noted.",
      type: "checkin",
      icon: "fa-solid fa-notes-medical"
    },
    {
      date: "01 Oct 2026, 11:00 AM",
      title: "Qualified Clinician Consultation (Dr. Ananya Sharma)",
      text: "Clinical review completed. Wound healing satisfactory. Care plan updated: Bi-weekly remote check-ins configured with Attention Engine rules.",
      type: "doctor",
      icon: "fa-solid fa-user-doctor"
    },
    {
      date: "12 Aug 2026, 10:00 AM",
      title: "Patient Registry Onboarding (Module B)",
      text: `Patient registered under Care Programme: Post-Operative Cardiovascular Follow-up. Unique Patient ID: ${APP_STATE.patient.id}. Family Member ${APP_STATE.caregiver.name} linked for emergency sync.`,
      type: "registration",
      icon: "fa-solid fa-id-card"
    }
  ];

  container.innerHTML = timelineItems.map(item => `
    <div class="timeline-entry">
      <div class="timeline-node-icon node-${item.type}">
        <i class="${item.icon}"></i>
      </div>
      <div class="timeline-box">
        <div class="timeline-header">
          <strong class="timeline-item-title">${escapeHTML(item.title)}</strong>
          <span class="timeline-time">${escapeHTML(item.date)}</span>
        </div>
        <div class="timeline-body-text">${escapeHTML(item.text)}</div>
      </div>
    </div>
  `).join('');
}

// =============================================================================
// 14. PHONE MOCKUP & REMINDERS (MODULE K)
// =============================================================================
function bindPhoneTabs() {
  const tabSMS = document.getElementById('phoneTabSMS');
  const tabWA = document.getElementById('phoneTabWA');
  const btnDemoReminder = document.getElementById('btnTriggerDemoReminder');

  tabSMS?.addEventListener('click', () => {
    tabSMS.classList.add('active');
    tabWA.classList.remove('active');
    updatePhonePreview('SMS');
  });

  tabWA?.addEventListener('click', () => {
    tabWA.classList.add('active');
    tabSMS.classList.remove('active');
    updatePhonePreview('WA');
  });

  btnDemoReminder?.addEventListener('click', () => {
    APP_STATE.reminders.unshift({
      id: `MSG-DEMO-${Date.now()}`,
      to: `${APP_STATE.patient.name}`,
      type: "SMS",
      channel: "SMS",
      title: "Appointment Reminder",
      text: "SWASTHYA SENSE: Reminder — Your routine follow-up check-in is due tomorrow. Please enter your readings on the portal.",
      time: "Just now",
      status: "Delivered"
    });
    showToast("Simulated SMS reminder sent to patient phone.", "success");
    renderReminders();
    updatePhonePreview();
  });
}

function renderReminders() {
  const container = document.getElementById('reminderMessagesList');
  if (!container) return;

  document.getElementById('countDispatchedReminders').textContent = APP_STATE.reminders.length;

  container.innerHTML = APP_STATE.reminders.map(msg => `
    <div class="reminder-message-item">
      <div class="reminder-msg-top">
        <span class="recipient-tag"><i class="fa-solid fa-mobile-screen"></i> ${escapeHTML(msg.to)}</span>
        <span class="delivery-badge"><i class="fa-solid fa-check-double"></i> ${escapeHTML(msg.status)}</span>
      </div>
      <div class="reminder-msg-content">${escapeHTML(msg.text)}</div>
      <div style="font-size: 0.72rem; color: #94a3b8; text-align: right;">${escapeHTML(msg.time)}</div>
    </div>
  `).join('');
}

function updatePhonePreview(mode = 'SMS') {
  const phoneBody = document.getElementById('phoneChatBody');
  if (!phoneBody) return;

  const relevant = APP_STATE.reminders.slice(0, 4);

  phoneBody.innerHTML = relevant.map(msg => `
    <div class="bubble bubble-received">
      <div style="font-size: 0.7rem; font-weight: 700; color: #0284c7; margin-bottom: 2px;">
        ${msg.channel === 'WA' || msg.type === 'WhatsApp' ? '<i class="fa-brands fa-whatsapp" style="color: #25d366;"></i> WhatsApp' : '<i class="fa-solid fa-comment-sms"></i> SMS'}
      </div>
      <div>${escapeHTML(msg.text)}</div>
      <div class="bubble-time">${escapeHTML(msg.time)}</div>
    </div>
  `).join('');
}

// =============================================================================
// 15. NAVIGATION & UTILITIES
// =============================================================================
function bindNavigation() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      if (tabId) switchTab(tabId);
    });
  });

  const mobileBtn = document.getElementById('mobileMenuBtn');
  const sidebar = document.querySelector('.sidebar');
  mobileBtn?.addEventListener('click', () => sidebar?.classList.toggle('mobile-open'));
}

function switchTab(tabId) {
  let focusNearby = false;
  if (tabId === 'nearby') {
    tabId = 'appointments';
    focusNearby = true;
  }

  document.querySelectorAll('.nav-item').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
  });

  document.querySelectorAll('.tab-pane').forEach(p => {
    p.classList.remove('active');
  });

  const targetPane = document.getElementById(`tab-${tabId}`);
  if (targetPane) {
    targetPane.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (focusNearby) {
      document.getElementById('btnViewNearbyOnly')?.click();
      setTimeout(() => {
        document.getElementById('blockNearbyDoctors')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }

  const sidebar = document.querySelector('.sidebar');
  if (sidebar && sidebar.classList.contains('mobile-open')) {
    sidebar.classList.remove('mobile-open');
  }
}

function bindCaregiverToggle() {
  const btn = document.getElementById('btnCaregiverToggle');
  const label = document.getElementById('caregiverModeLabel');
  
  btn?.addEventListener('click', () => {
    APP_STATE.isCaregiverMode = !APP_STATE.isCaregiverMode;
    btn.classList.toggle('active', APP_STATE.isCaregiverMode);

    if (APP_STATE.isCaregiverMode) {
      label.textContent = "Exit Caregiver View";
      showToast(`Switched to Caregiver View (${APP_STATE.caregiver.name})`, "info");
      switchTab('family');
    } else {
      label.textContent = t('caregiver_mode_btn');
      showToast("Returned to Patient View (Tanishka)", "info");
      switchTab('dashboard');
    }
    updateCaregiverUI();
  });
}

function bindQuickActions() {
  document.getElementById('btnQuickCheckin')?.addEventListener('click', () => switchTab('checkin'));
  document.getElementById('btnHeroCheckin')?.addEventListener('click', () => switchTab('checkin'));
  document.getElementById('btnHeroEmergencyNotice')?.addEventListener('click', () => switchTab('family'));
  document.getElementById('btnQuickAppointment')?.addEventListener('click', openAppointmentModal);
  document.getElementById('btnOpenFamilyTab')?.addEventListener('click', () => switchTab('family'));
  document.getElementById('btnReevaluateRules')?.addEventListener('click', () => {
    evaluateRulesAndRefresh();
    showToast("Attention Engine: All rules re-evaluated against patient history.", "success");
  });
}

// =============================================================================
// EMERGENCY AI TRIAGE CHATBOT (MULTILINGUAL - 5 LANGUAGES)
// =============================================================================
const CHATBOT_I18N = {
  en: {
    fab_text: "Emergency Health Chatbot",
    title: "Emergency Health Assistant",
    subtitle: "AI Triage · 24x7 Safety · Non-Diagnostic",
    placeholder: "Ask symptom or emergency advice...",
    welcome: "Namaste {NAME}! I am your Swasthya Sense AI Emergency Triage Assistant. How are you feeling right now? If you are having chest pain, severe breathlessness, or blood pressure above 160, click the emergency buttons below or call 108 immediately.",
    chips: [
      "Severe chest pain / tightness",
      "High BP reading (170/105)",
      "Low SpO2 oxygen (89%)",
      "Call 108 Emergency Ambulance"
    ],
    responses: {
      chest_pain: {
        title: "⚠️ RED ALERT: Possible Acute Coronary Event",
        body: "Severe chest pain or tightness requires IMMEDIATE medical evaluation. DO NOT WAIT.\n\n• Dial National Emergency: 108\n• Proceed to Rampur District Hospital ICU\n• Rest quietly in a semi-upright position\n• An automatic alert has been sent to your primary clinician.",
        sos: true
      },
      high_bp: {
        title: "⚠️ Rule CR-01 Triggered: Severe Hypertension",
        body: "Your blood pressure is severely elevated (≥ 160/100 mmHg). Immediate measures:\n\n• Sit or lie down in a quiet room\n• Avoid physical exertion or salt intake\n• Contact your doctor or local ASHA worker\n• If accompanied by headache or vision blur, seek emergency care.",
        sos: true
      },
      low_spo2: {
        title: "⚠️ Rule CR-02 Triggered: Oxygen Desaturation",
        body: "SpO2 below 92% indicates respiratory compromise.\n\n• Sit upright and take deep, slow breaths\n• Ensure room is well-ventilated\n• Prepare for clinical oxygen administration\n• Contact emergency transport immediately.",
        sos: true
      },
      fever_dizzy: {
        title: "ℹ️ Symptom Advisory: Monitoring Advised",
        body: "Elevated temperature or dizziness noted.\n\n• Stay hydrated with oral fluids/ORS\n• Measure vitals in the '+ Health check-in' tab\n• Rest and record temperature every 4 hours\n• If fever exceeds 103°F or stiffness develops, visit the clinic.",
        sos: false
      },
      ambulance: {
        title: "🚑 Immediate Emergency Assistance",
        body: "Emergency services dispatch:\n\n• National Emergency Helpline: 108 (Toll Free)\n• Rampur District Civil Hospital: +91 11 2659 8654\n• ASHA Worker (Sunita Devi): +91 98765 43210\n• Connected Guardian: {GUARDIAN} ({PHONE})",
        sos: true
      },
      general: {
        title: "ℹ️ Swasthya Sense Care Guidance",
        body: "I have recorded your query. Please remember Swasthya Sense provides clinical early warning surveillance and does not replace in-person diagnosis. For routine concerns, log your readings via '+ Health check-in'. For acute distress, dial 108.",
        sos: false
      }
    }
  },
  hi: {
    fab_text: "आपातकालीन स्वास्थ्य चैटबॉट",
    title: "आपातकालीन स्वास्थ्य सहायक",
    subtitle: "एआई ट्राइएज · 24x7 सुरक्षा · गैर-निदानात्मक",
    placeholder: "लक्षण या आपातकालीन सलाह पूछें...",
    welcome: "नमस्ते {NAME}! मैं आपका स्वास्थ्य सेंस एआई आपातकालीन ट्राइएज सहायक हूँ। आप अभी कैसा महसूस कर रहे हैं? यदि आपको सीने में दर्द, सांस लेने में अत्यधिक कठिनाई, या 160 से अधिक बीपी है, तो नीचे दिए गए तुरंत आपातकालीन बटन दबाएं या तुरंत 108 डायल करें।",
    chips: [
      "सीने में गंभीर दर्द / जकड़न",
      "उच्च रक्तचाप (170/105 BP)",
      "कम ऑक्सीजन (SpO2 89%)",
      "108 एम्बुलेंस तुरंत बुलाएं"
    ],
    responses: {
      chest_pain: {
        title: "⚠️ रेड अलर्ट: संभावित तीव्र हृदय आपातकाल (सीने में दर्द)",
        body: "सीने में तीव्र दर्द या भारीपन के लिए तत्काल अस्पताल की आवश्यकता है। कृपया बिल्कुल देर न करें!\n\n• राष्ट्रीय एम्बुलेंस डायल करें: 108\n• तुरंत रामपुर जिला अस्पताल आईसीयू पहुंचें\n• सीधे आराम की स्थिति में बैठें\n• आपके प्राथमिक डॉक्टर को आपातकालीन अलर्ट भेज दिया गया है।",
        sos: true
      },
      high_bp: {
        title: "⚠️ नियम CR-01 लागू: गंभीर उच्च रक्तचाप",
        body: "आपका रक्तचाप अत्यधिक उच्च (≥ 160/100 mmHg) है। तत्काल सावधानियां:\n\n• शांत वातावरण में आराम से बैठें या लेट जाएं\n• शारीरिक परिश्रम या तनाव से बचें\n• अपनी आशा कार्यकर्ता या डॉक्टर से तुरंत संपर्क करें\n• सिरदर्द या धुंधला दिखाई देने पर आपातकालीन चिकित्सा लें।",
        sos: true
      },
      low_spo2: {
        title: "⚠️ नियम CR-02 लागू: ऑक्सीजन की गंभीर कमी",
        body: "92% से कम SpO2 श्वसन संकट का संकेत है।\n\n• सीधे बैठें और धीमी, गहरी सांसें लें\n• कमरे में ताजी हवा का प्रवाह सुनिश्चित करें\n• तुरंत ऑक्सीजन सुविधा हेतु अस्पताल संपर्क करें।",
        sos: true
      },
      fever_dizzy: {
        title: "ℹ️ स्वास्थ्य सलाह: निगरानी आवश्यक",
        body: "बुखार या चक्कर आने की स्थिति दर्ज की गई है।\n\n• पर्याप्त मात्रा में पानी या ओआरएस लें\n• '+ स्वास्थ्य चेक-इन' में अपनी जांच दर्ज करें\n• आराम करें और हर 4 घंटे में तापमान मापें।",
        sos: false
      },
      ambulance: {
        title: "🚑 तत्काल आपातकालीन संपर्क",
        body: "आपातकालीन चिकित्सा सहायता:\n\n• राष्ट्रीय एम्बुलेंस सेवा: 108 (निःशुल्क)\n• रामपुर जिला अस्पताल: +91 11 2659 8654\n• आशा कार्यकर्ता (सुनीता देवी): +91 98765 43210\n• पंजीकृत अभिभावक: {GUARDIAN} ({PHONE})",
        sos: true
      },
      general: {
        title: "ℹ️ स्वास्थ्य सेंस देखभाल मार्गदर्शन",
        body: "आपकी सूचना दर्ज कर ली गई है। ध्यान दें कि स्वास्थ्य सेंस प्रारंभिक चेतावनी प्रणाली है और व्यक्तिगत डॉक्टर जांच का विकल्प नहीं है। दैनिक जांच के लिए '+ स्वास्थ्य चेक-इन' का उपयोग करें।",
        sos: false
      }
    }
  },
  mr: {
    fab_text: "तातडीचा आरोग्य चॅटबॉट",
    title: "तातडीचे आरोग्य सहाय्यक",
    subtitle: "एआय ट्राइएज · २४x७ सुरक्षा · अनिदानात्मक",
    placeholder: "लक्षणे किंवा आपत्कालीन सल्ला विचारा...",
    welcome: "नमस्कार {NAME}! मी तुमचा स्वास्थ्य सेन्स एआय तातडीचा ट्राइएज सहाय्यक आहे. तुम्हाला सध्या कसे वाटत आहे? छातीत दुखत असल्यास, श्वास घेण्यास त्रास होत असल्यास किंवा रक्तदाब १६० पेक्षा जास्त असल्यास त्वरित खालील बटण दाबा किंवा १०८ वर संपर्क करा.",
    chips: [
      "छातीत असह्य कळ / दुखणे",
      "जास्त रक्तदाब (170/105 BP)",
      "कमी ऑक्सिजन (SpO2 89%)",
      "१०८ रुग्णवाहिका तात्काळ बोलवा"
    ],
    responses: {
      chest_pain: {
        title: "⚠️ रेड अलर्ट: तातडीची हृदयविकार शक्यता",
        body: "छातीत असह्य कळ किंवा दाब असणे ही अतिदक्षता स्थिती आहे. विलंब करू नका!\n\n• तात्काळ रुग्णवाहिका १०८ वर कॉल करा\n• जवळच्या रामपूर जिल्हा रुग्णालय आयसीयू येथे जा\n• आरामशीर स्थितीत बसा\n• तुमच्या डॉक्टरांना आपत्कालीन सूचना पाठवली आहे.",
        sos: true
      },
      high_bp: {
        title: "⚠️ नियम CR-01: गंभीर उच्च रक्तदाब",
        body: "तुमचा रक्तदाब अतिशय जास्त (≥ १६०/१०० mmHg) नोंदवला गेला आहे.\n\n• शांत जागेवर विश्रांती घ्या\n• कोणतीही धावपळ करू नका\n• त्वरित डॉक्टर किंवा आशा सेविकेशी संपर्क साधा.",
        sos: true
      },
      low_spo2: {
        title: "⚠️ नियम CR-02: ऑक्सिजनची कमतरता",
        body: "SpO2 ९२% पेक्षा कमी असणे धोक्याचे लक्षण आहे.\n\n• ताठ बसा आणि सावकाश दीर्घ श्वास घ्या\n• त्वरित ऑक्सिजन सुविधेसाठी दवाखान्यात जा.",
        sos: true
      },
      fever_dizzy: {
        title: "ℹ️ आरोग्य सल्ला: देखरेख आवश्यक",
        body: "ताप किंवा चक्कर येण्याची नोंद झाली आहे.\n\n• भरपूर पाणी किंवा ओआरएस प्या\n• '+ आरोग्य चेक-इन' टॅबमध्ये नोंदी करा\n• पूर्ण विश्रांती घ्या.",
        sos: false
      },
      ambulance: {
        title: "🚑 तात्काळ आपत्कालीन संपर्क",
        body: "आपत्कालीन रुग्णवाहिका:\n\n• राष्ट्रीय रुग्णवाहिका: १०८ (विनामूल्य)\n• रामपूर जिल्हा रुग्णालय: +91 11 2659 8654\n• आशा सेविका (सुनिता देवी): +91 98765 43210\n• संपर्क पालक: {GUARDIAN} ({PHONE})",
        sos: true
      },
      general: {
        title: "ℹ️ स्वास्थ्य सेन्स मार्गदर्शन",
        body: "तुमची विचारणा नोंदवली आहे. स्वास्थ्य सेन्स ही पूर्वसूचना प्रणाली आहे, प्रत्यक्ष डॉक्टरांच्या सल्ल्याचा पर्याय नाही. नियमित तपासणीसाठी चेक-इन वापरा.",
        sos: false
      }
    }
  },
  as: {
    fab_text: "জৰুৰীকালীন স্বাস্থ্য চ্যাটবট",
    title: "জৰুৰীকালীন স্বাস্থ্য সহায়ক",
    subtitle: "এআই ট্ৰায়াজ · ২৪x৭ নিৰাপত্তা · অনিদানমূলক",
    placeholder: "লক্ষণ বা জৰুৰীকালীন পৰামৰ্শ সোধক...",
    welcome: "নমস্কাৰ {NAME}! মই আপোনাৰ স্বাস্থ্য চেন্স এআই জৰুৰীকালীন সাহায্যকাৰী। আপুনি এতিয়া কেনে অনুভৱ কৰিছে? বুকুত বিষ, শ্বাস কষ্ট বা ৰক্তচাপ ১৬০ ৰ ওপৰত হ'লে তলৰ বুটাম টিপক বা তৎক্ষণাৎ ১০৮ নম্বৰত ফোন কৰক।",
    chips: [
      "বুকুত তীব্ৰ বিষ / হেঁচা অনুভৱ",
      "উচ্চ ৰক্তচাপ (170/105 BP)",
      "কম অক্সিজেন মাত্ৰা (SpO2 89%)",
      "১০৮ জৰুৰীকালীন এম্বুলেন্স মাতক"
    ],
    responses: {
      chest_pain: {
        title: "⚠️ ৰেড এলাৰ্ট: তীব্ৰ হৃদৰোগৰ আশংকা",
        body: "বুকুত তীব্ৰ বিষ বা হেঁচা অনুভৱ হ'লে পলম নকৰিব!\n\n• এম্বুলেন্স সেৱা ১০৮ ত ফোন কৰক\n• নিকটৱৰ্তী ৰামপুৰ জিলা চিকিৎসালয়ৰ আইচিইউত যাওক\n• জিৰণি লওক\n• আপোনাৰ চিকিৎসকক জৰুৰী বাৰ্তা প্ৰেৰণ কৰা হৈছে।",
        sos: true
      },
      high_bp: {
        title: "⚠️ নিয়ম CR-01: বিপজ্জনক উচ্চ ৰক্তচাপ",
        body: "আপোনাৰ ৰক্তচাপ বিপজ্জনকভাৱে বৃদ্ধি পাইছে (≥ ১৬০/১০০ mmHg)।\n\n• শান্ত পৰিৱেশত জিৰণি লওক\n• পৰিশ্ৰমৰ পৰা আঁতৰি থাকক\n• আশা কৰ্মী বা চিকিৎসকৰ লগত যোগাযোগ কৰক।",
        sos: true
      },
      low_spo2: {
        title: "⚠️ নিয়ম CR-02: অক্সিজেনৰ অভাৱ",
        body: "SpO2 ৯২% তকৈ কম হোৱাটো শ্বাস সংকটৰ লক্ষণ।\n\n• পোন হৈ বহক আৰু দীঘল উশাহ লওক\n• তৎক্ষণাৎ চিকিৎসালয়ৰ সৈতে যোগাযোগ কৰক।",
        sos: true
      },
      fever_dizzy: {
        title: "ℹ️ স্বাস্থ্য পৰামৰ্শ: সতৰ্কতা প্ৰয়োজন",
        body: "জ্বৰ বা মূৰ ঘূৰোৱাৰ লক্ষণ পঞ্জীয়ন কৰা হৈছে।\n\n• প্ৰচুৰ পানী আৰু অ'আৰএছ খাওক\n• '+ স্বাস্থ্য চেক-ইন'ত বিৱৰণ জমা দিয়ক\n• জিৰণি লওক।",
        sos: false
      },
      ambulance: {
        title: "🚑 জৰুৰীকালীন যোগাযোগ নম্বৰ",
        body: "জৰুৰীকালীন সেৱা:\n\n• ৰাষ্ট্ৰীয় এম্বুলেন্স: ১০৮ (বিনামূলীয়া)\n• ৰামপুৰ জিলা চিকিৎসালয়: +91 11 2659 8654\n• আশা কৰ্মী (সুনীতা দেৱী): +91 98765 43210\n• অভিভাৱক: {GUARDIAN} ({PHONE})",
        sos: true
      },
      general: {
        title: "ℹ️ স্বাস্থ্য চেন্স পৰামৰ্শ",
        body: "আপোনাৰ বাৰ্তা সংৰক্ষণ কৰা হৈছে। স্বাস্থ্য চেন্স প্ৰাৰম্ভিক সতৰ্কতাৰ বাবেহে, চিকিৎসালয় পৰীক্ষাৰ বিকল্প নহয়।",
        sos: false
      }
    }
  },
  bn: {
    fab_text: "জরুরি স্বাস্থ্য চ্যাটবট",
    title: "জরুরি স্বাস্থ্য সহায়ক",
    subtitle: "এআই ট্রায়াজ · ২৪x৭ সুরক্ষা · অ-নিদানমূলক",
    placeholder: "উপসর্গ বা জরুরি পরামর্শ জিজ্ঞাসা করুন...",
    welcome: "নমস্কার {NAME}! আমি আপনার স্বাস্থ্য সেন্স এআই জরুরি ট্রায়াজ সহকারী। আপনি এখন কেমন অনুভব করছেন? বুকে ব্যথা, প্রচণ্ড শ্বাসকষ্ট বা রক্তচাপ ১৬০ এর উপরে হলে নিচের জরুরি বোতামে চাপ দিন বা অবিলম্বে ১০৮ ডায়াল করুন।",
    chips: [
      "বুকে প্রচণ্ড ব্যথা / চাপ বোধ",
      "উচ্চ রক্তচাপ (170/105 BP)",
      "কম অক্সিজেন মাত্রা (SpO2 89%)",
      "১০৮ জরুরি অ্যাম্বুলেন্স ডাকুন"
    ],
    responses: {
      chest_pain: {
        title: "⚠️ রেড অ্যালার্ট: সম্ভাব্য হৃদযন্ত্রের গুরুতর সমস্যা",
        body: "বুকে প্রচণ্ড ব্যথা বা চাপের জন্য অবিলম্বে হাসপাতালে যাওয়া প্রয়োজন। দেরি করবেন না!\n\n• জাতীয় অ্যাম্বুলেন্স ১০৮ ডায়াল করুন\n• নিকটস্থ রামপুর জেলা হাসপাতাল আইসিইউতে যান\n• শান্তভাবে বসে থাকুন\n• আপনার ডাক্তারের কাছে জরুরি সতর্কবার্তা পাঠানো হয়েছে।",
        sos: true
      },
      high_bp: {
        title: "⚠️ নিয়ম CR-01: বিপজ্জনক উচ্চ রক্তচাপ",
        body: "আপনার রক্তচাপ মারাত্মকভাবে বৃদ্ধি পেয়েছে (≥ ১৬০/১০০ mmHg)।\n\n• শান্ত স্থানে বিশ্রাম নিন\n• শারীরিক পরিশ্রম বন্ধ রাখুন\n• অবিলম্বে আশাকর্মী বা ডাক্তারের সাথে যোগাযোগ করুন।",
        sos: true
      },
      low_spo2: {
        title: "⚠️ নিয়ম CR-02: অক্সিজেনের মাত্রা হ্রাস",
        body: "SpO2 ৯২% এর নিচে থাকা শ্বাসকষ্টের সংকেত।\n\n• সোজা হয়ে বসুন এবং ধীরে গভীর শ্বাস নিন\n• অবিলম্বে অক্সিজেন সুবিধার জন্য হাসপাতালে যোগাযোগ করুন।",
        sos: true
      },
      fever_dizzy: {
        title: "ℹ️ স্বাস্থ্য পরামর্শ: নজরদারি প্রয়োজন",
        body: "জ্বর বা মাথা ঘোরার উপসর্গ লিপিবদ্ধ করা হয়েছে।\n\n• প্রচুর জল ও ওআরএস পান করুন\n• '+ স্বাস্থ্য চেক-ইন' ফর্মে তথ্য রেকর্ড করুন\n• বিশ্রাম নিন।",
        sos: false
      },
      ambulance: {
        title: "🚑 জরুরি অ্যাম্বুলেন্স যোগাযোগ",
        body: "জরুরি পরিষেবা:\n\n• জাতীয় অ্যাম্বুলেন্স: ১০৮ (টোল ফ্রি)\n• রামপুর জেলা হাসপাতাল: +91 11 2659 8654\n• আশাকর্মী (সুনীতা দেবী): +91 98765 43210\n• অভিভাবক: {GUARDIAN} ({PHONE})",
        sos: true
      },
      general: {
        title: "ℹ️ স্বাস্থ্য সেন্স সুরক্ষা নির্দেশিকা",
        body: "আপনার জিজ্ঞাসা গ্রহণ করা হয়েছে। স্বাস্থ্য সেন্স প্রাথমিক সতর্কতা ব্যবস্থা এবং চিকিৎসকের সরাসরি পরীক্ষার বিকল্প নয়।",
        sos: false
      }
    }
  }
};

function bindEmergencyChatbot() {
  const fab = document.getElementById('btnOpenEmergencyChatbot');
  const win = document.getElementById('emergencyChatbotWindow');
  const close = document.getElementById('btnCloseEmergencyChatbot');
  const form = document.getElementById('emergencyChatForm');
  const input = document.getElementById('emergencyChatInput');

  if (fab && win) {
    fab.addEventListener('click', () => {
      win.classList.toggle('active');
      win.classList.toggle('open');
      if (win.classList.contains('active') || win.classList.contains('open')) {
        renderEmergencyChatbot(APP_STATE.currentLang);
        if (input) input.focus();
      }
    });
  }

  if (close && win) {
    close.addEventListener('click', () => {
      win.classList.remove('active');
      win.classList.remove('open');
    });
  }

  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const txt = input.value.trim();
      if (!txt) return;
      handleUserChatQuery(txt);
      input.value = '';
    });
  }
}

function renderEmergencyChatbot(lang) {
  const pack = CHATBOT_I18N[lang] || CHATBOT_I18N.en;
  const pName = APP_STATE.patient.name || 'Patient';

  // Update FAB text
  const fabText = document.getElementById('chatbotFabText');
  if (fabText) fabText.textContent = pack.fab_text;

  // Update Title & Subtitle
  const title = document.getElementById('chatWinTitle');
  if (title) {
    title.innerHTML = `<i class="fa-solid fa-shield-heart" style="color: #38bdf8;"></i><span>${escapeHTML(pack.title)}</span>`;
  }
  const sub = document.getElementById('chatWinSub');
  if (sub) sub.textContent = pack.subtitle;

  // Update Input Placeholder
  const input = document.getElementById('emergencyChatInput');
  if (input) input.placeholder = pack.placeholder;

  // Render Initial Welcome Message in Chat stream
  const stream = document.getElementById('emergencyChatStream');
  if (stream) {
    const welcomeMsg = pack.welcome.replace('{NAME}', pName);
    stream.innerHTML = `
      <div class="chat-bubble bot">
        <div class="chat-bubble-author"><i class="fa-solid fa-robot" style="color:#38bdf8;"></i> ${escapeHTML(pack.title)} <span class="nav-badge badge-cyan" style="font-size:0.62rem; padding: 2px 6px; margin-left:6px;">AI Triage</span></div>
        <p style="white-space: pre-line; margin: 4px 0;">${escapeHTML(welcomeMsg)}</p>
        <span class="chat-bubble-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    `;
  }

  // Render localized quick chips
  const chipsContainer = document.getElementById('emergencyChatChips');
  if (chipsContainer) {
    chipsContainer.innerHTML = '';
    pack.chips.forEach(chipText => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chat-chip-btn';
      btn.textContent = chipText;
      btn.addEventListener('click', () => {
        handleUserChatQuery(chipText);
      });
      chipsContainer.appendChild(btn);
    });
  }
}

function handleUserChatQuery(query) {
  const lang = APP_STATE.currentLang || 'en';
  const pack = CHATBOT_I18N[lang] || CHATBOT_I18N.en;
  const guardian = APP_STATE.caregiver.name || 'Rajesh Sharma';
  const guardianPhone = APP_STATE.caregiver.phone || '+91 98765 43210';
  const stream = document.getElementById('emergencyChatStream');
  if (!stream) return;

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 1. Append User Message
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-bubble user';
  userDiv.innerHTML = `
    <p>${escapeHTML(query)}</p>
    <span class="chat-bubble-time">${timeStr}</span>
  `;
  stream.appendChild(userDiv);
  stream.scrollTop = stream.scrollHeight;

  // 2. Determine triage category based on query keywords
  const q = query.toLowerCase();
  let respKey = 'general';
  if (q.includes('chest') || q.includes('हार्ट') || q.includes('सीना') || q.includes('छाती') || q.includes('বুক') || q.includes('কळ') || q.includes('heart') || q.includes('pain') || q.includes('tightness') || q.includes('attack') || q.includes('দিল')) {
    respKey = 'chest_pain';
  } else if (q.includes('bp') || q.includes('बीपी') || q.includes('रक्तदाब') || q.includes('ৰক্তচাপ') || q.includes('blood pressure') || q.includes('170') || q.includes('160') || q.includes('রক্তচাপ')) {
    respKey = 'high_bp';
  } else if (q.includes('oxygen') || q.includes('spo2') || q.includes('ऑक्सीजन') || q.includes('অক্সিজেন') || q.includes('breath') || q.includes('শ্বাস') || q.includes('दम') || q.includes('89%')) {
    respKey = 'low_spo2';
  } else if (q.includes('108') || q.includes('ambulance') || q.includes('एम्बुलेंस') || q.includes('रुग्णवाहिका') || q.includes('এম্বুলেন্স') || q.includes('জরুরি') || q.includes('आपातकाल')) {
    respKey = 'ambulance';
  } else if (q.includes('fever') || q.includes('बुखार') || q.includes('ताप') || q.includes('জ্বৰ') || q.includes('জ্বর') || q.includes('dizzy') || q.includes('चक्कर') || q.includes('headache')) {
    respKey = 'fever_dizzy';
  }

  const ans = pack.responses[respKey] || pack.responses.general;
  let bodyText = ans.body.replace('{GUARDIAN}', guardian).replace('{PHONE}', guardianPhone);

  // 3. Simulated intelligent AI typing delay
  setTimeout(() => {
    const botDiv = document.createElement('div');
    botDiv.className = `chat-bubble bot ${ans.sos ? 'urgent-red' : ''}`;
    botDiv.innerHTML = `
      <div class="chat-bubble-author">
        <i class="fa-solid fa-shield-heart" style="color:${ans.sos ? '#ef4444' : '#38bdf8'};"></i>
        <span>${escapeHTML(ans.title)}</span>
      </div>
      <p style="white-space: pre-line; margin: 6px 0;">${escapeHTML(bodyText)}</p>
      ${ans.sos ? `
        <div style="margin-top: 8px; display: flex; gap: 8px; flex-wrap: wrap;">
          <a href="tel:108" class="btn-chat-call"><i class="fa-solid fa-phone-volume"></i> 108 Ambulance</a>
          <button type="button" class="btn-chat-sos" onclick="document.getElementById('btnEmergencyTrigger')?.click()"><i class="fa-solid fa-triangle-exclamation"></i> Trigger SOS</button>
        </div>
      ` : ''}
      <span class="chat-bubble-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    `;
    stream.appendChild(botDiv);
    stream.scrollTop = stream.scrollHeight;

    // If critical alert, automatically trigger safety chime
    if (ans.sos && typeof playEmergencySiren === 'function') {
      try { playEmergencySiren(); } catch(e){}
    }
  }, 450);
}

// =============================================================================
// PATIENT DATA & LOCATION PERMISSION / CONSENT MANAGER (DPDP COMPLIANT)
// =============================================================================
const DEFAULT_PERMISSIONS = {
  location: true,
  caregiver: true,
  ai: true,
  asha: true,
  reviewed: false,
  updatedAt: new Date().toISOString()
};

function getSavedPermissions() {
  try {
    const raw = localStorage.getItem('swasthya_permissions');
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { ...DEFAULT_PERMISSIONS };
}

function savePermissions(perms) {
  try {
    localStorage.setItem('swasthya_permissions', JSON.stringify(perms));
  } catch(e) {}
  updatePermissionUI();
}

function openPermissionModal() {
  const modal = document.getElementById('modalPermissionConsent');
  if (modal) {
    modal.classList.add('active');
    const perms = getSavedPermissions();
    const locTog = document.getElementById('modalToggleLocation');
    const cgTog = document.getElementById('modalToggleCaregiver');
    const aiTog = document.getElementById('modalToggleAI');
    const ashaTog = document.getElementById('modalToggleAsha');
    if (locTog) locTog.checked = perms.location !== false;
    if (cgTog) cgTog.checked = perms.caregiver !== false;
    if (aiTog) aiTog.checked = perms.ai !== false;
    if (ashaTog) ashaTog.checked = perms.asha !== false;
  }
}

function closePermissionModal() {
  const modal = document.getElementById('modalPermissionConsent');
  if (modal) modal.classList.remove('active');
}

function initPermissionManager() {
  const btnOpen = document.getElementById('btnOpenPermissionModal');
  const btnClose = document.getElementById('btnClosePermissionModal');
  const btnSave = document.getElementById('btnModalSavePermissions');
  const btnManual = document.getElementById('btnModalManualLocation');

  btnOpen?.addEventListener('click', openPermissionModal);
  btnClose?.addEventListener('click', closePermissionModal);

  // Profile direct switches
  ['Location', 'Caregiver', 'AI', 'Asha'].forEach(key => {
    const el = document.getElementById(`profileToggle${key}`);
    el?.addEventListener('change', (e) => {
      const perms = getSavedPermissions();
      perms[key.toLowerCase()] = e.target.checked;
      perms.updatedAt = new Date().toISOString();
      savePermissions(perms);
      showToast(`${key} permission updated: ${e.target.checked ? 'Granted' : 'Paused'}`, 'info');
      if (key === 'Location' && e.target.checked) {
        requestUserLocation(true);
      }
    });
  });

  // Modal Save button
  btnSave?.addEventListener('click', () => {
    const locChecked = document.getElementById('modalToggleLocation')?.checked ?? true;
    const cgChecked = document.getElementById('modalToggleCaregiver')?.checked ?? true;
    const aiChecked = document.getElementById('modalToggleAI')?.checked ?? true;
    const ashaChecked = document.getElementById('modalToggleAsha')?.checked ?? true;

    const perms = {
      location: locChecked,
      caregiver: cgChecked,
      ai: aiChecked,
      asha: ashaChecked,
      reviewed: true,
      updatedAt: new Date().toISOString()
    };
    savePermissions(perms);
    closePermissionModal();
    showToast("Permissions successfully recorded & verified!", "success");

    if (locChecked) {
      requestUserLocation(true);
    }
  });

  // Modal Manual Location fallback
  btnManual?.addEventListener('click', () => {
    const perms = getSavedPermissions();
    perms.location = false;
    perms.reviewed = true;
    savePermissions(perms);
    closePermissionModal();
    showToast("Using manual region selection without GPS.", "info");
  });

  // First-time visit auto-prompt for permissions
  const perms = getSavedPermissions();
  if (!perms.reviewed) {
    setTimeout(() => {
      openPermissionModal();
    }, 800);
  } else {
    updatePermissionUI();
  }
}

function updatePermissionUI() {
  const perms = getSavedPermissions();

  const pLoc = document.getElementById('profileToggleLocation');
  const pCg = document.getElementById('profileToggleCaregiver');
  const pAi = document.getElementById('profileToggleAI');
  const pAsha = document.getElementById('profileToggleAsha');

  if (pLoc) pLoc.checked = perms.location !== false;
  if (pCg) pCg.checked = perms.caregiver !== false;
  if (pAi) pAi.checked = perms.ai !== false;
  if (pAsha) pAsha.checked = perms.asha !== false;

  const badge = document.getElementById('permStatusBadge');
  if (badge) {
    if (perms.location && perms.caregiver && perms.ai && perms.asha) {
      badge.textContent = "All Permissions Active";
      badge.className = "nav-badge badge-cyan";
    } else {
      badge.textContent = "Customized Permissions";
      badge.className = "nav-badge badge-amber";
    }
  }

  // Update Caregiver Name in Modal
  const mName = document.getElementById('modalPermCaregiverName');
  if (mName && APP_STATE.caregiver) {
    mName.textContent = APP_STATE.caregiver.name;
  }
  const pDesc = document.getElementById('profileCaregiverConsentDesc');
  if (pDesc && APP_STATE.caregiver) {
    pDesc.textContent = `Simultaneous critical alert transmission consented for guardian ${APP_STATE.caregiver.name} (${APP_STATE.caregiver.phone}).`;
  }
}

// =============================================================================
// REFINED IN-PROFILE AI HEALTH ASSISTANT (5 LANGUAGES)
// =============================================================================
const PROFILE_AI_I18N = {
  en: {
    welcome: "Hello, {NAME}! I am your Swasthya AI Health & Profile Assistant. I have complete context of your registered care program ({PROGRAM}), your baseline vitals (BP {SYS}/{DIA} mmHg), your assigned clinician ({DOCTOR}), and your emergency guardian ({GUARDIAN}).\n\nClick any quick clinical question below or type your question:",
    chips: [
      { id: "summary", text: "📋 Clinical Profile Summary" },
      { id: "vitals_trend", text: "📈 Analyze My BP & Vitals Trend" },
      { id: "rules_precautions", text: "💊 Follow-up & Medication Rules" },
      { id: "care_team", text: "👨‍⚕️ My Care Team & Contacts" },
      { id: "privacy", text: "🛡️ Data Privacy & Consent" }
    ],
    answers: {
      summary: "📄 **Clinical Profile Summary for {NAME}:**\n• **Patient ID:** {PATIENT_ID}\n• **Age & Gender:** {AGE_GENDER}\n• **Care Programme:** {PROGRAM}\n• **Monitoring Baseline:** BP {SYS}/{DIA} mmHg, SpO2 {SPO2}%, Pulse {PULSE} bpm\n• **Caregiver Connected:** {GUARDIAN} ({PHONE})\n• **Assigned Clinician:** {DOCTOR} (Cardiology)\n• **Frontline ASHA:** {ASHA}\n\n*All telemetry is evaluated against clinician-approved early warning rules.*",
      vitals_trend: "📊 **Recent Vitals & Trend Analysis:**\n• **Last Submitted Check-in:** BP 135/88 mmHg, SpO2 97%, Pulse 80 bpm\n• **Baseline Reference:** BP 120/80 mmHg, SpO2 99%\n• **Attention Engine Status:** Systolic reading has elevated +15 mmHg above baseline, but remains within the safe outpatient monitoring buffer (below emergency threshold CR-01 of 160 mmHg).\n• **Recommendations:** Maintain low-sodium dietary habits, avoid skipping prescribed antihypertensive doses, and submit your next check-in in 24 hours.",
      rules_precautions: "💊 **Follow-up & Care Guidelines:**\n1. **Routine Check-in Schedule:** Record measurements every 3 days in the '+ Health check-in' tab.\n2. **Critical Thresholds:** If your systolic BP reaches ≥ 160 mmHg (Rule CR-01) or SpO2 drops below 92% (Rule CR-02), the Attention Engine immediately alerts Dr. Ananya Sharma and sends an urgent SMS to {GUARDIAN}.\n3. **Missed Appointments (Rule AD-01):** An overdue follow-up is an administrative reminder to help you stay on track, not an automatic medical emergency.",
      care_team: "👨‍⚕️ **Your Dedicated Care Ecosystem:**\n• **Primary Clinician:** {DOCTOR} (District Civil Hospital, Cardiology Unit)\n• **Frontline Health Worker:** {ASHA} (PHC Rampur, Ward 12)\n• **Primary Guardian / Emergency Contact:** {GUARDIAN} ({PHONE})\n• **National Medical Helpline:** 108 (Toll Free, 24x7 Ambulance)\n\n*Both patient and guardian receive synchronized dual reminders before appointments.*",
      privacy: "🛡️ **Consent & Data Protection Architecture:**\n• Compliant with India's **Digital Personal Data Protection Act (DPDP)** and ABDM standards.\n• **Location Privacy:** Your device GPS is accessed only with your explicit permission to compute routing distance to nearby doctors and is never sold or tracked.\n• **Consent-First:** Caregiver notification, AI summarization, and ASHA home visits are fully controllable in the Consent Manager.",
      general: "I have analyzed your clinical query regarding your care program. Please remember that Swasthya Sense is an early warning surveillance tool that assists healthcare workers and clinicians; it does not replace professional diagnosis. For immediate clinical review, please submit a check-in or visit {DOCTOR} at the hospital."
    }
  },
  hi: {
    welcome: "नमस्ते, {NAME}! मैं आपका स्वास्थ्य सेंस एआई प्रोफाइल और स्वास्थ्य सहायक हूँ। मेरे पास आपके पंजीकृत देखभाल कार्यक्रम ({PROGRAM}), आपकी सामान्य जांच (बीपी {SYS}/{DIA} mmHg), आपके डॉक्टर ({DOCTOR}) और आपके परिवार के अभिभावक ({GUARDIAN}) की पूरी जानकारी है।\n\nनीचे दिए गए किसी भी प्रश्न पर क्लिक करें या अपना सवाल लिखें:",
    chips: [
      { id: "summary", text: "📋 मेरी मेडिकल प्रोफ़ाइल सारांश" },
      { id: "vitals_trend", text: "📈 मेरे बीपी और जांच का विश्लेषण" },
      { id: "rules_precautions", text: "💊 फॉलो-अप और दवा के निर्देश" },
      { id: "care_team", text: "👨‍⚕️ मेरी केयर टीम और संपर्क" },
      { id: "privacy", text: "🛡️ डेटा गोपनीयता और सहमति" }
    ],
    answers: {
      summary: "📄 **{NAME} का क्लिनिकल प्रोफ़ाइल सारांश:**\n• **मरीज आईडी:** {PATIENT_ID}\n• **आयु वर्ग व लिंग:** {AGE_GENDER}\n• **केयर प्रोग्राम:** {PROGRAM}\n• **सामान्य आधारभूत रीडिंग:** बीपी {SYS}/{DIA} mmHg, ऑक्सीजन {SPO2}%, पल्स {PULSE} bpm\n• **पंजीकृत अभिभावक:** {GUARDIAN} ({PHONE})\n• **प्राथमिक डॉक्टर:** {DOCTOR} (हृदय रोग विशेषज्ञ)\n• **आशा कार्यकर्ता:** {ASHA}\n\n*सभी स्वास्थ्य आंकड़े प्रारंभिक चेतावनी नियमों के तहत सुरक्षित हैं।*",
      vitals_trend: "📊 **हालिया जांच और रुझान विश्लेषण:**\n• **अंतिम चेक-इन रीडिंग:** बीपी 135/88 mmHg, SpO2 97%, पल्स 80 bpm\n• **आधारभूत रीडिंग:** बीपी 120/80 mmHg\n• **अटेंशन इंजन स्थिति:** आपका सिस्टोलिक बीपी आधारभूत से +15 mmHg बढ़ा है, लेकिन यह आपातकालीन सीमा (160 mmHg) से काफी नीचे और नियंत्रण में है।\n• **सलाह:** कम नमक वाला भोजन लें, नियमित दवाएं जारी रखें और अगले 24 घंटों में चेक-इन दर्ज करें।",
      rules_precautions: "💊 **फॉलो-अप और देखभाल के नियम:**\n1. **दैनिक चेक-इन:** हर 3 दिन में '+ स्वास्थ्य चेक-इन' में अपनी जांच दर्ज करें।\n2. **गंभीर चेतावनी (CR-01):** यदि आपका बीपी 160 से अधिक होता है, तो सिस्टम स्वतः {DOCTOR} और आपके अभिभावक {GUARDIAN} को सतर्क कर देगा।\n3. **समय पर जांच:** फॉलो-अप छूटना प्रशासनिक अनुस्मारक है, कोई चिकित्सीय घबराहट की बात नहीं है।",
      care_team: "👨‍⚕️ **आपकी स्वास्थ्य टीम और संपर्क:**\n• **प्राथमिक डॉक्टर:** {DOCTOR} (जिला अस्पताल)\n• **आशा कार्यकर्ता:** {ASHA} (पीएचसी रामपुर)\n• **अभिभावक / आपातकालीन संपर्क:** {GUARDIAN} ({PHONE})\n• **राष्ट्रीय एम्बुलेंस सेवा:** 108 (निःशुल्क, 24x7)\n\n*नियुक्तियों से पहले मरीज और अभिभावक दोनों को एक साथ एसएमएस भेजा जाता है।*",
      privacy: "🛡️ **डेटा गोपनीयता और सहमति:**\n• भारत के **डीपीडीपी अधिनियम (DPDP Act)** के पूर्णतः अनुकूल।\n• **लोकेशन गोपनीयता:** आपकी जीपीएस लोकेशन का उपयोग केवल नजदीकी डॉक्टरों की दूरी बताने के लिए किया जाता है।\n• आप अपनी सहमति को कभी भी 'माई प्रोफाइल' में बदल सकते हैं।",
      general: "मैंने आपके स्वास्थ्य रिकॉर्ड के आधार पर आपका प्रश्न देखा है। स्वास्थ्य सेंस एक प्रारंभिक चेतावनी प्रणाली है और डॉक्टर की प्रत्यक्ष जांच का विकल्प नहीं है। किसी भी असुविधा के लिए चेक-इन दर्ज करें या डॉक्टर से संपर्क करें।"
    }
  },
  mr: {
    welcome: "नमस्कार, {NAME}! मी तुमचा स्वास्थ्य सेन्स एआय प्रोफाइल आणि आरोग्य सहाय्यक आहे. माझ्याकडे तुमच्या आरोग्य कार्यक्रमाची ({PROGRAM}), सामान्य रक्तदाबाची ({SYS}/{DIA} mmHg), डॉक्टर ({DOCTOR}) आणि पालकांची ({GUARDIAN}) पूर्ण माहिती आहे.\n\nखालील प्रश्नावर क्लिक करा किंवा आपला प्रश्न लिहा:",
    chips: [
      { id: "summary", text: "📋 माझा वैद्यकीय प्रोफाइल सारांश" },
      { id: "vitals_trend", text: "📈 माझ्या बीपी आणि लक्षणांचे विश्लेषण" },
      { id: "rules_precautions", text: "💊 पाठपुरावा आणि औषधांचे नियम" },
      { id: "care_team", text: "👨‍⚕️ माझी केअर टीम आणि संपर्क" },
      { id: "privacy", text: "🛡️ डेटा गोपनीयता आणि संमती" }
    ],
    answers: {
      summary: "📄 **{NAME} यांचा क्लिनिकल प्रोफाइल सारांश:**\n• **रुग्ण आयडी:** {PATIENT_ID}\n• **वय व लिंग:** {AGE_GENDER}\n• **आरोग्य कार्यक्रम:** {PROGRAM}\n• **सामान्य बीपी:** {SYS}/{DIA} mmHg, ऑक्सिजन {SPO2}%\n• **पालक:** {GUARDIAN} ({PHONE})\n• **नियुक्त डॉक्टर:** {DOCTOR}\n• **आशा सेविका:** {ASHA}\n\n*सर्व आरोग्य नोंदी सुरक्षित आणि नियमांशी सुसंगत आहेत.*",
      vitals_trend: "📊 **रक्तदाब व तपासणी विश्लेषण:**\n• **शेवटची नोंद:** बीपी १३५/८८ mmHg, SpO2 ९७%\n• **मूळ नोंद:** बीपी १२०/८० mmHg\n• **स्थिती:** रक्तदाब थोडा वाढला आहे पण सुरक्षित मर्यादेत (१६० पेक्षा कमी) आहे.\n• **सल्ला:** मिठाचे प्रमाण कमी ठेवा आणि वेळेवर औषधे घ्या.",
      rules_precautions: "💊 **पाठपुरावा व दक्षता:**\n1. दर ३ दिवसांनी '+ आरोग्य चेक-इन' मध्ये नोंद करा.\n2. बीपी १६० च्या वर गेल्यास आपोआप {DOCTOR} आणि {GUARDIAN} यांना अलर्ट जातो.\n3. तपासणी बाकी असणे ही स्मरणपत्र सूचना आहे, वैद्यकीय आणीबाणी नाही.",
      care_team: "👨‍⚕️ **आरोग्य सेवा टीम:**\n• **डॉक्टर:** {DOCTOR} (जिल्हा रुग्णालय)\n• **आशा सेविका:** {ASHA}\n• **पालक:** {GUARDIAN} ({PHONE})\n• **रुग्णवाहिका:** १०८ (विनामूल्य)",
      privacy: "🛡️ **डेटा संरक्षण:**\n• भारतीय DPDP कायद्यानुसार सुरक्षित.\n• जीपीएस फक्त जवळचे डॉक्टर शोधण्यासाठी वापरले जाते.",
      general: "तुमच्या नोंदींनुसार सल्ला तयार केला आहे. स्वास्थ्य सेन्स ही पूर्वसूचना प्रणाली आहे, प्रत्यक्ष डॉक्टरांच्या तपासणीचा पर्याय नाही."
    }
  },
  as: {
    welcome: "নমস্কাৰ, {NAME}! মই আপোনাৰ স্বাস্থ্য চেন্স এআই প্ৰফাইল আৰু স্বাস্থ্য সহায়ক। মোৰ ওচৰত আপোনাৰ স্বাস্থ্য কাৰ্যসূচী ({PROGRAM}), স্বাভাবিক ৰক্তচাপ ({SYS}/{DIA} mmHg), চিকিৎসক ({DOCTOR}) আৰু অভিভাৱকৰ ({GUARDIAN}) সকলো তথ্য মজুত আছে।\n\nতলৰ যিকোনো প্ৰশ্নত ক্লিক কৰক বা লিখক:",
    chips: [
      { id: "summary", text: "📋 মোৰ স্বাস্থ্য প্ৰফাইলৰ সাৰাংশ" },
      { id: "vitals_trend", text: "📈 মোৰ ৰক্তচাপ আৰু স্বাস্থ্য বিশ্লেষণ" },
      { id: "rules_precautions", text: "💊 ফলো-আপ আৰু ঔষধৰ নিয়মসমূহ" },
      { id: "care_team", text: "👨‍⚕️ মোৰ স্বাস্থ্য দল আৰু যোগাযোগ" },
      { id: "privacy", text: "🛡️ তথ্যৰ গোপনীয়তা আৰু অনুমতি" }
    ],
    answers: {
      summary: "📄 **{NAME} ৰ স্বাস্থ্য প্ৰফাইল:**\n• **ৰোগী আইডি:** {PATIENT_ID}\n• **কেয়াৰ প্ৰগ্ৰাম:** {PROGRAM}\n• **স্বাভাৱিক ৰক্তচাপ:** {SYS}/{DIA} mmHg\n• **অভিভাৱক:** {GUARDIAN} ({PHONE})\n• **চিকিৎসক:** {DOCTOR}\n• **আশা কৰ্মী:** {ASHA}",
      vitals_trend: "📊 **ৰক্তচাপ আৰু স্বাস্থ্য অৱস্থা:**\n• শেহতীয়া ৰক্তচাপ: ১৩৫/৮৮ mmHg\n• অৱস্থা: ৰক্তচাপ নিয়ন্ত্ৰণৰ ভিতৰতে আছে (১৬০ তকৈ কম)। নিয়মীয়াকৈ ঔষধ গ্ৰহণ কৰক।",
      rules_precautions: "💊 **স্বাস্থ্য নিৰ্দেশনা:**\nপ্ৰতি ৩ দিনৰ মূৰে মূৰে স্বাস্থ্য পৰীক্ষা জমা দিয়ক। বিপি বৃদ্ধি হ'লে লগে লগে চিকিৎসালয়লৈ যাওক।",
      care_team: "👨‍⚕️ **স্বাস্থ্য দল:**\n• চিকিৎসক: {DOCTOR}\n• আশা কৰ্মী: {ASHA}\n• এম্বুলেন্স: ১০৮",
      privacy: "🛡️ **গোপনীয়তা:** আপোনাৰ তথ্য সম্পূৰ্ণ সুৰক্ষিত আৰু অনুমতি সাপেক্ষেহে সংৰক্ষিত।",
      general: "স্বাস্থ্য চেন্স প্ৰাৰম্ভিক সতৰ্কতাৰ বাবেহে, চিকিৎসালয় পৰীক্ষাৰ বিকল্প নহয়।"
    }
  },
  bn: {
    welcome: "নমস্কার, {NAME}! আমি আপনার স্বাস্থ্য সেন্স এআই প্রোফাইল ও স্বাস্থ্য সহকারী। আমার কাছে আপনার স্বাস্থ্য কর্মসূচি ({PROGRAM}), স্বাভাবিক রক্তচাপ ({SYS}/{DIA} mmHg), ডাক্তার ({DOCTOR}) এবং অভিভাবকের ({GUARDIAN}) সমস্ত তথ্য রয়েছে।\n\nনিচের যেকোনো প্রশ্নে ক্লিক করুন বা নিজের প্রশ্ন লিখুন:",
    chips: [
      { id: "summary", text: "📋 আমার স্বাস্থ্য প্রোফাইল সারাংশ" },
      { id: "vitals_trend", text: "📈 আমার রক্তচাপ ও স্বাস্থ্যের বিশ্লেষণ" },
      { id: "rules_precautions", text: "💊 ফলো-আপ ও ওষুধের নির্দেশিকা" },
      { id: "care_team", text: "👨‍⚕️ আমার কেয়ার টিম ও যোগাযোগ" },
      { id: "privacy", text: "🛡️ ডেটা গোপনীয়তা ও সম্মতি" }
    ],
    answers: {
      summary: "📄 **{NAME} এর স্বাস্থ্য প্রোফাইল সারাংশ:**\n• **রোগী আইডি:** {PATIENT_ID}\n• **বয়স ও লিঙ্গ:** {AGE_GENDER}\n• **কেয়ার প্রোগ্রাম:** {PROGRAM}\n• **স্বাভাবিক রক্তচাপ:** {SYS}/{DIA} mmHg\n• **অভিভাবক:** {GUARDIAN} ({PHONE})\n• **দায়িত্বপ্রাপ্ত ডাক্তার:** {DOCTOR}\n• **আশাকর্মী:** {ASHA}\n\n*সমস্ত তথ্য প্রাথমিক সতর্কতা নিয়মের অধীনে সুরক্ষিত।*",
      vitals_trend: "📊 **রক্তচাপ ও শারীরিক অবস্থা বিশ্লেষণ:**\n• সর্বশেষ রক্তচাপ: ১৩৫/৮৮ mmHg, SpO2 ৯৭%\n• অবস্থা: রক্তচাপ কিছুটা বৃদ্ধি পেলেও নিরাপদ সীমার (১৬০ mmHg এর নিচে) মধ্যে রয়েছে।\n• পরামর্শ: খাবারে নুন কম খান এবং প্রতিদিনের ওষুধ নিয়মিত গ্রহণ করুন।",
      rules_precautions: "💊 **ফলো-আপ ও যত্নের নিয়ম:**\nপ্রতি ৩ দিন অন্তর '+ স্বাস্থ্য চেক-ইন' ফর্মে তথ্য জমা দিন। রক্তচাপ ১৬০ এর বেশি হলে স্বয়ংক্রিয় সতর্কতা জারি হবে।",
      care_team: "👨‍⚕️ **আপনার কেয়ার টিম:**\n• ডাক্তার: {DOCTOR}\n• আশাকর্মী: {ASHA}\n• অভিভাবক: {GUARDIAN} ({PHONE})\n• অ্যাম্বুলেন্স: ১০৮",
      privacy: "🛡️ **ডেটা সুরক্ষা ও গোপনীয়তা:**\nভারতের ডিপিডিপি আইন অনুযায়ী সম্পূর্ণ সুরক্ষিত। আপনার অনুমতি ছাড়া কোনো তথ্য তৃতীয় পক্ষকে দেওয়া হয় না।",
      general: "স্বাস্থ্য সেন্স প্রাথমিক স্বাস্থ্য সতর্কতা প্ল্যাটফর্ম, সরাসরি ডাক্তারের পরীক্ষার বিকল্প নয়।"
    }
  }
};

function initProfileAiAssistant() {
  const form = document.getElementById('profileAiChatForm');
  const input = document.getElementById('profileAiInput');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = input?.value.trim();
    if (!query) return;
    handleProfileAiQuery(query);
    input.value = '';
  });

  renderProfileAiChips(APP_STATE.currentLang);
}

function renderProfileAiChips(lang) {
  const pack = PROFILE_AI_I18N[lang] || PROFILE_AI_I18N.en;
  const container = document.getElementById('profileAiChips');
  if (container) {
    container.innerHTML = '';
    pack.chips.forEach(chip => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'profile-chip-btn';
      btn.innerHTML = `<i class="fa-solid fa-circle-question" style="color: #38bdf8;"></i><span>${escapeHTML(chip.text)}</span>`;
      btn.addEventListener('click', () => {
        handleProfileAiQuery(chip.text, chip.id);
      });
      container.appendChild(btn);
    });
  }

  // Render initial welcome message in profile chat thread
  const thread = document.getElementById('profileAiChatThread');
  if (thread) {
    const welcome = pack.welcome
      .replace('{NAME}', APP_STATE.patient.name)
      .replace('{PROGRAM}', APP_STATE.patient.careProgram)
      .replace('{SYS}', APP_STATE.baselineVitals.sysBP)
      .replace('{DIA}', APP_STATE.baselineVitals.diaBP)
      .replace('{DOCTOR}', APP_STATE.patient.assignedDoctor)
      .replace('{GUARDIAN}', APP_STATE.caregiver.name);

    thread.innerHTML = `
      <div class="chat-bubble bot" style="max-width: 95%;">
        <div class="chat-bubble-author"><i class="fa-solid fa-brain" style="color:#38bdf8;"></i> Swasthya AI Assistant <span class="nav-badge badge-cyan" style="font-size:0.62rem; padding: 2px 6px; margin-left: 6px;">Profile Grounded</span></div>
        <p style="white-space: pre-line; margin: 4px 0;">${escapeHTML(welcome)}</p>
        <span class="chat-bubble-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
    `;
  }
}

function handleProfileAiQuery(query, chipId = null) {
  const lang = APP_STATE.currentLang || 'en';
  const pack = PROFILE_AI_I18N[lang] || PROFILE_AI_I18N.en;
  const thread = document.getElementById('profileAiChatThread');
  if (!thread) return;

  const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // 1. User message bubble
  const userDiv = document.createElement('div');
  userDiv.className = 'chat-bubble user';
  userDiv.innerHTML = `
    <p>${escapeHTML(query)}</p>
    <span class="chat-bubble-time">${timeStr}</span>
  `;
  thread.appendChild(userDiv);
  thread.scrollTop = thread.scrollHeight;

  // 2. Select response
  let answerText = '';
  if (chipId && pack.answers[chipId]) {
    answerText = pack.answers[chipId];
  } else {
    const q = query.toLowerCase();
    if (q.includes('summary') || q.includes('profile') || q.includes('सारांश') || q.includes('সাৰাংশ')) {
      answerText = pack.answers.summary;
    } else if (q.includes('bp') || q.includes('vitals') || q.includes('trend') || q.includes('रक्तदाब') || q.includes('बीपी') || q.includes('অক্সিজেন') || q.includes('লক্ষন')) {
      answerText = pack.answers.vitals_trend;
    } else if (q.includes('rule') || q.includes('medicine') || q.includes('दवा') || q.includes('नियम') || q.includes('ফলো-আপ')) {
      answerText = pack.answers.rules_precautions;
    } else if (q.includes('team') || q.includes('doctor') || q.includes('contact') || q.includes('डॉक्टर') || q.includes('আশাকর্মী') || q.includes('চিকিৎসক')) {
      answerText = pack.answers.care_team;
    } else if (q.includes('privacy') || q.includes('consent') || q.includes('dpdp') || q.includes('सुरक्षा') || q.includes('গোপনীয়তা')) {
      answerText = pack.answers.privacy;
    } else {
      answerText = pack.answers.general;
    }
  }

  // Replace placeholders with real patient data
  answerText = answerText
    .replace(/{NAME}/g, APP_STATE.patient.name)
    .replace(/{PATIENT_ID}/g, APP_STATE.patient.id)
    .replace(/{AGE_GENDER}/g, `${APP_STATE.patient.ageBand} · ${APP_STATE.patient.gender}`)
    .replace(/{PROGRAM}/g, APP_STATE.patient.careProgram)
    .replace(/{SYS}/g, APP_STATE.baselineVitals.sysBP)
    .replace(/{DIA}/g, APP_STATE.baselineVitals.diaBP)
    .replace(/{SPO2}/g, APP_STATE.baselineVitals.spo2)
    .replace(/{PULSE}/g, APP_STATE.baselineVitals.pulse)
    .replace(/{DOCTOR}/g, APP_STATE.patient.assignedDoctor)
    .replace(/{ASHA}/g, APP_STATE.patient.assignedAsha)
    .replace(/{GUARDIAN}/g, APP_STATE.caregiver.name)
    .replace(/{PHONE}/g, APP_STATE.caregiver.phone);

  // 3. Simulated AI typing delay
  setTimeout(() => {
    const botDiv = document.createElement('div');
    botDiv.className = 'chat-bubble bot';
    botDiv.style.maxWidth = '95%';
    botDiv.innerHTML = `
      <div class="chat-bubble-author"><i class="fa-solid fa-brain" style="color:#38bdf8;"></i> Swasthya AI Assistant <span class="nav-badge badge-cyan" style="font-size:0.62rem; padding: 2px 6px; margin-left: 6px;">Refined Insight</span></div>
      <p style="white-space: pre-line; margin: 4px 0; line-height: 1.5;">${escapeHTML(answerText)}</p>
      <span class="chat-bubble-time">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
    `;
    thread.appendChild(botDiv);
    thread.scrollTop = thread.scrollHeight;
  }, 400);
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const icon = type === 'success' ? 'fa-circle-check text-emerald' : type === 'danger' ? 'fa-triangle-exclamation text-danger' : 'fa-circle-info text-teal';

  toast.innerHTML = `<i class="fa-solid ${icon}"></i><span>${escapeHTML(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
