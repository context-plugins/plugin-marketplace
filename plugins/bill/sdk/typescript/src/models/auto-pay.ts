import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Vendor auto-pay information. */
export type AutoPay = {
  enabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const autoPaySchema: Schema<AutoPay> = s.object<AutoPay>(
  {
    enabled: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
