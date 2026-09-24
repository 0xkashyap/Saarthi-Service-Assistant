# Saarthi

Saarthi is a mobile-first, non-governmental prototype for helping people find an appropriate public service from a plain-English problem statement. It uses only a local mock dataset and fictional records.

### [Click here](https://saarthi-service-assistant.netlify.app) to try out the tool or scroll below to install it locally.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints (normally `http://localhost:5173`). To create a production bundle, run `npm run build`. Run checks with `npm test`.

## Supported demo queries

- `I lost my Aadhaar card` → retrieve a mock e-Aadhaar
- `How can I check my PF balance?` → mock EPFO passbook
- `I need to renew my driving licence` → mock renewal journey
- `I want to apply for a birth certificate` → mock certificate request
- `My ration card needs an update` → mock household update

The local service guide includes more than 45 representative services. It covers the core Saarthi journeys plus UMANG-directory-inspired categories such as rail and metro travel, eCourts and Tele-Law, eSanjeevani and e-RaktKosh, DIKSHA and Academic Bank of Credits, farmer services, LPG/telecom utilities, consumer support, GST, pensions, PMAY, and public grievances. Unknown requests lead to transparent clarification and life-event browsing.

## What is mocked

All personal details, UANs, licence numbers, documents, OTP (`246810`), reference numbers, uploads, and status updates are synthetic and stay in the browser session. No authentication, API, payment, network request, or real government record is used.

A real implementation would need consented integrations with the relevant official portals, secure identity verification, state-specific eligibility/rules, authoritative status and document handling, multilingual content review, accessibility testing, and privacy/security controls.
