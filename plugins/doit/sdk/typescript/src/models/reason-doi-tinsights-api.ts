import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The reason for dismissal. */
export const ReasonDoiTInsightsApi = {
  NotRelevant: "not relevant",
  NotEnoughInformation: "not enough information",
  NotWorthTheEffort: "not worth the effort",
  InaccurateOptimizationOpportunities: "inaccurate optimization opportunities",
} as const;
export type ReasonDoiTInsightsApi =
  | (typeof ReasonDoiTInsightsApi)[keyof typeof ReasonDoiTInsightsApi]
  | (string & {});

export const reasonDoiTInsightsApiSchema: EnumSchema<ReasonDoiTInsightsApi> =
  s.enumOf<ReasonDoiTInsightsApi>(ReasonDoiTInsightsApi);
