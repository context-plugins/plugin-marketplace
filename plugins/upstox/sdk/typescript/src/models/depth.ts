import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Depth = {
  /** quantity */
  quantity?: number;
  /** price */
  price?: number;
  /** orders */
  orders?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const depthSchema: Schema<Depth> = s.object<Depth>(
  {
    quantity: s.optional(s.int()),
    price: s.optional(s.float64()),
    orders: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
