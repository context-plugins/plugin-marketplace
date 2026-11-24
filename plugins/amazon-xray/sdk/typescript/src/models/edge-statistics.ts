import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorStatisticsSchema, type ErrorStatistics } from "./error-statistics.js";
import { faultStatisticsSchema, type FaultStatistics } from "./fault-statistics.js";

export type EdgeStatistics = {
  /** The number of requests that completed with a 2xx Success status code. */
  okCount?: number;
  errorStatistics?: ErrorStatistics;
  faultStatistics?: FaultStatistics;
  /** The total number of completed requests. */
  totalCount?: number;
  /** The aggregate response time of completed requests. */
  totalResponseTime?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const edgeStatisticsSchema: Schema<EdgeStatistics> = s.object<EdgeStatistics>(
  {
    okCount: s.optional(s.int()),
    errorStatistics: s.optional(s.lazy(() => errorStatisticsSchema)),
    faultStatistics: s.optional(s.lazy(() => faultStatisticsSchema)),
    totalCount: s.optional(s.int()),
    totalResponseTime: s.optional(s.float64()),
    _keysMap: {
      okCount: "OkCount",
      errorStatistics: "ErrorStatistics",
      faultStatistics: "FaultStatistics",
      totalCount: "TotalCount",
      totalResponseTime: "TotalResponseTime",
    },
  },
  { additionalProperties: s.json() },
);
