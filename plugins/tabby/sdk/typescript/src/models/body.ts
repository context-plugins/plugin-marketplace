import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  attachmentPaymentHistoryFullSchema,
  type AttachmentPaymentHistoryFull,
} from "./attachment-payment-history-full.js";
import {
  attachmentPaymentHistorySimpleSchema,
  type AttachmentPaymentHistorySimple,
} from "./attachment-payment-history-simple.js";
import { educationDetailsSchema, type EducationDetails } from "./education-details.js";
import { flightPointsSimpleSchema, type FlightPointsSimple } from "./flight-points-simple.js";
import {
  flightReservationDetailsSchema,
  type FlightReservationDetails,
} from "./flight-reservation-details.js";
import { hotelReservationDetailsSchema, type HotelReservationDetails } from "./hotel-reservation-details.js";
import { insuranceDetailsSchema, type InsuranceDetails } from "./insurance-details.js";
import { marketplacesSchema, type Marketplaces } from "./marketplaces.js";

/** Should be an object containing any of the keys with corresponded sub objects */
export type Body = {
  flightReservationDetails?: FlightReservationDetails;
  hotelReservationDetails?: HotelReservationDetails;
  insuranceDetails?: InsuranceDetails;
  paymentHistoryFull?: AttachmentPaymentHistoryFull;
  paymentHistorySimple?: AttachmentPaymentHistorySimple;
  flightPointsSimple?: FlightPointsSimple;
  /** Sellers' details within marketplaces. */
  marketplaces?: Marketplaces;
  /** Education-vertical risk signals for the current session. */
  educationDetails?: EducationDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bodySchema: Schema<Body> = s.object<Body>(
  {
    flightReservationDetails: s.optional(s.lazy(() => flightReservationDetailsSchema)),
    hotelReservationDetails: s.optional(s.lazy(() => hotelReservationDetailsSchema)),
    insuranceDetails: s.optional(s.lazy(() => insuranceDetailsSchema)),
    paymentHistoryFull: s.optional(s.lazy(() => attachmentPaymentHistoryFullSchema)),
    paymentHistorySimple: s.optional(s.lazy(() => attachmentPaymentHistorySimpleSchema)),
    flightPointsSimple: s.optional(s.lazy(() => flightPointsSimpleSchema)),
    marketplaces: s.optional(s.lazy(() => marketplacesSchema)),
    educationDetails: s.optional(s.lazy(() => educationDetailsSchema)),
    _keysMap: {
      flightReservationDetails: "flight_reservation_details",
      hotelReservationDetails: "hotel_reservation_details",
      insuranceDetails: "insurance_details",
      paymentHistoryFull: "payment_history_full",
      paymentHistorySimple: "payment_history_simple",
      flightPointsSimple: "flight_points_simple",
      educationDetails: "education_details",
    },
  },
  { additionalProperties: s.json() },
);
