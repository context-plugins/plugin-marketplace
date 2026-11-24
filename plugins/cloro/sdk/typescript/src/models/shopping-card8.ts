import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oldPrice4Schema, type OldPrice4 } from "./old-price4.js";
import { price6Schema, type Price6 } from "./price6.js";
import { snippetLink1InternalSchema, snippetLink1Schema, type SnippetLink1 } from "./snippet-link1.js";

export type ShoppingCard8 = {
  /** Product title */
  title?: string;
  /**
   * Price as displayed. `raw` is always present; `value` and `currency` are omitted when they can't
   * be parsed, never sent as `null`.
   */
  price?: Price6;
  /** Merchant/store name */
  store?: string;
  /** Product rating */
  rating?: number;
  /** Review count */
  reviews?: string;
  /** Product image */
  thumbnail?: string;
  /** Direct product URL */
  productLink?: string;
  /**
   * Token for [`POST /v1/monitor/google/product`](/api-reference/endpoint/google/product), which
   * returns the product panel that this product opens. Expires five minutes after the scrape.
   * Present only when the product links to a Google product panel.
   */
  productResultToken?: string;
  /**
   * Google's ID for the product, read from `productLink`. The same product has the same value in
   * `shoppingCards`, `inlineProducts` and `productResults` of one response. Google can change the
   * value between responses, so do not use it to identify a product over time. Absent when the link
   * from Google has no ID.
   */
  productDocid?: string;
  /** Original price before discount. Same shape as `price`. */
  oldPrice?: OldPrice4;
  /** Product description snippet */
  snippet?: string;
  /** Links found within the product snippet */
  snippetLinks?: SnippetLink1[];
  /** 1-indexed rank across the `shoppingCards` array in DOM/render order. */
  position?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shoppingCard8Properties: s.Shape<ShoppingCard8> = {
  title: s.optional(s.string()),
  price: s.optional(s.lazy(() => price6Schema)),
  store: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.string()),
  thumbnail: s.optional(s.string()),
  productLink: s.optional(s.string()),
  productResultToken: s.optional(s.string()),
  productDocid: s.optional(s.string()),
  oldPrice: s.optional(s.lazy(() => oldPrice4Schema)),
  snippet: s.optional(s.string()),
  snippetLinks: s.optional(s.array(s.lazy(() => snippetLink1InternalSchema))),
  position: s.optional(s.int()),
};

export const shoppingCard8InternalSchema: Schema<ShoppingCard8> = s.object<ShoppingCard8>(
  shoppingCard8Properties,
  { additionalProperties: s.json() },
);

export const shoppingCard8Schema: Schema<ShoppingCard8> = s.lazySchema(() =>
  s.object<ShoppingCard8>(
    {
      ...shoppingCard8Properties,
      thumbnail: s.optional(s.string().check(s.url())),
      productLink: s.optional(s.string().check(s.url())),
      snippetLinks: s.optional(s.array(s.lazy(() => snippetLink1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
