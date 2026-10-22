import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchHitMetadataSchema,
  type SemanticSearchHitMetadata,
} from "./semantic-search-hit-metadata.js";

/**
 * One search hit returned by the retrieval service. Most hits use string `content`; table or
 * grouped blocks may serialize structured payloads as JSON arrays. Listed fields are the documented
 * contract; extend this schema when new stable top-level keys are introduced.
 */
export type SemanticSearchHit = {
  score?: number | null;
  citationType?: string | null;
  chunkIndex?: number | null;
  /**
   * Per-hit metadata after retrieval enrichment (record + vector context). Listed fields are the
   * documented contract; Qdrant or pipeline updates may add more keys over time—extend this schema
   * when new stable fields appear.
   */
  metadata?: SemanticSearchHitMetadata;
  content?: string | null;
  virtualRecordId?: string | null;
  /**
   * Block type for this hit. Common values: `text`, `image`, `table_row`, `table`, `record_summary`
   * (whole-record semantic summary — `block_index` is `null` for these hits).
   */
  blockType?: string | null;
  blockIndex?: number | null;
  /**
   * Set on a passage returned because a match inside its section (a thread, a list, a table)
   * brought the whole section back: how many blocks it sits from the passage the search matched
   * nearest to it. `0` is a matched passage. Absent when the hit matched directly or the section
   * matched as a whole.
   */
  distanceFromMatch?: number;
  /**
   * Set only on a search with `timeline`: the index in `timeline.periods` of the period this hit's
   * record is dated in.
   */
  timelinePeriod?: number;
};

export const semanticSearchHitSchema: Schema<SemanticSearchHit> = s.object<SemanticSearchHit>({
  score: s.optionalNullable(s.float64()),
  citationType: s.optionalNullable(s.string()),
  chunkIndex: s.optionalNullable(s.int()),
  metadata: s.optional(s.lazy(() => semanticSearchHitMetadataSchema)),
  content: s.optionalNullable(s.string()),
  virtualRecordId: s.optionalNullable(s.string()),
  blockType: s.optionalNullable(s.string()),
  blockIndex: s.optionalNullable(s.int()),
  distanceFromMatch: s.optional(s.int()),
  timelinePeriod: s.optional(s.int()),
  _keysMap: {
    virtualRecordId: "virtual_record_id",
    blockType: "block_type",
    blockIndex: "block_index",
  },
});
