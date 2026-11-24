import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name10Schema, type Name10 } from "./name10.js";
import { order3Schema, type Order3 } from "./order3.js";
import { statistic2Schema, type Statistic2 } from "./statistic2.js";

export type AnalyticsIntentStageMetric = {
  /**
   * The metric for which you want to get intent stage summary statistics. See Key definitions for
   * more details about these metrics. Count – The number of times the intent stage occurred.
   * Success – The number of times the intent stage succeeded. Failure – The number of times the
   * intent stage failed. Dropped – The number of times the user dropped the intent stage. Retry –
   * The number of times the bot tried to elicit a response from the user at this stage.
   */
  name: Name10;
  /**
   * The summary statistic to calculate. Sum – The total count for the category you provide in name.
   * Average – The total count divided by the number of intent stages in the category you provide in
   * name. Max – The highest count in the category you provide in name.
   */
  statistic: Statistic2;
  /**
   * Specifies whether to sort the results in ascending or descending order of the summary statistic
   * (value in the response).
   */
  order?: Order3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsIntentStageMetricSchema: Schema<AnalyticsIntentStageMetric> =
  s.object<AnalyticsIntentStageMetric>(
    {
      name: name10Schema,
      statistic: statistic2Schema,
      order: s.optional(s.lazy(() => order3Schema)),
    },
    { additionalProperties: s.json() },
  );
