import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Structured pricing information. `currency` and `raw` are always present; `value` is omitted when
 * the number doesn't parse, and the whole object is omitted when no currency appears beside a
 * number. `raw` carries the visible text verbatim.
 */
export type Price5 = {
  /** Numeric price */
  value?: number;
  /** Currency symbol */
  currency?: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const price5Schema: Schema<Price5> = s.object<Price5>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
