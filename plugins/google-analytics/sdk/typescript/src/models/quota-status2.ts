import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Standard Analytics Properties can use up to 200,000 tokens per day; Analytics 360 Properties can
 * use 2,000,000 tokens per day. Most requests consume fewer than 10 tokens.
 */
export type QuotaStatus2 = {
  /** Quota remaining after this request. */
  remaining?: number;
  /** Quota consumed by this request. */
  consumed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quotaStatus2Schema: Schema<QuotaStatus2> = s.object<QuotaStatus2>(
  {
    remaining: s.optional(s.int()),
    consumed: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
