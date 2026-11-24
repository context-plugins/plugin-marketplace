import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type ApiV1ReportingApiUsageResponse = {
  byApiKey?: Record<string, unknown>;
  byEndpoint?: Record<string, unknown>;
  currency?: string;
  /** Characters per day. */
  dailyUsage?: Record<string, unknown>;
  endDate?: string;
  /** When usage was last aggregated. */
  lastUpdated?: Record<string, unknown>;
  /** Characters per month. */
  monthlyUsage?: Record<string, unknown>;
  startDate?: string;
  totalCharacters?: number;
  totalCostUsd?: number;
  /**
   * Present only when the request sent return_usage: true. characters is the billable character
   * count the request submitted; see the return_usage request field for the exact semantics.
   */
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportingApiUsageResponseSchema: Schema<ApiV1ReportingApiUsageResponse> =
  s.object<ApiV1ReportingApiUsageResponse>(
    {
      byApiKey: s.optional(s.record(s.string(), s.unknown())),
      byEndpoint: s.optional(s.record(s.string(), s.unknown())),
      currency: s.optional(s.string()),
      dailyUsage: s.optional(s.record(s.string(), s.unknown())),
      endDate: s.optional(s.string()),
      lastUpdated: s.optional(s.record(s.string(), s.unknown())),
      monthlyUsage: s.optional(s.record(s.string(), s.unknown())),
      startDate: s.optional(s.string()),
      totalCharacters: s.optional(s.int()),
      totalCostUsd: s.optional(s.float64()),
      usage: s.optional(s.lazy(() => usageSchema)),
      _keysMap: {
        byApiKey: "by_api_key",
        byEndpoint: "by_endpoint",
        dailyUsage: "daily_usage",
        endDate: "end_date",
        lastUpdated: "last_updated",
        monthlyUsage: "monthly_usage",
        startDate: "start_date",
        totalCharacters: "total_characters",
        totalCostUsd: "total_cost_usd",
      },
    },
    { additionalProperties: s.json() },
  );
