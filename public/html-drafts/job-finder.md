Job Finder UI Mockup (Design Notes)

Goal
- A modern, professional UI that lets a user upload a resume and automatically surface matching jobs. Users can filter, sort, select jobs, and open a details panel to view company insights and an AI‑tailored message.

Layout
- Tri-panel layout on desktop (collapses on mobile):
  - Left: Resume + Filters
  - Center: Results list/table (search, sort, bulk actions)
  - Right: Inspector (selected job details, company info, AI notes, tailored message)

Interactions
- Upload resume (PDF) or paste text.
- Search box + sort (Relevance, Compatibility, Recent).
- Filters: role, seniority, location, remote, min compatibility, tags.
- Select rows via checkboxes. “Select all” for page.
- Inspector opens when a row is clicked. Shows:
  - Company card (logo, industry, size, location)
  - Job description (scroll)
  - AI Notes (bullet strengths/gaps)
  - Compatibility gauge and success chance bar
  - Tailored message (copy / regenerate)

Table Columns
- Job, Company, Short description
- AI Notes (1–2 lines)
- Compatibility (%)
- Success chance (Low/Med/High)

States
- Loading (shimmer rows)
- No results
- Error banner
- Empty resume

Accessibility
- Keyboard focus states
- ARIA labels on controls
- Visible checkbox targets

Visual System
- Inter font, black/white/gray palette, subtle borders/shadows.
- Chips, tags, and badges for quick scanning.


