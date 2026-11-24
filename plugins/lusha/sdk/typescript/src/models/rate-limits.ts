import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rateLimitTierSchema, type RateLimitTier } from "./rate-limit-tier.js";

export type RateLimits = {
  daily?: RateLimitTier;
  hourly?: RateLimitTier;
  minute?: RateLimitTier;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimitsSchema: Schema<RateLimits> = s.object<RateLimits>(
  {
    daily: s.optional(s.lazy(() => rateLimitTierSchema)),
    hourly: s.optional(s.lazy(() => rateLimitTierSchema)),
    minute: s.optional(s.lazy(() => rateLimitTierSchema)),
  },
  { additionalProperties: s.json() },
);
