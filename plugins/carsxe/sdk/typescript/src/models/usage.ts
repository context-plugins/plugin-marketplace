import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Usage = {
  /** Current usage in the billing period. */
  current?: number;
  /** Included quota for the billing period. */
  limit?: number;
  /** Remaining included quota. */
  remaining?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSchema: Schema<Usage> = s.object<Usage>(
  {
    current: s.optional(s.float64()),
    limit: s.optional(s.float64()),
    remaining: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
