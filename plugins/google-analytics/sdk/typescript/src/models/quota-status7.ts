import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Analytics Properties can use up to 35% of their tokens per project per hour. This amounts to
 * standard Analytics Properties can use up to 14,000 tokens per project per hour, and Analytics 360
 * Properties can use 140,000 tokens per project per hour. An API request consumes a single number
 * of tokens, and that number is deducted from all of the hourly, daily, and per project hourly
 * quotas.
 */
export type QuotaStatus7 = {
  /** Quota remaining after this request. */
  remaining?: number;
  /** Quota consumed by this request. */
  consumed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quotaStatus7Schema: Schema<QuotaStatus7> = s.object<QuotaStatus7>(
  {
    remaining: s.optional(s.int()),
    consumed: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
