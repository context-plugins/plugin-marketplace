import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Server-computed risk classification, based on current utilization and forecasted breach date
 * relative to the configured amount and current period end. "atRisk" - the budget has already
 * exceeded its configured amount, or its forecast projects it will before the current period ends.
 * "onTrack" - the budget has forecast data and is neither over budget nor projected to breach.
 * "unknown" - no forecast data is available yet, the budget is a fixed budget whose period has
 * already expired, or the budget is invalid/draft.
 */
export const RiskStatus = {
  AtRisk: "atRisk",
  OnTrack: "onTrack",
  Unknown: "unknown",
} as const;
export type RiskStatus = (typeof RiskStatus)[keyof typeof RiskStatus] | (string & {});

export const riskStatusSchema: EnumSchema<RiskStatus> = s.enumOf<RiskStatus>(RiskStatus);
