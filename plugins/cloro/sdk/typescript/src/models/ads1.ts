import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { price6Schema, type Price6 } from "./price6.js";

export type Ads1 = {
  /** Ad product title */
  title?: string;
  /** Ad click-through URL */
  url?: string;
  /** Position index of the ad */
  position?: number;
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
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ads1Properties: s.Shape<Ads1> = {
  title: s.optional(s.string()),
  url: s.optional(s.string()),
  position: s.optional(s.int()),
  price: s.optional(s.lazy(() => price6Schema)),
  store: s.optional(s.string()),
  rating: s.optional(s.float64()),
  reviews: s.optional(s.string()),
  redirectLink: s.optional(s.string()),
};

export const ads1InternalSchema: Schema<Ads1> = s.object<Ads1>(ads1Properties, {
  additionalProperties: s.json(),
});

export const ads1Schema: Schema<Ads1> = s.lazySchema(() =>
  s.object<Ads1>(
    {
      ...ads1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
