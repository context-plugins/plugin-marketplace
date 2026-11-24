import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Bathroom count range. */
export type Baths = {
  min?: number;
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bathsSchema: Schema<Baths> = s.object<Baths>(
  {
    min: s.optional(s.float64()),
    max: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
