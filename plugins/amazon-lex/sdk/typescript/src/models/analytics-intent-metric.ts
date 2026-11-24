import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name5Schema, type Name5 } from "./name5.js";
import { order2Schema, type Order2 } from "./order2.js";
import { statisticSchema, type Statistic } from "./statistic.js";

export type AnalyticsIntentMetric = {
  /**
   * The metric for which you want to get intent summary statistics. Count – The number of times the
   * intent was invoked. Success – The number of times the intent succeeded. Failure – The number of
   * times the intent failed. Switched – The number of times there was a switch to a different
   * intent. Dropped – The number of times the user dropped the intent.
   */
  name: Name5;
  /**
   * The summary statistic to calculate. Sum – The total count for the category you provide in name.
   * Average – The total count divided by the number of intents in the category you provide in name.
   * Max – The highest count in the category you provide in name.
   */
  statistic: Statistic;
  /** Specifies whether to sort the results in ascending or descending order. */
  order?: Order2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentMetricSchema: Schema<AnalyticsIntentMetric> = s.object<AnalyticsIntentMetric>(
  {
    name: name5Schema,
    statistic: statisticSchema,
    order: s.optional(s.lazy(() => order2Schema)),
  },
  { additionalProperties: s.json() },
);
