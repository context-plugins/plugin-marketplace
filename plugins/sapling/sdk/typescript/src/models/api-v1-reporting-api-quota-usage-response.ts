import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportingApiQuotaUsageResponse = {
  accepts?: number;
  ignores?: number;
  /** Unix epoch seconds. Falls back to 24h ago when no aggregation timestamp is cached. */
  lastUpdated?: number;
  quota?: number;
  usage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportingApiQuotaUsageResponseSchema: Schema<ApiV1ReportingApiQuotaUsageResponse> =
  s.object<ApiV1ReportingApiQuotaUsageResponse>(
    {
      accepts: s.optional(s.int()),
      ignores: s.optional(s.int()),
      lastUpdated: s.optional(s.float64()),
      quota: s.optional(s.int()),
      usage: s.optional(s.int()),
      _keysMap: {
        lastUpdated: "last_updated",
      },
    },
    { additionalProperties: s.json() },
  );
