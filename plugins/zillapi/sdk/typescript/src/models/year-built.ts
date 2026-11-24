import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type YearBuilt = {
  min?: number;
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const yearBuiltSchema: Schema<YearBuilt> = s.object<YearBuilt>(
  {
    min: s.optional(s.int()),
    max: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
