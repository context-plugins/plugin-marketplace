import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProductsLinkResponse = {
  /** The unique URL to the generated shopping list or recipe page on Instacart Marketplace. */
  productsLinkUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const productsLinkResponseProperties: s.Shape<ProductsLinkResponse> = {
  productsLinkUrl: s.optional(s.string()),
  _keysMap: {
    productsLinkUrl: "products_link_url",
  },
};

export const productsLinkResponseInternalSchema: Schema<ProductsLinkResponse> =
  s.object<ProductsLinkResponse>(productsLinkResponseProperties, { additionalProperties: s.json() });

export const productsLinkResponseSchema: Schema<ProductsLinkResponse> = s.lazySchema(() =>
  s.object<ProductsLinkResponse>(
    {
      ...productsLinkResponseProperties,
      productsLinkUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
