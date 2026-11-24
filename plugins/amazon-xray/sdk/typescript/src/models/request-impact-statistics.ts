import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequestImpactStatistics = {
  /** The number of requests that have resulted in a fault, */
  faultCount?: number;
  /** The number of successful requests. */
  okCount?: number;
  /** The total number of requests to the service. */
  totalCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestImpactStatisticsSchema: Schema<RequestImpactStatistics> =
  s.object<RequestImpactStatistics>(
    {
      faultCount: s.optional(s.int()),
      okCount: s.optional(s.int()),
      totalCount: s.optional(s.int()),
      _keysMap: {
        faultCount: "FaultCount",
        okCount: "OkCount",
        totalCount: "TotalCount",
      },
    },
    { additionalProperties: s.json() },
  );
