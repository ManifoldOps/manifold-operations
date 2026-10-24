# Manifold Operations — Website

The official website for **Manifold Operations** (https://manifoldoperations.vercel.app), founded by **Piyusha Akash** ([0x3xp](https://0x3xp.github.io)).

Specialized offensive security tooling, red team operations, payload development, reverse engineering, and original vulnerability research (**CVE-2026-115449**).

---

## 🚀 Features & Sections

- **Modern Cyber Aesthetic**: Custom dark theme with signature red accents (`#c80000`), glowing indicators, and monospace typography (`Space Grotesk` & `JetBrains Mono`).
- **Original Vulnerability Disclosure (CVE-2026-115449)**:
  - Discovered in `libslirp` (freedesktop.org / QEMU hypervisor networking stack).
  - Official acknowledgement by Red Hat Product Security (`RHBZ#2558916`).
  - CVSS v3.1 metrics (3.5 Low), technical root cause, and code diff viewer.
  - Direct links to Red Hat Advisory, NIST NVD, CVE.org, GitHub Advisory, Tenable, Rapid7, and GitLab fix.
- **7 Upstream Merged Patches**:
  - Detailed catalog of all 7 upstream security, memory safety, and protocol patches authored by Piyusha Akash merged into `libslirp`.
- **Proprietary Projects & Tooling**:
  - **Lethe**: Windows kernel-mode research & red team tool (KTIMER/KDPC/IO_WORKITEM, WDK, BYOVD).
  - **Artemis**: Syscall forge framework & research toolkit (x86-64 MASM, SSN resolution, direct/indirect syscalls).
  - **Native Adversary Framework**: Low-level Windows offensive research & SetupAPI redirection.
  - **SENTINEX**: Modular Windows reconnaissance framework written in C.
  - **WinSec**: Windows security learning archive & knowledge base.
  - **Linux ExploitDev**: Practical x64 exploit development guide.
- **Enterprise Services**:
  - Offensive Security Tooling (OST), Advanced Payload Development, Reverse Engineering, Red Team Operations, Wazuh SIEM, and EDR/XDR Integration.
- **Contact Channels**:
  - Direct links for Email (`manifoldoperations@gmail.com`), WhatsApp (`@manifoldoperations`), X/Twitter (`@manifoldops`), GitHub, and LinkedIn.

---

## 📁 Project Structure

```
~/manifoldoperations/
├── index.html               # Main landing page
├── cve-2026-115449.html     # Dedicated CVE-2026-115449 technical advisory
├── projects.html            # Research & offensive tooling directory
├── contributions.html       # Upstream libslirp patches & advisories
├── vercel.json              # Vercel configuration (clean URLs, security headers)
├── .gitignore               # Git ignore rules
├── assets/
│   ├── css/
│   │   └── style.css        # Responsive CSS design system
│   ├── js/
│   │   └── main.js          # Interactive scripts (filters, copy diff, nav)
│   └── logo.png             # Official high-res Manifold Operations emblem
└── raw_sources/             # Preserved raw fetched files for reference
```

---

## ⚡ Deployment on Vercel

This project is 100% static and zero-dependency, optimized for Vercel out-of-the-box:

### Method 1: Using Vercel CLI
```bash
cd ~/manifoldoperations
vercel
```

### Method 2: Via GitHub / Git Repository
1. Push this directory to your GitHub repository (e.g. `ManifoldOps/website` or `manifoldoperations`):
   ```bash
   cd ~/manifoldoperations
   git init
   git add .
   git commit -m "feat: complete website overhaul with personal projects and CVE-2026-115449"
   git branch -M main
   git remote add origin https://github.com/ManifoldOps/<repo-name>.git
   git push -u origin main
   ```
2. Import the repository into your [Vercel Dashboard](https://vercel.com).
3. Deploy! Vercel automatically deploys with zero build steps required and honors `vercel.json` clean URLs.
