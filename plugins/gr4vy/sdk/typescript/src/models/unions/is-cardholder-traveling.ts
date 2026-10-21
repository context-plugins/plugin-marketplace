import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates whether the cardholder is traveling. */
export type IsCardholderTraveling = boolean;

export const isCardholderTravelingSchema: Schema<IsCardholderTraveling> = s.of<IsCardholderTraveling>(
  s.union([s.boolean()]),
);
