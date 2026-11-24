import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oldPrice3Schema, type OldPrice3 } from "./old-price3.js";
import { price5Schema, type Price5 } from "./price5.js";

export type ShoppingCard6 = {
  /** Product title */
  title: string;
  /**
   * 1-indexed rank across the whole `shoppingCards` array in DOM order (flat, does not reset per
   * `category` section).
   */
  position: number;
  /**
   * Token for `POST /v1/monitor/google/product`, which returns the product panel that this card
   * opens. Expires five minutes after the scrape. Present only on `device: "desktop"` requests, on
   * first-page cards that Google serves with a panel reference.
   */
  productResultToken?: string;
  /**
   * Discount badge as displayed by Google, in the SERP language (for example "LOW PRICE", "OFERTA",
   * "PROMOÇÃO", "20% OFF"). Google renders it above the product name on a discounted card. Present
   * only on a card that carries the badge, and Google-only — AI Mode does not render it.
   */
  promoLabel?: string;
  /**
   * Parent section header text. Lets callers distinguish cards from coexisting shopping panels on
   * the same SERP. Current Google-emitted values include "Popular products" and "More products".
   */
  category?: string;
  /**
   * Structured pricing information. `currency` and `raw` are always present; `value` is omitted
   * when the number doesn't parse, and the whole object is omitted when no currency appears beside
   * a number. `raw` carries the visible text verbatim.
   */
  price?: Price5;
  /** Original price before discount. Same shape as `price`. */
  oldPrice?: OldPrice3;
  /** Merchant/store name */
  store?: string;
  /** Product rating */
  rating?: number;
  /** Review count */
  reviews?: string;
  /** Product image URL */
  thumbnail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shoppingCard6Properties: s.Shape<ShoppingCard6> = {
  title: s.string(),
  position: s.int(),
  productResultToken: s.optional(s.string()),
  promoLabel: s.optional(s.string()),
  category: s.optional(s.string()),
  price: s.optional(s.lazy(() => price5Schema)),
  oldPrice: s.optional(s.lazy(() => oldPrice3Schema)),
  store: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.string()),
  thumbnail: s.optional(s.string()),
};

export const shoppingCard6InternalSchema: Schema<ShoppingCard6> = s.object<ShoppingCard6>(
  shoppingCard6Properties,
  { additionalProperties: s.json() },
);

export const shoppingCard6Schema: Schema<ShoppingCard6> = s.lazySchema(() =>
  s.object<ShoppingCard6>(
    {
      ...shoppingCard6Properties,
      thumbnail: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
