# NurseLink Demo — Employment Screening Workflow

A lightweight employment-screening web app that demonstrates a real-world hiring workflow for nurses and healthcare staff.

This demo was built as a fast prototype for a client-style brief: collect applicant details, move them through a structured multi-step form, and present a clean review/submit experience. It’s intentionally focused on **business logic, form flow, and clarity**, not heavy UI design.

---

## 🧩 What This Demonstrates

**For clients / recruiters reviewing my work, this app shows:**

- **Multi-step form logic**  
  Applicants move through a sequence of steps instead of one long wall of fields.

- **Field validation & error handling**  
  Required fields, basic validation, and clear feedback for the user.

- **Conditional flows**  
  Certain questions and sections can appear or be emphasized based on context (e.g., experience, availability, or license type).

- **Clean component structure**  
  React components are organized for readability and reuse (form sections, buttons, layout).

- **Business workflow thinking**  
  This is built to feel like a real hiring flow — not just a toy form — and can be adapted for HR, clinics, onboarding, or other intake use cases.

---

## 🛠 Tech Stack

- **React + Vite** – fast dev environment and modern tooling  
- **JavaScript (ES modules)**  
- **Tailwind CSS** – utility-first styling for quick, consistent UI  
- **Vite dev server & build pipeline**

No backend is included in this demo; it’s focused on front-end workflow and UX. In a client project, this could be wired up to:

- a REST or GraphQL API  
- Firebase / Supabase  
- an internal HR system  
- an automation platform (Make/Zapier/etc.)

---

## 🚶‍♀️ User Flow Overview

1. **Landing / Intro** – brief explanation of the application process.  
2. **Personal Information** – name, contact, basic identifiers.  
3. **Professional Details** – licenses, specialties, years of experience.  
4. **Availability & Preferences** – shifts, locations, or contract preferences.  
5. **Review & Confirm** – summary of entered data before submission.

This mirrors a typical small-clinic or staffing-agency intake workflow.

---

## 📂 Project Structure (High Level)

bash
nurselink-demo/
├─ public             # Static assets
├─ src/
│  ├─ components/   # Reusable UI pieces (form sections, buttons, layout)
│  ├─ screens/      # Page-level components / steps (if applicable)
│  ├─ App.jsx       # Main app and routing/flow logic
│  └─ main.jsx      # React entry point
├─ index.html       # Root HTML template
├─ package.json     # Scripts & dependencies
└─ tailwind.config.js

Note: Folder names may vary slightly depending on refactors, but the overall structure is designed for clarity and easy extension.
💻 Running the Project Locally
You’ll need Node.js (LTS) installed.
# Install dependencies
npm install

# Start the dev server
npm run dev
Then open the local URL shown in your terminal (usually http://localhost:5173/).

🤝 How This Could Be Extended
In a full production build, this demo could be extended to:
Persist applications to a backend database
Send confirmation emails to applicants
Route new applications into an HR dashboard or pipeline
Integrate AI to summarize candidate profiles or flag missing info
Export PDFs of applications for offline review
The core value here is the workflow design — the rest can be wired up based on a client’s stack and tools.


---

## 📸 Screenshots

### NurseLink Prototype Overview

![NurseLink Prototype Overview](./public/screenshots/main-dashboard.png)

This screenshot shows the core workflow elements:
- Nurse profile setup  
- Job alerts with instant-apply buttons  
- Employer dashboard preview  

---

## 👋 About the Developer

Hi, I’m Amie — an American developer based in Paraguay. I specialize in:

- AI-powered workflows  
- clean, maintainable frontends  
- real-world business process automation  

This project is part of a curated portfolio of small, focused demos that showcase the kind of systems I love building for clients: practical, human-centered, and easy to extend.

