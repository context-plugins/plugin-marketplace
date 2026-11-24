import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name16Schema, type Name16 } from "./name16.js";
import { order2Schema, type Order2 } from "./order2.js";
import { statistic4Schema, type Statistic4 } from "./statistic4.js";

export type AnalyticsSessionMetric = {
  /**
   * The metric for which you want to get session summary statistics. Count – The number of
   * sessions. Success – The number of sessions that succeeded. Failure – The number of sessions
   * that failed. Dropped – The number of sessions that the user dropped. Duration – The duration of
   * sessions. TurnsPerSession – The number of turns in the sessions. Concurrency – The number of
   * sessions occurring in the same period of time.
   */
  name: Name16;
  /**
   * The summary statistic to calculate. Sum – The total count for the category you provide in name.
   * Average – The total count divided by the number of sessions in the category you provide in
   * name. Max – The highest count in the category you provide in name.
   */
  statistic: Statistic4;
  /** Specifies whether to sort the results in ascending or descending order. */
  order?: Order2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsSessionMetricSchema: Schema<AnalyticsSessionMetric> = s.object<AnalyticsSessionMetric>(
  {
    name: name16Schema,
    statistic: statistic4Schema,
    order: s.optional(s.lazy(() => order2Schema)),
  },
  { additionalProperties: s.json() },
);
