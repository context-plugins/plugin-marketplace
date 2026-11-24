import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name11Schema, type Name11 } from "./name11.js";
import { statistic3Schema, type Statistic3 } from "./statistic3.js";

export type AnalyticsIntentStageMetricResult = {
  /**
   * The metric that you requested. Count – The number of times the intent stage occurred. Success –
   * The number of times the intent stage succeeded. Failure – The number of times the intent stage
   * failed. Dropped – The number of times the user dropped the intent stage. Retry – The number of
   * times the bot tried to elicit a response from the user at this stage.
   */
  name?: Name11;
  /**
   * The summary statistic that you requested to calculate. Sum – The total count for the category
   * you provide in name. Average – The total count divided by the number of intent stages in the
   * category you provide in name. Max – The highest count in the category you provide in name.
   */
  statistic?: Statistic3;
  /** The value of the summary statistic for the metric that you requested. */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentStageMetricResultSchema: Schema<AnalyticsIntentStageMetricResult> =
  s.object<AnalyticsIntentStageMetricResult>(
    {
      name: s.optional(s.lazy(() => name11Schema)),
      statistic: s.optional(s.lazy(() => statistic3Schema)),
      value: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
