import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Estimated cost-benefit analysis data for an automation idea */
export type BenefitData = {
  /** Estimated hours saved per year by automating this process */
  estimatedTimeSavingsPerYear?: number;
  /** Full-time equivalent headcount savings from the automation */
  estimatedFteSavings?: number;
  /** Estimated monetary cost savings per year in the organization's currency */
  estimatedCostSavingsPerYear?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const benefitDataSchema: Schema<BenefitData> = s.object<BenefitData>(
  {
    estimatedTimeSavingsPerYear: s.optional(s.float64()),
    estimatedFteSavings: s.optional(s.float64()),
    estimatedCostSavingsPerYear: s.optional(s.float64()),
    _keysMap: {
      estimatedFteSavings: "estimatedFTESavings",
    },
  },
  { additionalProperties: s.json() },
);
