import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blockPositionSchema, type BlockPosition } from "./block-position.js";
import { oldPrice1Schema, type OldPrice1 } from "./old-price1.js";
import { price3Schema, type Price3 } from "./price3.js";
import { sitelinks1InternalSchema, sitelinks1Schema, type Sitelinks1 } from "./sitelinks1.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Ad = {
  /** Position within the ad block (1-indexed) */
  position?: number;
  /**
   * Where the ad appeared on the SERP. `top`/`bottom` are text-ad blocks, `middle` covers
   * direct/in-content ads, `rhs` is the right-hand-side sponsored-products carousel.
   */
  blockPosition?: BlockPosition;
  /**
   * Discriminates plain text ads (`RESULT`) from shopping-style sponsored cards (`SHOPPING_CARD`).
   * Shopping cards appear in the right-hand-side PLA carousel, the top-of-page PLA carousel, and
   * the top-of-page sponsored shopping-card carousels (vehicles, products, hotels, …).
   */
  type?: Type1;
  /** Ad title */
  title?: string;
  /**
   * Destination URL of the ad. For `type: SHOPPING_CARD` items this is a Google `aclk?`-redirected
   * URL.
   */
  url?: string;
  /** Page number where the ad was found */
  page?: number;
  /** Formatted URL as displayed in the ad */
  displayedUrl?: string;
  /** Domain name of the advertiser */
  domain?: string;
  /**
   * Ad description text. For `type: RESULT` items this is classic ad copy. For `type:
   * SHOPPING_CARD` items it carries category-specific subtitle fragments joined with `·` (e.g.
   * vehicle condition + city: `Used - 94k miles · Greeley`).
   */
  description?: string;
  /**
   * Carousel header label for shopping-card ads. Examples observed today include `Sponsored
   * products`, `Sponsored vehicles`, and `Sponsored hotels`. Omitted for `type: RESULT` text ads.
   */
  category?: string;
  /**
   * Product price for `type: SHOPPING_CARD` ads. `currency` and `raw` are always present; `value`
   * is omitted when the number doesn't parse, and the whole object is omitted when no currency
   * appears beside a number. `raw` carries the visible text verbatim (e.g. `"$0 down with 24
   * monthly payments"` on installment offers) so consumers can disambiguate genuine zero prices
   * from down-payment labels.
   */
  price?: Price3;
  /**
   * Original price before discount on `type: SHOPPING_CARD` ads that surface MSRP / sale messaging.
   * Same shape as `price`.
   */
  oldPrice?: OldPrice1;
  /** Merchant/dealer name attached to a `type: SHOPPING_CARD` ad. */
  store?: string;
  /**
   * Hero image URL served by Google's `encrypted-tbn` CDN for `type: SHOPPING_CARD` ads. Omitted
   * when the lazy-image chain cannot resolve a non-placeholder source.
   */
  imageUrl?: string;
  /** Sitelinks displayed under the ad */
  sitelinks?: Sitelinks1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adProperties: s.Shape<Ad> = {
  position: s.optional(s.float64()),
  blockPosition: s.optional(s.lazy(() => blockPositionSchema)),
  type: s.optional(s.lazy(() => type1Schema)),
  title: s.optional(s.string()),
  url: s.optional(s.string()),
  page: s.optional(s.float64()),
  displayedUrl: s.optional(s.string()),
  domain: s.optional(s.string()),
  description: s.optional(s.string()),
  category: s.optional(s.string()),
  price: s.optional(s.lazy(() => price3Schema)),
  oldPrice: s.optional(s.lazy(() => oldPrice1Schema)),
  store: s.optional(s.string()),
  imageUrl: s.optional(s.string()),
  sitelinks: s.optional(s.array(s.lazy(() => sitelinks1InternalSchema))),
};

export const adInternalSchema: Schema<Ad> = s.object<Ad>(adProperties, { additionalProperties: s.json() });

export const adSchema: Schema<Ad> = s.lazySchema(() =>
  s.object<Ad>(
    {
      ...adProperties,
      url: s.optional(s.string().check(s.url())),
      imageUrl: s.optional(s.string().check(s.url())),
      sitelinks: s.optional(s.array(s.lazy(() => sitelinks1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
