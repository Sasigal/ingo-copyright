// ─────────────────────────────────────────────────────────────────────────────
// INGO — Frozen data-contract types
// These interfaces define the exact shapes the screens consume.
// The backend must emit data that conforms to these types.
// Do NOT rename fields without updating both the screen AND the API.
// ─────────────────────────────────────────────────────────────────────────────

// ── Auth ────────────────────────────────────────────────────────────────────

export type UserRole = "PASSENGER" | "DRIVER" | "ADMIN";
export type Gender = "FEMALE" | "MALE" | "UNSPECIFIED";
// Which clients a driver accepts (safety preference).
export type ClientPreference = "ALL" | "WOMEN_ONLY" | "WOMEN_AT_NIGHT";

export interface User {
  id: string;
  phone: string;
  email?: string;
  fullName: string;
  profilePhoto?: string;
  role: UserRole;
  status: string;
  gender?: Gender;
}

export interface LoginResult {
  user: User;
  token: string;
  refreshToken: string;
}

// ── Location / Ride ──────────────────────────────────────────────────────────

export interface Place {
  address: string;
  lat: number;
  lng: number;
  label?: string;
}

export interface Vehicle {
  make: string;
  model: string;
  licensePlate: string;
  color: string;
}

/** Driver as seen during an active ride or on the map */
export interface DriverInfo {
  id: string;
  name: string;
  photo?: string;
  rating: number;
  totalTrips: number;
  phone: string;
  vehicle: Vehicle;
  eta?: number;
  lat?: number;
  lng?: number;
}
