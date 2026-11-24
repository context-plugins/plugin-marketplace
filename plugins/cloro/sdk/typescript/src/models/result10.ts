import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ads6InternalSchema, ads6Schema, type Ads6 } from "./ads6.js";
import { citationPill8Schema, type CitationPill8 } from "./citation-pill8.js";
import {
  googleMapPlaceInternalSchema,
  googleMapPlaceSchema,
  type GoogleMapPlace,
} from "./google-map-place.js";
import { googlePlaceInternalSchema, googlePlaceSchema, type GooglePlace } from "./google-place.js";
import {
  inlineProduct32InternalSchema,
  inlineProduct32Schema,
  type InlineProduct32,
} from "./inline-product32.js";
import { shoppingCard8InternalSchema, shoppingCard8Schema, type ShoppingCard8 } from "./shopping-card8.js";
import { source13Schema, type Source13 } from "./source13.js";
import { video3InternalSchema, video3Schema, type Video3 } from "./video3.js";

/** AI Mode response data */
export type Result10 = {
  /** AI Mode's response text */
  text?: string;
  /** A URL to the full HTML of the response. */
  html?: string;
  /** Array of sources referenced in the response */
  sources?: Source13[];
  /**
   * Inline citation pills extracted from the AI Mode answer. Each entry is one (pill, source) pair:
   * when a pill cites N sources (Google's `[Label +N]` chips), the array contains N entries sharing
   * the same `citationPillId` but carrying per-source `label`, `url`, and `domain`. Group by
   * `citationPillId` to recover the pill-level structure. Omitted from `result` when the answer
   * carries no pills.
   */
  citationPills?: CitationPill8[];
  /**
   * AI Mode's response formatted in Markdown (included when include.markdown is true). Converted
   * from Google's live page, so element order can shift as Google updates its markup.
   */
  markdown?: string;
  /** Inline place cards extracted from the response */
  places?: GooglePlace[];
  /** Shopping product information extracted from the response */
  shoppingCards?: ShoppingCard8[];
  /** Sponsored ad section extracted from the response */
  ads?: Ads6;
  /** Inline product cards found within the AI response text */
  inlineProducts?: InlineProduct32[];
  /** Inline video cards embedded in the AI response (currently YouTube) */
  videos?: Video3[];
  /** GPS-enriched location data extracted from the response */
  map?: GoogleMapPlace[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result10Properties: s.Shape<Result10> = {
  text: s.optional(s.string()),
  html: s.optional(s.string()),
  sources: s.optional(s.array(s.lazy(() => source13Schema))),
  citationPills: s.optional(s.array(s.lazy(() => citationPill8Schema))),
  markdown: s.optional(s.string()),
  places: s.optional(s.array(s.lazy(() => googlePlaceInternalSchema))),
  shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard8InternalSchema))),
  ads: s.optional(s.lazy(() => ads6InternalSchema)),
  inlineProducts: s.optional(s.array(s.lazy(() => inlineProduct32InternalSchema))),
  videos: s.optional(s.array(s.lazy(() => video3InternalSchema))),
  map: s.optional(s.array(s.lazy(() => googleMapPlaceInternalSchema))),
};

export const result10InternalSchema: Schema<Result10> = s.object<Result10>(result10Properties, {
  additionalProperties: s.json(),
});

export const result10Schema: Schema<Result10> = s.lazySchema(() =>
  s.object<Result10>(
    {
      ...result10Properties,
      html: s.optional(s.string().check(s.url())),
      places: s.optional(s.array(s.lazy(() => googlePlaceSchema))),
      shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard8Schema))),
      ads: s.optional(s.lazy(() => ads6Schema)),
      inlineProducts: s.optional(s.array(s.lazy(() => inlineProduct32Schema))),
      videos: s.optional(s.array(s.lazy(() => video3Schema))),
      map: s.optional(s.array(s.lazy(() => googleMapPlaceSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
