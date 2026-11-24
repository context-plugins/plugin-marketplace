import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FaultStatistics = {
  /** The number of requests that failed with untracked 5xx Server Error status codes. */
  otherCount?: number;
  /** The total number of requests that failed with a 5xx Server Error status code. */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const faultStatisticsSchema: Schema<FaultStatistics> = s.object<FaultStatistics>(
  {
    otherCount: s.optional(s.int()),
    totalCount: s.optional(s.int()),
    _keysMap: {
      otherCount: "OtherCount",
      totalCount: "TotalCount",
    },
  },
  { additionalProperties: s.json() },
);
