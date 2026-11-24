import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AgeRange = {
  /** The lowest estimated age. */
  low?: number;
  /** The highest estimated age. */
  high?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ageRangeSchema: Schema<AgeRange> = s.object<AgeRange>(
  {
    low: s.optional(s.int()),
    high: s.optional(s.int()),
    _keysMap: {
      low: "Low",
      high: "High",
    },
  },
  { additionalProperties: s.json() },
);
