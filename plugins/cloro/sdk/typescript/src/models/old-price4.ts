import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Original price before discount. Same shape as `price`. */
export type OldPrice4 = {
  /** Numeric price */
  value?: number;
  /** Currency symbol or word as displayed (e.g. `$`, `R$`) */
  currency?: string;
  /** Visible price text verbatim */
  raw?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oldPrice4Schema: Schema<OldPrice4> = s.object<OldPrice4>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    raw: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
