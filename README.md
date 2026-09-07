# TalentBridge — US IT Staffing Portfolio

A modern, static consultant portfolio designed for GitHub Pages.

## Important privacy rule
Do **not** publish resumes, personal phone numbers, personal email addresses, DOBs, passport/visa scans, I-94s, SSNs, home addresses, or other sensitive candidate information in a public GitHub repository.

Only publish information you have permission to market publicly. Keep detailed resumes and sensitive documents in your private staffing system.

## Structure
- `index.html` — portfolio home, About section, searchable talent pool
- `candidate.html` — individual consultant profile
- `data/candidates.js` — candidate data
- `assets/styles.css` — design
- `assets/app.js` — search/filter logic

## GitHub Pages
1. Create a repository, e.g. `yourname.github.io` for a personal site.
2. Upload these files.
3. In **Settings → Pages**, configure deployment from the repository/branch.
4. Open the published GitHub Pages URL.
5. Optional: connect a custom domain such as `www.yourdomain.com`.

## Customization
Replace:
- `Your Name`
- email and LinkedIn URL
- About text
- metrics
- sample candidates in `data/candidates.js`

For each real candidate, use a stable `id`, professional summary, skills, certifications, location, work authorization category, and availability.

For a production version, I recommend moving candidate data into a controlled/private system and publishing only an approved marketing subset.


## New in this version
- Split-screen home: your portfolio on the left, talent slideshow on the right.
- Auto-rotating consultant cards with next/previous controls and dots.
- Add Candidate form.
- Submitted candidates are marked Pending Review and do not appear on the public board until approved.
- Browser-based approval demo using localStorage.

### Production approval
Because GitHub Pages is a static hosting service, the browser-only approval demo is **not a secure shared admin workflow**. For a real deployment, use a private admin backend (for example Supabase/Firebase/Cloudflare Workers) with authentication and a database. Public pages should query only approved profiles. Never put admin credentials or API secrets in frontend JavaScript.


## How to add a new consultant (manual owner-controlled method)

This version intentionally has **no public Add Candidate form and no public approval workflow**. You control the talent board from the GitHub repository.

1. Open `data/candidates.js`.
2. Copy one existing candidate object.
3. Change the `id`, initials, name, title, location, authorization, status, skills, certifications, summary and experience.
4. Commit the change to GitHub.
5. GitHub Pages redeploys the site, and the new consultant appears in the slideshow.

### Recommended candidate data
- `id`: unique short identifier
- `initials`: 2-letter display fallback
- `name`: professional/public name only
- `title`: target role
- `location`: city/state or Remote
- `visa`: H1B / H4 EAD / GC / USC, as appropriate
- `status`: Available / Interviewing
- `experience`: e.g. 8+ years
- `skills`: comma-separated skill list in the source array
- `certifications`: certifications the consultant has authorized you to market
- `summary`: short marketing summary

### Privacy
Do not put passport/visa scans, SSNs, DOBs, home addresses, I-94s, EAD/Green Card images, private phone numbers, private emails, or full sensitive resumes in a public GitHub repository. Publish only information you have permission to market publicly.
