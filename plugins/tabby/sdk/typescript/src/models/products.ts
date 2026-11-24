import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkoutProductSchema, type CheckoutProduct } from "./checkout-product.js";

/** Products and theirs availability */
export type Products = {
  installments?: CheckoutProduct;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const productsSchema: Schema<Products> = s.object<Products>(
  {
    installments: s.optional(s.lazy(() => checkoutProductSchema)),
  },
  { additionalProperties: s.json() },
);
