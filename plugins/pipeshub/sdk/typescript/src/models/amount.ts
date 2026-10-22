import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** `min` must not be after `max`. */
export type Amount = {
  min?: number;
  max?: number;
  /** ISO 4217 code, case-insensitive. */
  currency?: string;
};

export const amountSchema: Schema<Amount> = s.object<Amount>({
  min: s.optional(s.float64()),
  max: s.optional(s.float64()),
  currency: s.optional(s.string()),
});
