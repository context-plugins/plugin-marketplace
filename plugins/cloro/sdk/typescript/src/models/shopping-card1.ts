import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oldPriceSchema, type OldPrice } from "./old-price.js";
import { price1Schema, type Price1 } from "./price1.js";

export type ShoppingCard1 = {
  /** 1-indexed rank across the `shoppingCards` array, in display order */
  position: number;
  /** Product title */
  title: string;
  /** Google Shopping URL for the product */
  productLink: string;
  /** Google Shopping product ID */
  productId: string;
  /**
   * Current price. For a range, `value` is the lowest price. For an installment offer, only `raw`
   * is present
   */
  price?: Price1;
  /** Price before a discount, same shape as `price`. Absent when there is no discount */
  oldPrice?: OldPrice;
  /** Store that sells the product at `price` */
  store?: string;
  /** Direct URL of the product on the store's site */
  storeLink?: string;
  /**
   * Number of stores that sell the product. Gemini shows "& more" after the store name when it is
   * above 1
   */
  storeCount?: number;
  /** Shipping cost as Gemini displays it */
  shipping?: string;
  /** Delivery time as Gemini displays it */
  deliveryTime?: string;
  /** Product rating (0-5). Absent for a product with no reviews */
  rating?: number;
  /** Number of reviews */
  reviews?: number;
  /** Product brand */
  brand?: string;
  /** Product description */
  description?: string;
  /** Image URL that the card shows */
  thumbnail?: string;
  /** All product image URLs. The first one is `thumbnail` */
  images?: string[];
  /** Google Shopping catalog ID */
  catalogId?: string;
  /** Google Shopping product cluster ID */
  gpcId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const shoppingCard1Properties: s.Shape<ShoppingCard1> = {
  position: s.int(),
  title: s.string(),
  productLink: s.string(),
  productId: s.string(),
  price: s.optional(s.lazy(() => price1Schema)),
  oldPrice: s.optional(s.lazy(() => oldPriceSchema)),
  store: s.optional(s.string()),
  storeLink: s.optional(s.string()),
  storeCount: s.optional(s.int()),
  shipping: s.optional(s.string()),
  deliveryTime: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.int()),
  brand: s.optional(s.string()),
  description: s.optional(s.string()),
  thumbnail: s.optional(s.string()),
  images: s.optional(s.array(s.string())),
  catalogId: s.optional(s.string()),
  gpcId: s.optional(s.string()),
};

export const shoppingCard1InternalSchema: Schema<ShoppingCard1> = s.object<ShoppingCard1>(
  shoppingCard1Properties,
  { additionalProperties: s.json() },
);

export const shoppingCard1Schema: Schema<ShoppingCard1> = s.lazySchema(() =>
  s.object<ShoppingCard1>(
    {
      ...shoppingCard1Properties,
      productLink: s.string().check(s.url()),
      storeLink: s.optional(s.string().check(s.url())),
      thumbnail: s.optional(s.string().check(s.url())),
      images: s.optional(s.array(s.string().check(s.url()))),
    },
    { additionalProperties: s.json() },
  ),
);
