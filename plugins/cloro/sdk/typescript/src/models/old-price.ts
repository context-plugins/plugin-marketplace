import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Price before a discount, same shape as `price`. Absent when there is no discount */
export type OldPrice = {
  /** Numeric price */
  value?: number;
  /** Currency symbol or code as displayed */
  currency?: string;
  /** Price text as Gemini displays it */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oldPriceSchema: Schema<OldPrice> = s.object<OldPrice>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
