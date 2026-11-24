import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name6Schema, type Name6 } from "./name6.js";
import { statistic1Schema, type Statistic1 } from "./statistic1.js";

export type AnalyticsIntentMetricResult = {
  /**
   * The metric that you requested. See Key definitions for more details about these metrics. Count
   * – The number of times the intent was invoked. Success – The number of times the intent
   * succeeded. Failure – The number of times the intent failed. Switched – The number of times
   * there was a switch to a different intent. Dropped – The number of times the user dropped the
   * intent.
   */
  name?: Name6;
  /**
   * The statistic that you requested to calculate. Sum – The total count for the category you
   * provide in name. Average – The total count divided by the number of intents in the category you
   * provide in name. Max – The highest count in the category you provide in name.
   */
  statistic?: Statistic1;
  /** The value of the summary statistic for the metric that you requested. */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentMetricResultSchema: Schema<AnalyticsIntentMetricResult> =
  s.object<AnalyticsIntentMetricResult>(
    {
      name: s.optional(s.lazy(() => name6Schema)),
      statistic: s.optional(s.lazy(() => statistic1Schema)),
      value: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
