import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorStatistics = {
  /** The number of requests that failed with a 429 throttling status code. */
  throttleCount?: number;
  /** The number of requests that failed with untracked 4xx Client Error status codes. */
  otherCount?: number;
  /** The total number of requests that failed with a 4xx Client Error status code. */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorStatisticsSchema: Schema<ErrorStatistics> = s.object<ErrorStatistics>(
  {
    throttleCount: s.optional(s.int()),
    otherCount: s.optional(s.int()),
    totalCount: s.optional(s.int()),
    _keysMap: {
      throttleCount: "ThrottleCount",
      otherCount: "OtherCount",
      totalCount: "TotalCount",
    },
  },
  { additionalProperties: s.json() },
);
