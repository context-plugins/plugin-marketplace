import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Product price (present when `type` is `SHOPPING`). `currency` and `raw` are always present;
 * `value` is omitted when the number doesn't parse, and the whole object is omitted when no
 * currency appears beside a number. `raw` carries the visible text verbatim.
 */
export type Price4 = {
  /** Numeric price value */
  value?: number;
  /** Currency symbol */
  currency?: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const price4Schema: Schema<Price4> = s.object<Price4>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
