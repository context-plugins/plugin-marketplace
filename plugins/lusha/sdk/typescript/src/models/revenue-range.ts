import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RevenueRange = {
  min?: number;
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const revenueRangeSchema: Schema<RevenueRange> = s.object<RevenueRange>(
  {
    min: s.optional(s.float64()),
    max: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
