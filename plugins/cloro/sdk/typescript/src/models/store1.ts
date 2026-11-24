import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { price2Schema, type Price2 } from "./price2.js";

export type Store1 = {
  /** Merchant name */
  name: string;
  /** Merchant product URL, passed through from Google verbatim */
  link?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect. The sibling link field holds
   * the destination cloro resolved it to, or is empty, missing or a `google.com/goto` URL when the
   * link is not resolved yet. In that case, resolve this value with `POST /v1/monitor/google/goto`.
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

const store1Properties: s.Shape<Store1> = {
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

export const store1InternalSchema: Schema<Store1> = s.object<Store1>(store1Properties, {
  additionalProperties: s.json(),
});

export const store1Schema: Schema<Store1> = s.lazySchema(() =>
  s.object<Store1>(
    {
      ...store1Properties,
      link: s.optional(s.string().check(s.url())),
      logo: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
