import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  samplingStatisticSummarySchema,
  type SamplingStatisticSummary,
} from "./sampling-statistic-summary.js";

export type GetSamplingStatisticSummariesResult = {
  /** Information about the number of requests instrumented for each sampling rule. */
  samplingStatisticSummaries?: SamplingStatisticSummary[];
  /** Pagination token. */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getSamplingStatisticSummariesResultSchema: Schema<GetSamplingStatisticSummariesResult> =
  s.object<GetSamplingStatisticSummariesResult>(
    {
      samplingStatisticSummaries: s.optional(s.array(s.lazy(() => samplingStatisticSummarySchema))),
      nextToken: s.optional(s.string()),
      _keysMap: {
        samplingStatisticSummaries: "SamplingStatisticSummaries",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
