import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Histogram result that matches HistogramQuery specified in searches. */
export type HistogramQueryResult = {
  /**
   * A map from the values of the facet associated with distinct values to the number of matching
   * entries with corresponding value. The key format is: * (for string histogram) string values
   * stored in the field. * (for named numeric bucket) name specified in `bucket()` function, like
   * for `bucket(0, MAX, "non-negative")`, the key will be `non-negative`. * (for anonymous numeric
   * bucket) range formatted as `-`, for example, `0-1000`, `MIN-0`, and `0-MAX`.
   */
  histogram?: Record<string, string>;
  /** Requested histogram expression. */
  histogramQuery?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const histogramQueryResultSchema: Schema<HistogramQueryResult> = s.object<HistogramQueryResult>(
  {
    histogram: s.optional(s.record(s.string(), s.string())),
    histogramQuery: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
