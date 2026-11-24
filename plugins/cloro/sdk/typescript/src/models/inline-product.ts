import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { renderAsSchema, type RenderAs } from "./render-as.js";
import { shoppingProductSchema, type ShoppingProduct } from "./shopping-product.js";

/** Inline product reference that appeared in the response text, including pricing and offers */
export type InlineProduct = {
  /** Individual product information */
  product?: ShoppingProduct;
  /** How the product is rendered in the response */
  renderAs?: RenderAs;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inlineProductSchema: Schema<InlineProduct> = s.object<InlineProduct>(
  {
    product: s.optional(s.lazy(() => shoppingProductSchema)),
    renderAs: s.optional(s.lazy(() => renderAsSchema)),
    _keysMap: {
      renderAs: "render_as",
    },
  },
  { additionalProperties: s.json() },
);
