import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { consumeReservationTypeSchema, type ConsumeReservationType } from "./consume-reservation-type.js";

/** Optional. Reservation Affinity for consuming Zonal reservation. */
export type ReservationAffinity2 = {
  /** Optional. Corresponds to the label values of reservation resource. */
  values?: string[];
  /** Optional. Corresponds to the label key of reservation resource. */
  key?: string;
  /** Optional. Type of reservation to consume */
  consumeReservationType?: ConsumeReservationType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reservationAffinity2Schema: Schema<ReservationAffinity2> = s.object<ReservationAffinity2>(
  {
    values: s.optional(s.array(s.string())),
    key: s.optional(s.string()),
    consumeReservationType: s.optional(s.lazy(() => consumeReservationTypeSchema)),
  },
  { additionalProperties: s.json() },
);
