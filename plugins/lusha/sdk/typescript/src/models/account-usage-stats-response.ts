import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageStatsSchema, type UsageStats } from "./usage-stats.js";

export type AccountUsageStatsResponse = {
  usage: Record<string, UsageStats>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountUsageStatsResponseSchema: Schema<AccountUsageStatsResponse> =
  s.object<AccountUsageStatsResponse>(
    {
      usage: s.record(
        s.string(),
        s.lazy(() => usageStatsSchema),
      ),
    },
    { additionalProperties: s.json() },
  );
