import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Plan = {
  id?: string;
  creditsPerCycle?: number;
  rateLimitPerMinute?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const planSchema: Schema<Plan> = s.object<Plan>(
  {
    id: s.optional(s.string()),
    creditsPerCycle: s.optional(s.int()),
    rateLimitPerMinute: s.optional(s.int()),
    _keysMap: {
      creditsPerCycle: "credits_per_cycle",
      rateLimitPerMinute: "rate_limit_per_minute",
    },
  },
  { additionalProperties: s.json() },
);
