import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { name22Schema, type Name22 } from "./name22.js";
import { statistic7Schema, type Statistic7 } from "./statistic7.js";

export type AnalyticsUtteranceMetricResult = {
  /**
   * The metric that you requested. Count – The number of utterances. Missed – The number of
   * utterances that Amazon Lex failed to recognize. Detected – The number of utterances that Amazon
   * Lex managed to detect. UtteranceTimestamp – The date and time of the utterance.
   */
  name?: Name22;
  /**
   * The summary statistic that you requested to calculate. Sum – The total count for the category
   * you provide in name. Average – The total count divided by the number of utterances in the
   * category you provide in name. Max – The highest count in the category you provide in name.
   */
  statistic?: Statistic7;
  /** The value of the summary statistic for the metric that you requested. */
  value?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsUtteranceMetricResultSchema: Schema<AnalyticsUtteranceMetricResult> =
  s.object<AnalyticsUtteranceMetricResult>(
    {
      name: s.optional(s.lazy(() => name22Schema)),
      statistic: s.optional(s.lazy(() => statistic7Schema)),
      value: s.optional(s.float64()),
    },
    { additionalProperties: s.json() },
  );
