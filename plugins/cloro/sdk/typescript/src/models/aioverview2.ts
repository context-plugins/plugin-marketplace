import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ads4Schema, type Ads4 } from "./ads4.js";
import { citationPill6Schema, type CitationPill6 } from "./citation-pill6.js";
import {
  googleMapPlaceInternalSchema,
  googleMapPlaceSchema,
  type GoogleMapPlace,
} from "./google-map-place.js";
import { googlePlaceInternalSchema, googlePlaceSchema, type GooglePlace } from "./google-place.js";
import { relatedLink1Schema, type RelatedLink1 } from "./related-link1.js";
import { source10Schema, type Source10 } from "./source10.js";
import { video2InternalSchema, video2Schema, type Video2 } from "./video2.js";

/**
 * Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query.
 */
export type Aioverview2 = {
  /** Sources referenced in the AI Overview */
  sources?: Source10[];
  /**
   * Inline citation pills extracted from the AI Overview answer. Each entry is one (pill, source)
   * pair: when a pill cites N sources (Google's `[Label +N]` chips), the array contains N entries
   * sharing the same `citationPillId` but carrying per-source `label`, `url`, and `domain`. Group
   * by `citationPillId` to recover the pill-level structure. Omitted from `result.aioverview` when
   * the answer carries no pills.
   */
  citationPills?: CitationPill6[];
  /**
   * A citation chip's "View related links" flyout items — URLs Google groups under the chip that
   * are NOT in the `sources` rail (for example a Google Shopping comparison link). Each entry
   * shares the `citationPillId` of its chip so it can be grouped with that chip's `citationPills`,
   * but carries no `position` (a related link is absent from `sources`). Related links also render
   * inline in `markdown`, so `markdown` may contain more URLs than `sources` / `citationPills` —
   * the extras are accounted for here. Omitted from `result.aioverview` when no chip carries
   * related links.
   */
  relatedLinks?: RelatedLink1[];
  /** AI Overview text content */
  text?: string;
  /** AI Overview content formatted as markdown (if requested) */
  markdown?: string;
  /** Video content included in the AI Overview */
  videos?: Video2[];
  /** Place cards in the AI Overview answer. Omitted when the answer has none. */
  places?: GooglePlace[];
  /** The place cards that Google geo-tagged, with coordinates. Omitted when the answer has none. */
  map?: GoogleMapPlace[];
  /** Sponsored ads injected by Google inside the AI Overview */
  ads?: Ads4[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const aioverview2Properties: s.Shape<Aioverview2> = {
  sources: s.optional(s.array(s.lazy(() => source10Schema))),
  citationPills: s.optional(s.array(s.lazy(() => citationPill6Schema))),
  relatedLinks: s.optional(s.array(s.lazy(() => relatedLink1Schema))),
  text: s.optional(s.string()),
  markdown: s.optional(s.string()),
  videos: s.optional(s.array(s.lazy(() => video2InternalSchema))),
  places: s.optional(s.array(s.lazy(() => googlePlaceInternalSchema))),
  map: s.optional(s.array(s.lazy(() => googleMapPlaceInternalSchema))),
  ads: s.optional(s.array(s.lazy(() => ads4Schema))),
};

export const aioverview2InternalSchema: Schema<Aioverview2> = s.object<Aioverview2>(aioverview2Properties, {
  additionalProperties: s.json(),
});

export const aioverview2Schema: Schema<Aioverview2> = s.lazySchema(() =>
  s.object<Aioverview2>(
    {
      ...aioverview2Properties,
      videos: s.optional(s.array(s.lazy(() => video2Schema))),
      places: s.optional(s.array(s.lazy(() => googlePlaceSchema))),
      map: s.optional(s.array(s.lazy(() => googleMapPlaceSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
