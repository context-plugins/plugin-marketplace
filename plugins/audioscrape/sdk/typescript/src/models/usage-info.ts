import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsageInfo = {
  /** Current usage value (e.g., calls consumed this period). */
  current: number;
  /** Configured limit for the period. */
  limit: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageInfoSchema: Schema<UsageInfo> = s.object<UsageInfo>(
  {
    current: s.int(),
    limit: s.int(),
  },
  { additionalProperties: s.json() },
);
