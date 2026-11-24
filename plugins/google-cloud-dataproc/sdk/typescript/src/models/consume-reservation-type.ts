import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Type of reservation to consume */
export const ConsumeReservationType = {
  TypeUnspecified: "TYPE_UNSPECIFIED",
  NoReservation: "NO_RESERVATION",
  AnyReservation: "ANY_RESERVATION",
  SpecificReservation: "SPECIFIC_RESERVATION",
} as const;
export type ConsumeReservationType =
  | (typeof ConsumeReservationType)[keyof typeof ConsumeReservationType]
  | (string & {});

export const consumeReservationTypeSchema: EnumSchema<ConsumeReservationType> =
  s.enumOf<ConsumeReservationType>(ConsumeReservationType);
