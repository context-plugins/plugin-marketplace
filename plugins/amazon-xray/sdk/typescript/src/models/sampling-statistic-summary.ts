import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SamplingStatisticSummary = {
  /** The name of the sampling rule. */
  ruleName?: string;
  /** The start time of the reporting window. */
  timestamp?: Date;
  /** The number of requests that matched the rule. */
  requestCount?: number;
  /** The number of requests recorded with borrowed reservoir quota. */
  borrowCount?: number;
  /** The number of requests recorded. */
  sampledCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingStatisticSummarySchema: Schema<SamplingStatisticSummary> =
  s.object<SamplingStatisticSummary>(
    {
      ruleName: s.optional(s.string()),
      timestamp: s.optional(s.dateTime()),
      requestCount: s.optional(s.int()),
      borrowCount: s.optional(s.int()),
      sampledCount: s.optional(s.int()),
      _keysMap: {
        ruleName: "RuleName",
        timestamp: "Timestamp",
        requestCount: "RequestCount",
        borrowCount: "BorrowCount",
        sampledCount: "SampledCount",
      },
    },
    { additionalProperties: s.json() },
  );
