import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UsageCounter = {
  /** Configured plan limit for the period. `null` if unlimited. */
  limit?: number | null;
  /** Count used in the current period. */
  used: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageCounterSchema: Schema<UsageCounter> = s.object<UsageCounter>(
  {
    limit: s.optionalNullable(s.int()),
    used: s.int(),
  },
  { additionalProperties: s.json() },
);
