import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The histogram request. */
export type HistogramQuery = {
  /**
   * An expression specifies a histogram request against matching jobs for searches. See
   * SearchJobsRequest.histogram_queries for details about syntax.
   */
  histogramQuery?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const histogramQuerySchema: Schema<HistogramQuery> = s.object<HistogramQuery>(
  {
    histogramQuery: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
