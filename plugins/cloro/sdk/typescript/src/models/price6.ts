import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Price as displayed. `raw` is always present; `value` and `currency` are omitted when they can't
 * be parsed, never sent as `null`.
 */
export type Price6 = {
  /** Numeric price */
  value?: number;
  /** Currency symbol or word as displayed (e.g. `$`, `R$`) */
  currency?: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const price6Schema: Schema<Price6> = s.object<Price6>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
