import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { product3Schema, type Product3 } from "./product3.js";

export type ShoppingCard5 = {
  /** Category tags for the shopping card */
  tags?: string[];
  /** Array of product information */
  products?: Product3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shoppingCard5Schema: Schema<ShoppingCard5> = s.object<ShoppingCard5>(
  {
    tags: s.optional(s.array(s.string())),
    products: s.optional(s.array(s.lazy(() => product3Schema))),
  },
  { additionalProperties: s.json() },
);
