# Third-party components — INGO

The copyright claimed over INGO covers the original work: its interface designs,
in-app content, data model, pricing and matching logic, and the code expressing
them. It does **not** extend to the open-source frameworks and libraries the
application is built on, which remain under their own licences.

This file records those components so the boundary of the claim is clear.

## Mobile application

| Component | Purpose | Licence |
|---|---|---|
| React | UI runtime | MIT |
| React Native | Native mobile framework | MIT |
| Expo | Build, runtime and native module toolchain | MIT |
| Expo Router | Screen routing | MIT |
| expo-secure-store | Encrypted local credential storage | MIT |
| react-native-maps | Map rendering | MIT |
| lucide-react-native | Interface icon set | ISC |
| Poppins (via @expo-google-fonts) | Heading typeface | SIL Open Font License 1.1 |
| PT Sans (via @expo-google-fonts) | Body typeface | SIL Open Font License 1.1 |

## Server

| Component | Purpose | Licence |
|---|---|---|
| Node.js | Runtime | MIT |
| Express | HTTP framework | MIT |
| Drizzle ORM | Database access layer | Apache-2.0 |
| PostgreSQL (`pg`) | Database client | MIT |
| jsonwebtoken | Session tokens | MIT |
| zod | Schema validation | MIT |
| pino | Structured logging | MIT |

## Services

| Service | Purpose | Terms |
|---|---|---|
| Google Maps Platform | Map tiles, geocoding, routing | Google Maps Platform Terms of Service |

All components above are used under licences that permit commercial use and
redistribution in compiled form. Attribution obligations, where they apply, are
satisfied by this record and by the notices shipped inside the application
package.

**Action for the owner:** retain a copy of each licence text alongside the
archived build, as the specification's documentation step requires.

---

*Compiled from the project's declared dependencies, 21 September 2026. Verify
against the lockfile before relying on it in a filing.*
