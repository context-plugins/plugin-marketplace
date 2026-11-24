import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The discriminator property that determines which fields are populated in the 'result' object. */
export const ResultType = {
  SecurityRisk: "security_risk",
  PotentialDailySavings: "potential_daily_savings",
  PotentialDailySavingsWithRecommendation: "potential_daily_savings_with_recommendation",
  PotentialDailySavingsWithClusterAgent: "potential_daily_savings_with_cluster_agent",
} as const;
export type ResultType = (typeof ResultType)[keyof typeof ResultType] | (string & {});

export const resultTypeSchema: EnumSchema<ResultType> = s.enumOf<ResultType>(ResultType);
