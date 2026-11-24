import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { oldPrice5Schema, type OldPrice5 } from "./old-price5.js";
import { price8Schema, type Price8 } from "./price8.js";

export type InlineProduct1 = {
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const inlineProduct1Properties: s.Shape<InlineProduct1> = {
  title: s.optional(s.string()),
  position: s.optional(s.int()),
  price: s.optional(s.lazy(() => price8Schema)),
  oldPrice: s.optional(s.lazy(() => oldPrice5Schema)),
  store: s.optional(s.string()),
  thumbnail: s.optional(s.string()),
  productLink: s.optional(s.string()),
};

export const inlineProduct1InternalSchema: Schema<InlineProduct1> = s.object<InlineProduct1>(
  inlineProduct1Properties,
  { additionalProperties: s.json() },
);

export const inlineProduct1Schema: Schema<InlineProduct1> = s.lazySchema(() =>
  s.object<InlineProduct1>(
    {
      ...inlineProduct1Properties,
      thumbnail: s.optional(s.string().check(s.url())),
      productLink: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
