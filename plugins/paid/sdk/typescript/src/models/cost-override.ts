import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * If supplied, overrides server-side pricing. The usage breakdown is still recorded for analytics.
 */
export type CostOverride = {
  amount: number;
  /** ISO 4217 currency code, e.g. "USD". */
  currency: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costOverrideSchema: Schema<CostOverride> = s.object<CostOverride>(
  {
    amount: s.float64(),
    currency: s.string(),
  },
  { additionalProperties: s.json() },
);
