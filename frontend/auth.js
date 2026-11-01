/**
 * SWASTHYA SENSE - Authentication & Role Management Controller
 * Handles user login, registration, role selection, session persistence,
 * and quick-switch demo accounts.
 */

document.addEventListener("DOMContentLoaded", function () {
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const goLogin = document.getElementById("goLogin");
  const goSignup = document.getElementById("goSignup");
  const patientFields = document.getElementById("patientFields");
  const doctorFields = document.getElementById("doctorFields");
  const signupMsg = document.getElementById("signupMessage");
  const loginMsg = document.getElementById("loginMessage");

  // Tab switching
  function showLogin() {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    if (loginMsg) loginMsg.style.display = "none";
  }

  function showSignup() {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    if (signupMsg) signupMsg.style.display = "none";
  }

  if (loginTab) loginTab.addEventListener("click", showLogin);
  if (signupTab) signupTab.addEventListener("click", showSignup);
  if (goLogin) goLogin.addEventListener("click", (e) => { e.preventDefault(); showLogin(); });
  if (goSignup) goSignup.addEventListener("click", (e) => { e.preventDefault(); showSignup(); });

  // Signup role cards toggle
  const signupRoleCards = document.querySelectorAll("#signupForm .role-card");
  signupRoleCards.forEach((card) => {
    card.addEventListener("click", function () {
      signupRoleCards.forEach((c) => {
        c.classList.remove("selected");
        c.setAttribute("aria-pressed", "false");
        const radio = c.querySelector("input[type=radio]");
        if (radio) radio.checked = false;
      });
      card.classList.add("selected");
      card.setAttribute("aria-pressed", "true");
      const radio = card.querySelector("input[type=radio]");
      if (radio) radio.checked = true;

      const role = card.dataset.role;
      if (role === "doctor") {
        if (doctorFields) doctorFields.classList.remove("hidden");
        if (patientFields) patientFields.classList.add("hidden");
      } else {
        if (doctorFields) doctorFields.classList.add("hidden");
        if (patientFields) patientFields.classList.remove("hidden");
      }
    });
  });

  // Login role cards toggle
  const loginRoleCards = document.querySelectorAll("#loginForm .role-card");
  loginRoleCards.forEach((card) => {
    card.addEventListener("click", function () {
      loginRoleCards.forEach((c) => {
        c.classList.remove("selected");
        c.setAttribute("aria-pressed", "false");
      });
      card.classList.add("selected");
      card.setAttribute("aria-pressed", "true");
    });
  });

  // Eye icon password toggle
  document.querySelectorAll(".eye-icon").forEach((icon) => {
    icon.addEventListener("click", function () {
      const targetId = icon.dataset.target;
      const targetInput = document.getElementById(targetId);
      if (targetInput) {
        if (targetInput.type === "password") {
          targetInput.type = "text";
          icon.classList.remove("fa-eye");
          icon.classList.add("fa-eye-slash");
        } else {
          targetInput.type = "password";
          icon.classList.remove("fa-eye-slash");
          icon.classList.add("fa-eye");
        }
      }
    });
  });

  // Helper to show message
  function showMsg(el, text, isError = true) {
    if (!el) return;
    el.textContent = text;
    el.className = isError ? "message error" : "message success";
    el.style.display = "block";
  }

  // Handle Login submission
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;
      const selectedRoleCard = document.querySelector("#loginForm .role-card.selected");
      const role = selectedRoleCard ? selectedRoleCard.dataset.loginRole : "doctor";

      if (!email || !password) {
        showMsg(loginMsg, "Please enter your email and password.");
        return;
      }

      showMsg(loginMsg, "Signing in...", false);

      setTimeout(() => {
        if (role === "patient") {
          const patientUser = {
            name: email.split("@")[0],
            email: email,
            role: "patient",
            patientId: "SS-DEMO-01",
            loggedInAt: new Date().toISOString()
          };
          localStorage.setItem("patientProfile", JSON.stringify(patientUser));
          localStorage.setItem("activeUserRole", "patient");
          window.location.href = "patient-dashboard.html";
        } else {
          const doctorUser = {
            full_name: email.toLowerCase().includes("sharma") ? "Dr. Ananya Sharma" : "Dr. " + (email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1)),
            email: email,
            role: "clinician",
            facility: "District Civil Hospital",
            loggedInAt: new Date().toISOString()
          };
          localStorage.setItem("doctorProfile", JSON.stringify(doctorUser));
          localStorage.setItem("activeUserRole", "clinician");
          window.location.href = "doctor-dashboard.html";
        }
      }, 500);
    });
  }

  // Handle Signup submission
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const pass = document.getElementById("signupPassword").value;
      const confirmPass = document.getElementById("confirmPassword").value;
      const terms = document.getElementById("terms").checked;

      const selectedRoleCard = document.querySelector("#signupForm .role-card.selected");
      const role = selectedRoleCard ? selectedRoleCard.dataset.role : "patient";

      if (!terms) {
        showMsg(signupMsg, "Please agree to the Terms of Service.");
        return;
      }

      if (pass !== confirmPass) {
        showMsg(signupMsg, "Passwords do not match.");
        return;
      }

      if (pass.length < 8) {
        showMsg(signupMsg, "Password must be at least 8 characters.");
        return;
      }

      showMsg(signupMsg, "Account created successfully! Redirecting...", false);

      setTimeout(() => {
        if (role === "doctor") {
          const profType = document.getElementById("professionalType")?.value || "doctor";
          const hospital = document.getElementById("hospital")?.value || "General Hospital";
          const license = document.getElementById("license")?.value || "MCI-DEMO-2026";
          const newDoc = {
            full_name: fullName.startsWith("Dr.") ? fullName : "Dr. " + fullName,
            email: email,
            phone: phone,
            professionalType: profType,
            hospital: hospital,
            license: license,
            role: profType === "hospital_admin" ? "admin" : (profType === "nurse" ? "healthcare_worker" : "clinician"),
            registeredAt: new Date().toISOString()
          };
          localStorage.setItem("doctorProfile", JSON.stringify(newDoc));
          localStorage.setItem("activeUserRole", newDoc.role);
          window.location.href = "doctor-dashboard.html";
        } else {
          const dob = document.getElementById("dob")?.value || "1995-01-01";
          const gender = document.getElementById("gender")?.value || "Prefer not to say";
          const newPatient = {
            name: fullName,
            email: email,
            phone: phone,
            dob: dob,
            gender: gender,
            role: "patient",
            registeredAt: new Date().toISOString()
          };
          localStorage.setItem("patientProfile", JSON.stringify(newPatient));
          localStorage.setItem("activeUserRole", "patient");
          window.location.href = "patient-dashboard.html";
        }
      }, 700);
    });
  }

  // Quick 1-Click Demo Logins
  window.demoLogin = function (roleType) {
    if (roleType === "clinician") {
      const doc = {
        full_name: "Dr. Ananya Sharma",
        email: "ananya.sharma@hospital.org",
        role: "clinician",
        specialty: "General Medicine & Cardiology",
        facility: "District Civil Hospital, Triage Ward",
        id: "DOC-ANANYA-01"
      };
      localStorage.setItem("doctorProfile", JSON.stringify(doc));
      localStorage.setItem("activeUserRole", "clinician");
      window.location.href = "doctor-dashboard.html";
    } else if (roleType === "healthcare_worker") {
      const worker = {
        full_name: "Sunita Devi (ASHA)",
        email: "sunita.devi@asha.health.gov.in",
        role: "healthcare_worker",
        facility: "Sub-Centre Rampur, Sector 4",
        id: "HW-SUNITA-04"
      };
      localStorage.setItem("doctorProfile", JSON.stringify(worker));
      localStorage.setItem("activeUserRole", "healthcare_worker");
      window.location.href = "doctor-dashboard.html";
    } else if (roleType === "admin") {
      const admin = {
        full_name: "Rajesh Patel",
        email: "admin@swasthya-sense.gov.in",
        role: "admin",
        facility: "Swasthya Sense Central Ops",
        id: "ADM-RAJESH-99"
      };
      localStorage.setItem("doctorProfile", JSON.stringify(admin));
      localStorage.setItem("activeUserRole", "admin");
      window.location.href = "doctor-dashboard.html";
    } else if (roleType === "patient") {
      const patient = {
        name: "Ramesh Kumar",
        email: "ramesh.kumar@example.com",
        role: "patient",
        patientId: "SS-HYP-01",
        age: 58,
        category: "Chronic"
      };
      localStorage.setItem("patientProfile", JSON.stringify(patient));
      localStorage.setItem("activeUserRole", "patient");
      window.location.href = "patient-dashboard.html";
    }
  };
});
