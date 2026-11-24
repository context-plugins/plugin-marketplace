import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy1 = {
  DetectionTime: "detection_time",
  ResolvedTime: "resolved_time",
  AccountId: "account_id",
  Region: "region",
  ResourceClass: "resource_class",
  CostEstimationPotentialSavings: "cost_estimation_potential_savings",
  CostEstimationPotentialIncreasedCosts: "cost_estimation_potential_increased_costs",
  CostEstimationPotentialFreedCommitments: "cost_estimation_potential_freed_commitments",
  CostEstimationPotentialIncreasedCommitmentsRequired:
    "cost_estimation_potential_increased_commitments_required",
} as const;
export type SortBy1 = (typeof SortBy1)[keyof typeof SortBy1] | (string & {});

export const sortBy1Schema: EnumSchema<SortBy1> = s.enumOf<SortBy1>(SortBy1);
