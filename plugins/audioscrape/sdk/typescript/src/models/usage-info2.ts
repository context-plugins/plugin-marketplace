import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Present on rate-limit / quota errors. Omitted otherwise. */
export type UsageInfo2 = {
  /** Current usage value (e.g., calls consumed this period). */
  current: number;
  /** Configured limit for the period. */
  limit: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageInfo2Schema: Schema<UsageInfo2> = s.object<UsageInfo2>(
  {
    current: s.int(),
    limit: s.int(),
  },
  { additionalProperties: s.json() },
);
