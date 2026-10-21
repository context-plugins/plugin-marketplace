import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Estimate of the number of calls that will be processed by the workflow and their cost */
export type InsightWorkflowEstimate2 = {
  /** Number of extant calls that will be processed by the workflow */
  backfillCount: number;
  /** Estimated duration of the calls that will be processed by the workflow */
  backfillDuration: number;
  /** Estimated number of calls that will be processed by the workflow daily */
  estimatedDailyCount: number;
  /** Estimated duration of the calls that will be processed by the workflow daily */
  estimatedDailyDuration: number;
  /** Estimated cost of the calls that will be processed by the workflow daily */
  estimatedDailyCost: number;
  /** Estimated cost of the backfill of the calls that will be processed by the workflow */
  estimatedBackfillCost: number;
};

export const insightWorkflowEstimate2Schema: Schema<InsightWorkflowEstimate2> =
  s.object<InsightWorkflowEstimate2>({
    backfillCount: s.int(),
    backfillDuration: s.float64(),
    estimatedDailyCount: s.int(),
    estimatedDailyDuration: s.float64(),
    estimatedDailyCost: s.float64(),
    estimatedBackfillCost: s.float64(),
    _keysMap: {
      backfillCount: "backfill_count",
      backfillDuration: "backfill_duration",
      estimatedDailyCount: "estimated_daily_count",
      estimatedDailyDuration: "estimated_daily_duration",
      estimatedDailyCost: "estimated_daily_cost",
      estimatedBackfillCost: "estimated_backfill_cost",
    },
  });
