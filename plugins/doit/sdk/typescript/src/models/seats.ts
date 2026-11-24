import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Licensing seat counts for a subscription. */
export type Seats = {
  /** The number of seats that are currently in use or assigned to users. */
  licensedNumberOfSeats?: number;
  /** The maximum number of seats that can be used. Applies to flexible (non-commitment) plans. */
  maximumNumberOfSeats?: number;
  /** The number of committed seats. Applies to annual commitment plans. */
  numberOfSeats?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const seatsSchema: Schema<Seats> = s.object<Seats>(
  {
    licensedNumberOfSeats: s.optional(s.int()),
    maximumNumberOfSeats: s.optional(s.int()),
    numberOfSeats: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
