# INGO — "Safe Rides by Women"

**Copyright deposit and authorship record**
Mobile application · Uganda · Android

> © 2026 **[OWNER — insert registered entity or individual name]**. All rights
> reserved. Unauthorised reproduction or distribution of this application, in
> whole or in part, is prohibited.

---

## 1. What this repository is

A **dated, public record of authorship** for the INGO mobile application. It
supports a voluntary copyright registration with the **Uganda Registration
Services Bureau (URSB)** under the Copyright and Neighbouring Rights Act
(Cap. 218), and serves as the "timestamped commit history" form of evidence that
the Act's guidance contemplates.

It holds what URSB asks for — **a description of the work, screenshots of the key
screens, and author details** — together with build provenance for the compiled
application.

**It is not the application's source code.** Copyright arises automatically on
creation and fixation; there is no obligation to deposit or disclose source code
to claim, register or enforce it. The working codebase is retained privately.
See [§6](#6-what-is-deliberately-not-here).

## 2. The work

**INGO** is an all-women ride-hailing platform for Uganda — women passengers
matched with verified women drivers — serving Kampala, Entebbe and Jinja.

Its distinguishing features, each an original expression fixed in this work:

| Element | Description |
|---|---|
| **Two-sided price negotiation** | The passenger proposes their own fare; nearby drivers accept or counter; the passenger chooses both the driver and the price. A floor set as a percentage of the system estimate is enforced. |
| **Three ride tiers** | EcoRide, ComfortRide and PremiumRide, each with its own base, per-kilometre and per-minute rate card, priced in Ugandan shillings. |
| **Capped platform commission** | A hard ceiling on the platform's share of any fare, enforced server-side rather than by policy alone. |
| **Driver client preference** | A driver may accept all riders, women only, or women at night only — the safety promise expressed as a product control. |
| **Driver float and settlement** | A driver wallet from which the platform commission is deducted on cash trips and to which earnings are credited on in-app trips. |
| **Integrated safety layer** | SOS alert, emergency contacts, automatic trip sharing, optional audio recording, and a 24/7 hotline. |
| **Auto-services marketplace** | Mechanics, spare parts, car wash, tyres, accessories and drivers, reachable from both the passenger and driver sides. |

The application comprises **32 distinct screens** across a passenger interface
and a driver interface sharing one role-switched shell.

### Protected elements

- the **compiled application** (the Android APK) — as a literary work
- the **user interface and screen designs** — as artistic works, each screen
  layout independently protectable
- the **in-app written content** — onboarding copy, help text, terms
- the **source code**, held privately — as a literary work
- the **pricing and matching logic** as expressed in that code
- the **driver and rider database** as an original compilation

The name "INGO", the tagline "Safe Rides by Women", the shield mark and the
purple-to-pink palette are **trademark** matters, separate from copyright, and
are the subject of a separate application.

## 3. Screenshots

The visual record is in [`screenshots/`](screenshots/) — 28 captures at
1080 × 2400 covering onboarding, both sign-in flows, the booking and negotiation
sequence, the live trip, payment and rating, the safety centre, the marketplace,
and the driver dashboard, earnings and profile.

[`screenshots/README.md`](screenshots/README.md) is the annotated index.

## 4. Build provenance

The compiled artifact these screenshots were taken from is identified by version
and SHA-256 in [`BUILD-PROVENANCE.md`](BUILD-PROVENANCE.md), so any copy can be
checked against this record.

## 5. Authorship and ownership

Set out in [`COPYRIGHT.md`](COPYRIGHT.md), together with the **matters requiring
the owner's confirmation before filing**. That file must be completed and
reviewed by a registered Ugandan IP practitioner before this record is relied on.

## 6. What is deliberately not here

- **The working source code.** Not required for registration, and disclosing it
  would defeat its commercial purpose. A court can review it in camera under a
  confidentiality order should enforcement ever require it.
- **Credentials of any kind** — API keys, tokens, database URLs, signing keys.
- **Any personal data** of real users, drivers or testers. Every name, phone
  number, trip and amount in the screenshots is demonstration data produced by
  the application running offline against bundled sample data.
- **The fare rate cards and commission rate.** Referred to in general terms
  above; the figures are commercially sensitive and are not published here.

A small, non-sensitive excerpt is included in [`src-excerpt/`](src-excerpt/)
solely to evidence original expression — the domain type definitions that fix
the application's data model. It is not a functioning system and omits the
pricing engine, matching logic, authentication and all server code.

---

*Prepared 21 September 2026. A factual record, not legal advice; engage a
registered Ugandan IP practitioner before filing.*
