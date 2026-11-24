import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hotelItinerarySchema, type HotelItinerary } from "./hotel-itinerary.js";
import { insuranceSchema, type Insurance } from "./insurance.js";
import { passengerSchema, type Passenger } from "./passenger.js";

export type HotelReservationDetails = {
  /** Trip booking number, e.g. TR9088999 */
  pnr?: string;
  /** Hotel itinerary data, one per segment */
  hotelItinerary: HotelItinerary[];
  /** Insurance data */
  insurance: Insurance[];
  /** Passengers data */
  passengers: Passenger[];
  /** Name of the affiliate that originated the purchase. If none, leave blank. */
  affiliateName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hotelReservationDetailsSchema: Schema<HotelReservationDetails> =
  s.object<HotelReservationDetails>(
    {
      pnr: s.optional(s.string()),
      hotelItinerary: s.array(s.lazy(() => hotelItinerarySchema)),
      insurance: s.array(s.lazy(() => insuranceSchema)),
      passengers: s.array(s.lazy(() => passengerSchema)),
      affiliateName: s.optional(s.string()),
      _keysMap: {
        hotelItinerary: "hotel_itinerary",
        affiliateName: "affiliate_name",
      },
    },
    { additionalProperties: s.json() },
  );
