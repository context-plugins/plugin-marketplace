import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * One time-bucketed eligible-spend usage point for the recommendation chart. Units are shelf-price
 * hourly dollars ($/h) unless noted by the client visualization.
 */
export type EligibleSpendDataPoint = {
  /** Start of the time bucket for this data point (UTC). */
  usageTime?: Date | null;
  /**
   * Total eligible usage in the bucket when granularity is `hour`. Prefer min/max/median for
   * coarser granularities.
   */
  totalUsage?: number;
  /** Minimum eligible usage ($/h) observed in the bucket (day/week/month views). */
  minUsage?: number;
  /** Maximum eligible usage ($/h) observed in the bucket (day/week/month views). */
  maxUsage?: number;
  /** Median eligible usage ($/h) observed in the bucket (day/week/month views). */
  medianUsage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eligibleSpendDataPointSchema: Schema<EligibleSpendDataPoint> = s.object<EligibleSpendDataPoint>(
  {
    usageTime: s.optionalNullable(s.dateTime()),
    totalUsage: s.optional(s.float64()),
    minUsage: s.optional(s.float64()),
    maxUsage: s.optional(s.float64()),
    medianUsage: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
