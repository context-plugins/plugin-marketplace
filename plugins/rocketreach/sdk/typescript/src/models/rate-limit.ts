import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RateLimit = {
  /** The credit action being rate limited */
  action?: string;
  /** The duration of the rate limit window */
  duration?: string;
  /** The maximum number of requests allowed */
  limit?: number | null;
  /** The number of requests used in the current window */
  used?: number;
  /** The number of requests remaining in the current window */
  remaining?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimitSchema: Schema<RateLimit> = s.object<RateLimit>(
  {
    action: s.optional(s.string()),
    duration: s.optional(s.string()),
    limit: s.optionalNullable(s.int()),
    used: s.optional(s.int()),
    remaining: s.optionalNullable(s.int()),
  },
  { additionalProperties: s.json() },
);
