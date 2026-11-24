import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { consumeReservationTypeSchema, type ConsumeReservationType } from "./consume-reservation-type.js";

/** Reservation Affinity for consuming Zonal reservation. */
export type ReservationAffinity = {
  /** Optional. Corresponds to the label values of reservation resource. */
  values?: string[];
  /** Optional. Corresponds to the label key of reservation resource. */
  key?: string;
  /** Optional. Type of reservation to consume */
  consumeReservationType?: ConsumeReservationType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reservationAffinitySchema: Schema<ReservationAffinity> = s.object<ReservationAffinity>(
  {
    values: s.optional(s.array(s.string())),
    key: s.optional(s.string()),
    consumeReservationType: s.optional(s.lazy(() => consumeReservationTypeSchema)),
  },
  { additionalProperties: s.json() },
);
