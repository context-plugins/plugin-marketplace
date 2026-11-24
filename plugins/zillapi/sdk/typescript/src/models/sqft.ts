import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Living-area range in square feet. */
export type Sqft = {
  min?: number;
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sqftSchema: Schema<Sqft> = s.object<Sqft>(
  {
    min: s.optional(s.int()),
    max: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
