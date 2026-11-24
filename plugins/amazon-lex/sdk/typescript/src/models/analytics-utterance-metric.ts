import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name21Schema, type Name21 } from "./name21.js";
import { order2Schema, type Order2 } from "./order2.js";
import { statistic6Schema, type Statistic6 } from "./statistic6.js";

export type AnalyticsUtteranceMetric = {
  /**
   * The metric for which you want to get utterance summary statistics. Count – The number of
   * utterances. Missed – The number of utterances that Amazon Lex failed to recognize. Detected –
   * The number of utterances that Amazon Lex managed to detect. UtteranceTimestamp – The date and
   * time of the utterance.
   */
  name: Name21;
  /**
   * The summary statistic to calculate. Sum – The total count for the category you provide in name.
   * Average – The total count divided by the number of utterances in the category you provide in
   * name. Max – The highest count in the category you provide in name.
   */
  statistic: Statistic6;
  /** Specifies whether to sort the results in ascending or descending order. */
  order?: Order2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsUtteranceMetricSchema: Schema<AnalyticsUtteranceMetric> =
  s.object<AnalyticsUtteranceMetric>(
    {
      name: name21Schema,
      statistic: statistic6Schema,
      order: s.optional(s.lazy(() => order2Schema)),
    },
    { additionalProperties: s.json() },
  );
