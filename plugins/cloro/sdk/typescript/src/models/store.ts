import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { price2Schema, type Price2 } from "./price2.js";

export type Store = {
  /** Merchant name */
  name: string;
  /** Merchant product URL, passed through from Google verbatim */
  link?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Offer price. Omitted when the displayed text can't be parsed. */
  price?: Price2;
  /** Installment terms as displayed */
  installments?: string;
  /** Merchant's listing title, naming the exact SKU sold */
  description?: string;
  /** Merchant badges in display order, such as stock status, delivery promise and returns window */
  buyingOptions?: string[];
  /** Merchant logo URL */
  logo?: string;
  /** Shipping cost or promise as displayed */
  shipping?: string;
  /** Item condition */
  condition?: string;
  /** Merchant rating */
  rating?: number;
  /** Merchant review count, abbreviated */
  reviews?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storeProperties: s.Shape<Store> = {
  name: s.string(),
  link: s.optional(s.string()),
  redirectLink: s.optional(s.string()),
  price: s.optional(s.lazy(() => price2Schema)),
  installments: s.optional(s.string()),
  description: s.optional(s.string()),
  buyingOptions: s.optional(s.array(s.string())),
  logo: s.optional(s.string()),
  shipping: s.optional(s.string()),
  condition: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.string()),
};

export const storeInternalSchema: Schema<Store> = s.object<Store>(storeProperties, {
  additionalProperties: s.json(),
});

export const storeSchema: Schema<Store> = s.lazySchema(() =>
  s.object<Store>(
    {
      ...storeProperties,
      link: s.optional(s.string().check(s.url())),
      logo: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
