import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countBySeveritySchema, type CountBySeverity } from "./count-by-severity.js";

/**
 * Anomaly-specific summary. `countBySeverity` and `totalCostOfAnomaly` cover the complete filtered
 * result set across all pages, not the returned page. Anomalies whose severity cannot be determined
 * (legacy documents) are counted in `totalCount` and `totalCostOfAnomaly` but in none of the three
 * severity buckets in `countBySeverity`, so the three values can sum to less than `totalCount`.
 * Computed as of this request; under concurrent writes, values may differ between pages fetched
 * during the same pagination sequence.
 */
export type AnomalySummary = {
  /**
   * Count of matching anomalies per severity level. All three keys are always present, with zero
   * counts included.
   */
  countBySeverity: CountBySeverity;
  /**
   * Sum of `costOfAnomaly` across all matching anomalies, in USD, rounded to cents. Every matching
   * anomaly contributes, linked ones included, so a single cost spike described at more than one
   * level of detail contributes once per anomaly describing it.
   */
  totalCostOfAnomaly: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const anomalySummarySchema: Schema<AnomalySummary> = s.object<AnomalySummary>(
  {
    countBySeverity: countBySeveritySchema,
    totalCostOfAnomaly: s.float64(),
  },
  { additionalProperties: s.json() },
);
