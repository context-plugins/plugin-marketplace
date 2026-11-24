import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Original price before discount (present when `type` is `SHOPPING` and the ad has sale pricing).
 * Same shape as `price`.
 */
export type OldPrice2 = {
  /** Numeric price value */
  value?: number;
  /** Currency symbol */
  currency?: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oldPrice2Schema: Schema<OldPrice2> = s.object<OldPrice2>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
