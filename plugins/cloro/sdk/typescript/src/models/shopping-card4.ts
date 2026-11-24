import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oldPrice4Schema, type OldPrice4 } from "./old-price4.js";
import { price6Schema, type Price6 } from "./price6.js";
import { snippetLinkInternalSchema, snippetLinkSchema, type SnippetLink } from "./snippet-link.js";

export type ShoppingCard4 = {
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
  /** Original price before discount. Same shape as `price`. */
  oldPrice?: OldPrice4;
  /** Product description snippet */
  snippet?: string;
  /** Links found within the product snippet */
  snippetLinks?: SnippetLink[];
  /** 1-indexed rank across the `shoppingCards` array in DOM/render order. */
  position?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shoppingCard4Properties: s.Shape<ShoppingCard4> = {
  title: s.optional(s.string()),
  price: s.optional(s.lazy(() => price6Schema)),
  store: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.string()),
  thumbnail: s.optional(s.string()),
  productLink: s.optional(s.string()),
  oldPrice: s.optional(s.lazy(() => oldPrice4Schema)),
  snippet: s.optional(s.string()),
  snippetLinks: s.optional(s.array(s.lazy(() => snippetLinkInternalSchema))),
  position: s.optional(s.int()),
};

export const shoppingCard4InternalSchema: Schema<ShoppingCard4> = s.object<ShoppingCard4>(
  shoppingCard4Properties,
  { additionalProperties: s.json() },
);

export const shoppingCard4Schema: Schema<ShoppingCard4> = s.lazySchema(() =>
  s.object<ShoppingCard4>(
    {
      ...shoppingCard4Properties,
      thumbnail: s.optional(s.string().check(s.url())),
      productLink: s.optional(s.string().check(s.url())),
      snippetLinks: s.optional(s.array(s.lazy(() => snippetLinkSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
