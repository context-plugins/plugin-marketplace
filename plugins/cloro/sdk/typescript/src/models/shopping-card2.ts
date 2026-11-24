import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { product2Schema, type Product2 } from "./product2.js";

export type ShoppingCard2 = {
  /** Optional category tags for the shopping card */
  tags?: string[];
  /** Array of product objects */
  products?: Product2[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shoppingCard2Schema: Schema<ShoppingCard2> = s.object<ShoppingCard2>(
  {
    tags: s.optional(s.array(s.string())),
    products: s.optional(s.array(s.lazy(() => product2Schema))),
  },
  { additionalProperties: s.json() },
);
