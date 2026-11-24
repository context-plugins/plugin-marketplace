import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ad1Schema, type Ad1 } from "./ad1.js";
import { citationPill3Schema, type CitationPill3 } from "./citation-pill3.js";
import {
  googleMapPlaceInternalSchema,
  googleMapPlaceSchema,
  type GoogleMapPlace,
} from "./google-map-place.js";
import { googlePlaceInternalSchema, googlePlaceSchema, type GooglePlace } from "./google-place.js";
import { relatedLinkSchema, type RelatedLink } from "./related-link.js";
import { source4Schema, type Source4 } from "./source4.js";
import { videoInternalSchema, videoSchema, type Video } from "./video.js";

/**
 * Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query.
 */
export type Aioverview = {
  /** Sources referenced in the AI Overview */
  sources?: Source4[];
  /**
   * Inline citation pills extracted from the AI Overview answer. Each entry is one (pill, source)
   * pair: when a pill cites N sources (Google's `[Label +N]` chips), the array contains N entries
   * sharing the same `citationPillId` but carrying per-source `label`, `url`, and `domain`. Group
   * by `citationPillId` to recover the pill-level structure. Omitted from `result.aioverview` when
   * the answer carries no pills.
   */
  citationPills?: CitationPill3[];
  /**
   * A citation chip's "View related links" flyout items — URLs Google groups under the chip that
   * are NOT in the `sources` rail (for example a Google Shopping comparison link). Each entry
   * shares the `citationPillId` of its chip so it can be grouped with that chip's `citationPills`,
   * but carries no `position` (a related link is absent from `sources`). Related links also render
   * inline in `markdown`, so `markdown` may contain more URLs than `sources` / `citationPills` —
   * the extras are accounted for here. Omitted from `result.aioverview` when no chip carries
   * related links.
   */
  relatedLinks?: RelatedLink[];
  /** AI Overview text content */
  text?: string;
  /** AI Overview content formatted as markdown (if requested) */
  markdown?: string;
  /** Video content included in the AI Overview */
  videos?: Video[];
  /** Place cards in the AI Overview answer. Omitted when the answer has none. */
  places?: GooglePlace[];
  /** The place cards that Google geo-tagged, with coordinates. Omitted when the answer has none. */
  map?: GoogleMapPlace[];
  /** Sponsored ads injected by Google inside the AI Overview */
  ads?: Ad1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const aioverviewProperties: s.Shape<Aioverview> = {
  sources: s.optional(s.array(s.lazy(() => source4Schema))),
  citationPills: s.optional(s.array(s.lazy(() => citationPill3Schema))),
  relatedLinks: s.optional(s.array(s.lazy(() => relatedLinkSchema))),
  text: s.optional(s.string()),
  markdown: s.optional(s.string()),
  videos: s.optional(s.array(s.lazy(() => videoInternalSchema))),
  places: s.optional(s.array(s.lazy(() => googlePlaceInternalSchema))),
  map: s.optional(s.array(s.lazy(() => googleMapPlaceInternalSchema))),
  ads: s.optional(s.array(s.lazy(() => ad1Schema))),
};

export const aioverviewInternalSchema: Schema<Aioverview> = s.object<Aioverview>(aioverviewProperties, {
  additionalProperties: s.json(),
});

export const aioverviewSchema: Schema<Aioverview> = s.lazySchema(() =>
  s.object<Aioverview>(
    {
      ...aioverviewProperties,
      videos: s.optional(s.array(s.lazy(() => videoSchema))),
      places: s.optional(s.array(s.lazy(() => googlePlaceSchema))),
      map: s.optional(s.array(s.lazy(() => googleMapPlaceSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
