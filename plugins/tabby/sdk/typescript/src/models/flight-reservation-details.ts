import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insuranceSchema, type Insurance } from "./insurance.js";
import { itinerarySchema, type Itinerary } from "./itinerary.js";
import { passenger1Schema, type Passenger1 } from "./passenger1.js";

export type FlightReservationDetails = {
  /** Trip booking number, e.g. TR9088999 */
  pnr?: string;
  /** Itinerary data, one per segment */
  itinerary: Itinerary[];
  /** Insurance data */
  insurance: Insurance[];
  /** Passengers data */
  passengers: Passenger1[];
  /** Name of the affiliate that originated the purchase. If none, leave blank. */
  affiliateName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flightReservationDetailsSchema: Schema<FlightReservationDetails> =
  s.object<FlightReservationDetails>(
    {
      pnr: s.optional(s.string()),
      itinerary: s.array(s.lazy(() => itinerarySchema)),
      insurance: s.array(s.lazy(() => insuranceSchema)),
      passengers: s.array(s.lazy(() => passenger1Schema)),
      affiliateName: s.optional(s.string()),
      _keysMap: {
        affiliateName: "affiliate_name",
      },
    },
    { additionalProperties: s.json() },
  );
