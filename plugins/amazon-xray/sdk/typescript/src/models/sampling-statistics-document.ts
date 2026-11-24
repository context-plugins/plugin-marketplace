import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SamplingStatisticsDocument = {
  /** The name of the sampling rule. */
  ruleName: string;
  /** A unique identifier for the service in hexadecimal. */
  clientId: string;
  /** The current time. */
  timestamp: Date;
  /** The number of requests that matched the rule. */
  requestCount: number;
  /** The number of requests recorded. */
  sampledCount: number;
  /** The number of requests recorded with borrowed reservoir quota. */
  borrowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingStatisticsDocumentSchema: Schema<SamplingStatisticsDocument> =
  s.object<SamplingStatisticsDocument>(
    {
      ruleName: s.string(),
      clientId: s.string(),
      timestamp: s.dateTime(),
      requestCount: s.int(),
      sampledCount: s.int(),
      borrowCount: s.optional(s.int()),
      _keysMap: {
        ruleName: "RuleName",
        clientId: "ClientID",
        timestamp: "Timestamp",
        requestCount: "RequestCount",
        sampledCount: "SampledCount",
        borrowCount: "BorrowCount",
      },
    },
    { additionalProperties: s.json() },
  );
