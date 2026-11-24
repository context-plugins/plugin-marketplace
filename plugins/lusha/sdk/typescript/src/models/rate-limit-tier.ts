import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RateLimitTier = {
  limit?: number;
  used?: number;
  remaining?: number;
  resetsAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimitTierSchema: Schema<RateLimitTier> = s.object<RateLimitTier>(
  {
    limit: s.optional(s.float64()),
    used: s.optional(s.float64()),
    remaining: s.optional(s.float64()),
    resetsAt: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
