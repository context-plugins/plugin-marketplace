import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditsUsage = {
  total?: number;
  used?: number;
  remaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditsUsageSchema: Schema<CreditsUsage> = s.object<CreditsUsage>(
  {
    total: s.optional(s.float64()),
    used: s.optional(s.float64()),
    remaining: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
