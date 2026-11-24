import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Usage = {
  used?: number | null;
  limit?: number | null;
  remaining?: number | null;
  unlimited?: boolean;
  resetsAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageSchema: Schema<Usage> = s.object<Usage>(
  {
    used: s.optionalNullable(s.int()),
    limit: s.optionalNullable(s.int()),
    remaining: s.optionalNullable(s.int()),
    unlimited: s.optional(s.boolean()),
    resetsAt: s.optionalNullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
