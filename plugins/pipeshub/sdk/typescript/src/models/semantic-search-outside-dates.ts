import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchGraphRecordSchema,
  type SemanticSearchGraphRecord,
} from "./semantic-search-graph-record.js";
import { semanticSearchHitSchema, type SemanticSearchHit } from "./semantic-search-hit.js";

/**
 * Present only on a search with date bounds, when the same search without them found matches the
 * bounds left out. Date bounds match when a record was written or last changed, not when the event
 * it describes happened, so release notes, a retrospective or a weekly summary written after a
 * period are left out of a search bounded to that period. The search without dates, with the same
 * query, filters and permissions and a limit of 10, runs beside the bounded search (or beside a
 * timeline's searches: one plain search, not a second timeline). Its best matches outside the
 * bounds, up to 3 records, best first, come here, never in `searchResults`, which are unchanged.
 * When nothing inside the bounds matched, the response is then a `200` with empty `searchResults`.
 * A server whose `DATE_FILTER_SAFETY_NET` setting is `false` never sends this field.
 */
export type SemanticSearchOutsideDates = {
  /** A plain-language label for these matches, to pass on with them. */
  note: string;
  /** Up to 3 passages of each record, best first. */
  searchResults: SemanticSearchHit[];
  /** The records, best first, with their source dates. */
  records: SemanticSearchGraphRecord[];
};

export const semanticSearchOutsideDatesSchema: Schema<SemanticSearchOutsideDates> =
  s.object<SemanticSearchOutsideDates>({
    note: s.string(),
    searchResults: s.array(s.lazy(() => semanticSearchHitSchema)),
    records: s.array(s.lazy(() => semanticSearchGraphRecordSchema)),
  });
