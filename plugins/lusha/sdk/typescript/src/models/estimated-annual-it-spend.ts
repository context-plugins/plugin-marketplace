import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Revealed via reveal: ["estimatedAnnualItSpend"] in Enrich Companies. Charged 1 credit when
 * non-null.
 */
export type EstimatedAnnualItSpend = {
  value?: number;
  currency?: string;
  valueUsd?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const estimatedAnnualItSpendSchema: Schema<EstimatedAnnualItSpend> = s.object<EstimatedAnnualItSpend>(
  {
    value: s.optional(s.float64()),
    currency: s.optional(s.string()),
    valueUsd: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
