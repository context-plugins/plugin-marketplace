import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrendingProduct = {
  /** Product title */
  title?: string;
  /** Price as displayed */
  price?: string;
  /** Link to the product */
  link?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trendingProductSchema: Schema<TrendingProduct> = s.object<TrendingProduct>(
  {
    title: s.optional(s.string()),
    price: s.optional(s.string()),
    link: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
