import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchAppliedFiltersSchema,
  type SemanticSearchAppliedFilters,
} from "./semantic-search-applied-filters.js";
import {
  semanticSearchGraphRecordSchema,
  type SemanticSearchGraphRecord,
} from "./semantic-search-graph-record.js";
import { semanticSearchHitSchema, type SemanticSearchHit } from "./semantic-search-hit.js";
import {
  semanticSearchOutsideDatesSchema,
  type SemanticSearchOutsideDates,
} from "./semantic-search-outside-dates.js";
import { semanticSearchTimelineSchema, type SemanticSearchTimeline } from "./semantic-search-timeline.js";

/**
 * Payload returned by the AI retrieval service for a semantic search (embedded in
 * `searchResponse`). Optional `virtual_to_record_map` maps each virtual record id (string key) to
 * one resolved graph record document. Empty responses from the retrieval layer omit
 * `virtual_to_record_map`; success payloads may include it alongside hits and records.
 */
export type SemanticSearchAiResponse = {
  searchResults: SemanticSearchHit[];
  records: SemanticSearchGraphRecord[];
  status: string;
  statusCode: number;
  message: string;
  /** Present when KB filters were applied to the search request. */
  appliedFilters?: SemanticSearchAppliedFilters;
  /**
   * Present only when some records lost passages to the per-record cap: maps a `recordId` to how
   * many of its passages were left out. Each record keeps at most `max(SEARCH_PER_RECORD_FLOOR,
   * limit / SEARCH_PER_RECORD_DIVISOR)` passages (4 at the default limit): the passages that
   * matched first, then those nearest a match.
   */
  omittedPassages?: Record<string, number>;
  /**
   * Maps virtual record id (object property name) to the accessible graph record document for that
   * id.
   */
  virtualToRecordMap?: Record<string, SemanticSearchGraphRecord>;
  /**
   * Present only on a search run as a timeline: one with `timeline` set, or one over a span of more
   * than 31 days with it left out. `searchResults` then come period by period, oldest first, and by
   * record date within a period; each hit's `timelinePeriod` is its period's index in `periods`.
   */
  timeline?: SemanticSearchTimeline;
  /**
   * Present only on a search with date bounds, when the same search without them found matches the
   * bounds left out. Date bounds match when a record was written or last changed, not when the
   * event it describes happened, so release notes, a retrospective or a weekly summary written
   * after a period are left out of a search bounded to that period. The search without dates, with
   * the same query, filters and permissions and a limit of 10, runs beside the bounded search (or
   * beside a timeline's searches: one plain search, not a second timeline). Its best matches
   * outside the bounds, up to 3 records, best first, come here, never in `searchResults`, which are
   * unchanged. When nothing inside the bounds matched, the response is then a `200` with empty
   * `searchResults`. A server whose `DATE_FILTER_SAFETY_NET` setting is `false` never sends this
   * field.
   */
  outsideDates?: SemanticSearchOutsideDates;
};

export const semanticSearchAiResponseSchema: Schema<SemanticSearchAiResponse> =
  s.object<SemanticSearchAiResponse>({
    searchResults: s.array(s.lazy(() => semanticSearchHitSchema)),
    records: s.array(s.lazy(() => semanticSearchGraphRecordSchema)),
    status: s.string(),
    statusCode: s.int(),
    message: s.string(),
    appliedFilters: s.optional(s.lazy(() => semanticSearchAppliedFiltersSchema)),
    omittedPassages: s.optional(s.record(s.string(), s.int())),
    virtualToRecordMap: s.optional(
      s.record(
        s.string(),
        s.lazy(() => semanticSearchGraphRecordSchema),
      ),
    ),
    timeline: s.optional(s.lazy(() => semanticSearchTimelineSchema)),
    outsideDates: s.optional(s.lazy(() => semanticSearchOutsideDatesSchema)),
    _keysMap: {
      statusCode: "status_code",
      virtualToRecordMap: "virtual_to_record_map",
    },
  });
