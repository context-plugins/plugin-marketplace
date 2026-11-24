import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { adsInternalSchema, adsSchema, type Ads } from "./ads.js";
import { citationPill4Schema, type CitationPill4 } from "./citation-pill4.js";
import {
  googleMapPlaceInternalSchema,
  googleMapPlaceSchema,
  type GoogleMapPlace,
} from "./google-map-place.js";
import { googlePlaceInternalSchema, googlePlaceSchema, type GooglePlace } from "./google-place.js";
import {
  inlineProduct1InternalSchema,
  inlineProduct1Schema,
  type InlineProduct1,
} from "./inline-product1.js";
import { productResultInternalSchema, productResultSchema, type ProductResult } from "./product-result.js";
import { shoppingCard4InternalSchema, shoppingCard4Schema, type ShoppingCard4 } from "./shopping-card4.js";
import { source7Schema, type Source7 } from "./source7.js";
import { video1InternalSchema, video1Schema, type Video1 } from "./video1.js";

/** AI Mode response data */
export type Result5 = {
  /** AI Mode's response text */
  text?: string;
  /** A URL to the full HTML of the response. */
  html?: string;
  /** Array of sources referenced in the response */
  sources?: Source7[];
  /**
   * Inline citation pills extracted from the AI Mode answer. Each entry is one (pill, source) pair:
   * when a pill cites N sources (Google's `[Label +N]` chips), the array contains N entries sharing
   * the same `citationPillId` but carrying per-source `label`, `url`, and `domain`. Group by
   * `citationPillId` to recover the pill-level structure. Omitted from `result` when the answer
   * carries no pills.
   */
  citationPills?: CitationPill4[];
  /**
   * AI Mode's response formatted in Markdown (included when include.markdown is true). Converted
   * from Google's live page, so element order can shift as Google updates its markup.
   */
  markdown?: string;
  /** Inline place cards extracted from the response */
  places?: GooglePlace[];
  /** Shopping product information extracted from the response */
  shoppingCards?: ShoppingCard4[];
  /** Sponsored ad section extracted from the response */
  ads?: Ads;
  /** Inline product cards found within the AI response text */
  inlineProducts?: InlineProduct1[];
  /** Inline video cards embedded in the AI response (currently YouTube) */
  videos?: Video1[];
  /** GPS-enriched location data extracted from the response */
  map?: GoogleMapPlace[];
  /**
   * Merchant offers per product cluster, up to 6. Returned only when `include.expandProducts` is
   * true. See [product results](/api-reference/endpoint/aimode/product-results).
   */
  productResults?: ProductResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result5Properties: s.Shape<Result5> = {
  text: s.optional(s.string()),
  html: s.optional(s.string()),
  sources: s.optional(s.array(s.lazy(() => source7Schema))),
  citationPills: s.optional(s.array(s.lazy(() => citationPill4Schema))),
  markdown: s.optional(s.string()),
  places: s.optional(s.array(s.lazy(() => googlePlaceInternalSchema))),
  shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard4InternalSchema))),
  ads: s.optional(s.lazy(() => adsInternalSchema)),
  inlineProducts: s.optional(s.array(s.lazy(() => inlineProduct1InternalSchema))),
  videos: s.optional(s.array(s.lazy(() => video1InternalSchema))),
  map: s.optional(s.array(s.lazy(() => googleMapPlaceInternalSchema))),
  productResults: s.optional(s.array(s.lazy(() => productResultInternalSchema))),
};

export const result5InternalSchema: Schema<Result5> = s.object<Result5>(result5Properties, {
  additionalProperties: s.json(),
});

export const result5Schema: Schema<Result5> = s.lazySchema(() =>
  s.object<Result5>(
    {
      ...result5Properties,
      html: s.optional(s.string().check(s.url())),
      places: s.optional(s.array(s.lazy(() => googlePlaceSchema))),
      shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard4Schema))),
      ads: s.optional(s.lazy(() => adsSchema)),
      inlineProducts: s.optional(s.array(s.lazy(() => inlineProduct1Schema))),
      videos: s.optional(s.array(s.lazy(() => video1Schema))),
      map: s.optional(s.array(s.lazy(() => googleMapPlaceSchema))),
      productResults: s.optional(s.array(s.lazy(() => productResultSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
