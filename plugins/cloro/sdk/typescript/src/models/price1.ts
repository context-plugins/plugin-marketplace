import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Current price. For a range, `value` is the lowest price. For an installment offer, only `raw` is
 * present
 */
export type Price1 = {
  /** Numeric price. Absent for an installment offer */
  value?: number;
  /** Currency symbol or code as displayed. Absent for an installment offer */
  currency?: string;
  /** Price text as Gemini displays it */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const price1Schema: Schema<Price1> = s.object<Price1>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
