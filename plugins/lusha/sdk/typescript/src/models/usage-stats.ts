import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsageStats = {
  used: number;
  total: number;
  remaining: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageStatsSchema: Schema<UsageStats> = s.object<UsageStats>(
  {
    used: s.float64(),
    total: s.float64(),
    remaining: s.float64(),
  },
  { additionalProperties: s.json() },
);
