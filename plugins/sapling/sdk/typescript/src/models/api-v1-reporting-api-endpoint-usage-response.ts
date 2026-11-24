import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1ReportingApiEndpointUsageResponse = {
  data?: Record<string, unknown>;
  /** ISO timestamp, or null. */
  lastUpdated?: Record<string, unknown>;
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportingApiEndpointUsageResponseSchema: Schema<ApiV1ReportingApiEndpointUsageResponse> =
  s.object<ApiV1ReportingApiEndpointUsageResponse>(
    {
      data: s.optional(s.record(s.string(), s.unknown())),
      lastUpdated: s.optional(s.record(s.string(), s.unknown())),
      usage: s.optional(s.lazy(() => usageSchema)),
      _keysMap: {
        lastUpdated: "last_updated",
      },
    },
    { additionalProperties: s.json() },
  );
