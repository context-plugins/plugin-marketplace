import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name17Schema, type Name17 } from "./name17.js";
import { statistic5Schema, type Statistic5 } from "./statistic5.js";

export type AnalyticsSessionMetricResult = {
  /**
   * The metric that you requested. Count – The number of sessions. Success – The number of sessions
   * that succeeded. Failure – The number of sessions that failed. Dropped – The number of sessions
   * that the user dropped. Duration – The duration of sessions. TurnPersession – The number of
   * turns in the sessions. Concurrency – The number of sessions occurring in the same period of
   * time.
   */
  name?: Name17;
  /**
   * The summary statistic that you requested to calculate. Sum – The total count for the category
   * you provide in name. Average – The total count divided by the number of sessions in the
   * category you provide in name. Max – The highest count in the category you provide in name.
   */
  statistic?: Statistic5;
  /** The value of the summary statistic for the metric that you requested. */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsSessionMetricResultSchema: Schema<AnalyticsSessionMetricResult> =
  s.object<AnalyticsSessionMetricResult>(
    {
      name: s.optional(s.lazy(() => name17Schema)),
      statistic: s.optional(s.lazy(() => statistic5Schema)),
      value: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
