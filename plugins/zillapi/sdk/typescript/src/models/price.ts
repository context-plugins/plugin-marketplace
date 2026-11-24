import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Price range in dollars. */
export type Price = {
  min?: number;
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceSchema: Schema<Price> = s.object<Price>(
  {
    min: s.optional(s.int()),
    max: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
