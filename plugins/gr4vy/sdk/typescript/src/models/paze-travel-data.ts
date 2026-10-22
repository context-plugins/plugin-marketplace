import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { departureLocationSchema, type DepartureLocation } from "./unions/departure-location.js";
import { departuredateSchema, type Departuredate } from "./unions/departuredate.js";
import { passengernameSchema, type Passengername } from "./unions/passengername.js";
import { returnLocationSchema, type ReturnLocation } from "./unions/return-location.js";
import { returndateSchema, type Returndate } from "./unions/returndate.js";
import { roundtripSchema, type Roundtrip } from "./unions/roundtrip.js";

export type PazeTravelData = {
  /** Traveler name. */
  passengerName?: Passengername;
  /** Whether departure and return trips are being purchased in the same transaction. */
  roundTrip?: Roundtrip;
  /** Date and time of departure in ISO 8601 format. */
  departureDate?: Departuredate;
  /** Date and time of return in ISO 8601 format. */
  returnDate?: Returndate;
  /** Location from which the traveler departs. */
  departureLocation?: DepartureLocation;
  /** Location to which the traveler returns. */
  returnLocation?: ReturnLocation;
};

export const pazeTravelDataSchema: Schema<PazeTravelData> = s.object<PazeTravelData>({
  passengerName: s.optional(s.lazy(() => passengernameSchema)),
  roundTrip: s.optional(s.lazy(() => roundtripSchema)),
  departureDate: s.optional(s.lazy(() => departuredateSchema)),
  returnDate: s.optional(s.lazy(() => returndateSchema)),
  departureLocation: s.optional(s.lazy(() => departureLocationSchema)),
  returnLocation: s.optional(s.lazy(() => returnLocationSchema)),
});
