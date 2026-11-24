import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Standard Analytics Properties can use up to 40,000 tokens per hour; Analytics 360 Properties can
 * use 400,000 tokens per hour. An API request consumes a single number of tokens, and that number
 * is deducted from all of the hourly, daily, and per project hourly quotas.
 */
export type QuotaStatus5 = {
  /** Quota remaining after this request. */
  remaining?: number;
  /** Quota consumed by this request. */
  consumed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quotaStatus5Schema: Schema<QuotaStatus5> = s.object<QuotaStatus5>(
  {
    remaining: s.optional(s.int()),
    consumed: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
