import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Tier = {
  lowerBound?: number;
  upperBound?: number;
  price?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tierSchema: Schema<Tier> = s.object<Tier>(
  {
    lowerBound: s.optional(s.float64()),
    upperBound: s.optional(s.float64()),
    price: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
