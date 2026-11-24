import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RateLimiterStatus = {
  /** The maximum number of rate limiters allowed on the connection. */
  maxAllowed?: number;
  /** The number of rate limiters currently in use on the connection. */
  inUse?: number;
  /** The number of rate limiters remaining (available) on the connection. */
  remaining?: number;
  /** The total bandwidth allocated across all rate limiters on the connection. */
  totalBandwidth?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimiterStatusSchema: Schema<RateLimiterStatus> = s.object<RateLimiterStatus>(
  {
    maxAllowed: s.optional(s.int()),
    inUse: s.optional(s.int()),
    remaining: s.optional(s.int()),
    totalBandwidth: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
