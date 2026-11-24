import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oldPrice5Schema, type OldPrice5 } from "./old-price5.js";
import { price8Schema, type Price8 } from "./price8.js";

export type InlineProduct32 = {
  /** Product title */
  title?: string;
  /** 1-indexed rank across the `inlineProducts` array in DOM/render order. */
  position?: number;
  /**
   * Price as displayed. Fields that can't be parsed are omitted, never sent as `null`. When Google
   * supplies structured price data, `currency` is an ISO code (`USD`) and `raw` appears only if the
   * page also showed the price text.
   */
  price?: Price8;
  /** Original price before discount. Same shape as `price`. */
  oldPrice?: OldPrice5;
  /** Merchant/store name */
  store?: string;
  /** Product image URL */
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const inlineProduct32Properties: s.Shape<InlineProduct32> = {
  title: s.optional(s.string()),
  position: s.optional(s.int()),
  price: s.optional(s.lazy(() => price8Schema)),
  oldPrice: s.optional(s.lazy(() => oldPrice5Schema)),
  store: s.optional(s.string()),
  thumbnail: s.optional(s.string()),
  productLink: s.optional(s.string()),
  productResultToken: s.optional(s.string()),
  productDocid: s.optional(s.string()),
};

export const inlineProduct32InternalSchema: Schema<InlineProduct32> = s.object<InlineProduct32>(
  inlineProduct32Properties,
  { additionalProperties: s.json() },
);

export const inlineProduct32Schema: Schema<InlineProduct32> = s.lazySchema(() =>
  s.object<InlineProduct32>(
    {
      ...inlineProduct32Properties,
      thumbnail: s.optional(s.string().check(s.url())),
      productLink: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
