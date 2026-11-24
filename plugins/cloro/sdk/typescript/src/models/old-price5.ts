import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Original price before discount. Same shape as `price`. */
export type OldPrice5 = {
  /** Numeric price */
  value?: number;
  /** Currency symbol as displayed, or an ISO code when Google supplies structured price data */
  currency?: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oldPrice5Schema: Schema<OldPrice5> = s.object<OldPrice5>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
