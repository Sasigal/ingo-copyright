# INGO — "Safe Rides by Women"

**Copyright deposit and authorship record**
Mobile application · Uganda · Android

> © 2026 **Ingo Female Transporters Ltd**. All rights reserved. Unauthorised
> reproduction or distribution of this application, in whole or in part, is
> prohibited.

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

**INGO** is an all women drivers ride-hailing platform from Uganda serving Passengers from all walks of life — the all-women constraint applies to
who drives, not to who rides. Ingo Women Transporters currently operate in kampala, Entebbe and Jinja.

That distinction shapes the product. Because riders are not restricted, each
driver decides for herself which riders she will carry, and the app makes that
an explicit control rather than an informal practice.

### 2.1 How a ride works

The platform does not set the price. A rider enters a destination and sees a
system estimate built from a per-tier rate card; she then **names her own fare**.
Nearby drivers see both her offer and the system estimate, and may accept it,
counter it, or decline. The rider sees every response — each with the driver's
name, rating, trip count, vehicle and arrival time — and **chooses both the
driver and the price**. On mutual acceptance the fare is locked and cannot move.

Guards bound the negotiation: a rider cannot offer below a set percentage of the
estimate, nor above a sanity ceiling that catches a mistyped amount; a driver can
always accept a standing offer as posted, and her counters are capped so the
mechanism cannot be used to gouge.

A trip then runs assigned → heading over → arrived → in progress → complete, with
both sides watching the same state, and ends with an itemised fare and a rating.

Three tiers are offered — **EcoRide**, **ComfortRide** and **PremiumRide** — each
with its own base, per-kilometre and per-minute rates in Ugandan shillings, and
each with a minimum fare. Wait-period options (immediate, short wait, flexible,
scheduled) carry their own fees and arrival timeouts.

### 2.2 Safety

Safety is the platform's reason for existing, and is expressed throughout rather
than as a single feature:

- **Women drivers only.** The defining constraint, and the basis of the brand.
- **Driver client preference.** Each driver sets whether she accepts all riders,
  **women only**, or **women only at night** — the night window being
  configurable rather than fixed. The server enforces this when deciding which
  requests she is shown, so it is a matching rule, not a request she must police
  herself.
- **SOS.** A one-tap alert, reachable from the home screen, the safety centre and
  during a trip, notifying her emergency contacts and INGO support with her live
  location.
- **Emergency contacts.** Managed in-app and notified on an alert.
- **Automatic trip sharing.** Every trip can be shared with those contacts
  without further action.
- **Optional audio recording** during trips.
- **A 24-hour hotline**, free to call, presented prominently in the safety centre.
- **Identity verification for drivers** — a face check that, when enabled, gates
  a driver from going online until it passes.
- **Verified phone numbers.** Both riders and drivers sign in by one-time code.
- **Live location.** A driver's position is reported only while she is online and
  never when she is off duty, and a position that is not current is treated as
  unreachable rather than trusted.
- **A platform-wide access control** allowing all sign-in to be disabled
  centrally, which also clears sessions already on devices.

### 2.3 Earnings and settlement

Drivers keep the large majority of every fare. The platform's commission is
**capped absolutely**, with lower rates for new drivers and for high-volume
drivers, and the ceiling is enforced by the server rather than by policy.

Each driver holds a **float** with a full transaction ledger. On a cash trip the
rider pays her directly and the commission is debited from that float; on an
in-app trip her share is credited to it. She can top up and withdraw from the
earnings screen, which also shows trips, hours online, average fare and
acceptance rate by period. A **remittance limit** blocks further cash trips once
the commission owed passes a threshold, so debt cannot accumulate indefinitely.

Payment is by cash or mobile money, the method recorded against each trip.

### 2.4 Services marketplace

Beyond rides, the app carries a directory of vetted automotive services —
**mechanics, spare parts, car wash, tyres, accessories and drivers** — browsable
by category, with providers able to be marked verified and featured. It is
reachable from **both** the rider and the driver interfaces, so it serves a
driver maintaining her vehicle as much as a rider needing a garage.

### 2.5 Everyday use

Saved places for home, work and custom locations; recent and popular
destinations; full trip history with fares; ratings with positive-attribute tags;
editable profiles; payment method selection; in-app messaging and calling between
rider and driver during a trip; and live maps throughout.

The application comprises **32 distinct screens** across a rider interface and a
driver interface sharing one role-switched shell.

### 2.6 Protected elements

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
