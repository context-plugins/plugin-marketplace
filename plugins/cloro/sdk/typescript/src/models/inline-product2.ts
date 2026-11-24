import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { renderAs1Schema, type RenderAs1 } from "./render-as1.js";
import { shoppingProduct2Schema, type ShoppingProduct2 } from "./shopping-product2.js";

/**
 * Inline product reference that appeared in the response text, or a product card of a gpt-6 answer,
 * including pricing and offers
 */
export type InlineProduct2 = {
  /** Individual product information */
  product?: ShoppingProduct2;
  /** How the product is rendered in the response. Absent for a gpt-6 product card. */
  renderAs?: RenderAs1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inlineProduct2Schema: Schema<InlineProduct2> = s.object<InlineProduct2>(
  {
    product: s.optional(s.lazy(() => shoppingProduct2Schema)),
    renderAs: s.optional(s.lazy(() => renderAs1Schema)),
    _keysMap: {
      renderAs: "render_as",
    },
  },
  { additionalProperties: s.json() },
);
