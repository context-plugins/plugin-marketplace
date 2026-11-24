import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { citationPill2Schema, type CitationPill2 } from "./citation-pill2.js";
import { hotelItemSchema, type HotelItem } from "./hotel-item.js";
import { mediaItemSchema, type MediaItem } from "./media-item.js";
import { placeItemSchema, type PlaceItem } from "./place-item.js";
import { shoppingCard2Schema, type ShoppingCard2 } from "./shopping-card2.js";
import { sourceSchema, type Source } from "./source.js";

/** Perplexity response data */
export type Result2 = {
  /** Perplexity's response text */
  text?: string;
  /** A URL to the full HTML of the response. */
  html?: string;
  /** Array of sources referenced in the response */
  sources?: Source[];
  /**
   * Inline citation pills extracted from the Perplexity answer. Each entry is one (pill, source)
   * pair: when a pill cites N sources (Perplexity's `[1][2][3]` bracketed groups), the array
   * contains N entries sharing the same `citationPillId` but carrying per-source `label`, `url`,
   * and `domain`. Group by `citationPillId` to recover the pill-level structure. Omitted from
   * `result` when the answer carries no pills.
   */
  citationPills?: CitationPill2[];
  /** Perplexity's response formatted in Markdown (included when include.markdown is true) */
  markdown?: string;
  /** Suggested follow-up search queries */
  relatedQueries?: string[];
  /** Video content found in response */
  videos?: MediaItem[];
  /** Image content found in response */
  images?: MediaItem[];
  /** Hotel listings (when travel intent detected) */
  hotels?: HotelItem[];
  /** General places and locations */
  places?: PlaceItem[];
  /** Shopping product cards with detailed product information (when shopping intent detected) */
  shoppingCards?: ShoppingCard2[];
  /** Internal search queries used to generate response */
  searchModelQueries?: string[];
  /**
   * Raw upstream provider stream captured during the request. Each item is one chunk from the
   * provider's wire protocol (SSE event, batchexecute frame, etc.). Format is provider-specific,
   * undocumented, and may change without notice — use it for debugging or to access data not yet
   * surfaced in the structured fields above.
   */
  rawResponse?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result2Properties: s.Shape<Result2> = {
  text: s.optional(s.string()),
  html: s.optional(s.string()),
  sources: s.optional(s.array(s.lazy(() => sourceSchema))),
  citationPills: s.optional(s.array(s.lazy(() => citationPill2Schema))),
  markdown: s.optional(s.string()),
  relatedQueries: s.optional(s.array(s.string())),
  videos: s.optional(s.array(s.lazy(() => mediaItemSchema))),
  images: s.optional(s.array(s.lazy(() => mediaItemSchema))),
  hotels: s.optional(s.array(s.lazy(() => hotelItemSchema))),
  places: s.optional(s.array(s.lazy(() => placeItemSchema))),
  shoppingCards: s.optional(s.array(s.lazy(() => shoppingCard2Schema))),
  searchModelQueries: s.optional(s.array(s.string())),
  rawResponse: s.optional(s.array(s.record(s.string(), s.unknown()))),
  _keysMap: {
    relatedQueries: "related_queries",
    shoppingCards: "shopping_cards",
    searchModelQueries: "search_model_queries",
  },
};

export const result2InternalSchema: Schema<Result2> = s.object<Result2>(result2Properties, {
  additionalProperties: s.json(),
});

export const result2Schema: Schema<Result2> = s.lazySchema(() =>
  s.object<Result2>(
    {
      ...result2Properties,
      html: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
