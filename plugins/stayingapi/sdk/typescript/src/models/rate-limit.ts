import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RateLimit = {
  /** Per-plan rate limit (requests/minute). */
  requestsPerMinute: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const rateLimitProperties: s.Shape<RateLimit> = {
  requestsPerMinute: s.int(),
};

export const rateLimitInternalSchema: Schema<RateLimit> = s.object<RateLimit>(rateLimitProperties, {
  additionalProperties: s.json(),
});

export const rateLimitSchema: Schema<RateLimit> = s.lazySchema(() =>
  s.object<RateLimit>(
    {
      ...rateLimitProperties,
      requestsPerMinute: s.int().check(s.gte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
