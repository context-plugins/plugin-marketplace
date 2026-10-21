import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  persistedSemanticSearchCitationSchema,
  type PersistedSemanticSearchCitation,
} from "./persisted-semantic-search-citation.js";
import {
  persistedSemanticSearchSharedWithEntrySchema,
  type PersistedSemanticSearchSharedWithEntry,
} from "./persisted-semantic-search-shared-with-entry.js";

/**
 * Persisted search document as returned to clients. `records` is a string-valued map: each value is
 * `JSON.stringify(<record>)`, keyed by the source record's `_id` or `_key`. Clients must
 * `JSON.parse` each value to recover the underlying record object (whose shape resembles
 * `SemanticSearchGraphRecord`). This intentionally differs from the `searchResponse.records` array
 * on the POST `/search` response, which is passed through from the retrieval service untouched.
 */
export type PersistedSemanticSearch = {
  id: string;
  v: number;
  query: string;
  limit: number;
  orgId: string;
  userId: string;
  citationIds: PersistedSemanticSearchCitation[];
  /**
   * Map of source-record id (or `_key`) to a JSON-stringified record object. Clients must
   * `JSON.parse` each value before reading fields.
   */
  records: Record<string, string>;
  isShared: boolean;
  /** Set once the search has been shared via `/search/{searchId}/share`. */
  shareLink?: string;
  sharedWith: PersistedSemanticSearchSharedWithEntry[];
  isArchived: boolean;
  /**
   * User ID of the last user who archived this row, or `null` after an unarchive cleared the
   * archive state. Absent on rows that have never been archived. Currently-archived rows cannot
   * reach this endpoint because `buildFilter` enforces `isArchived: false`.
   */
  archivedBy?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export const persistedSemanticSearchSchema: Schema<PersistedSemanticSearch> =
  s.object<PersistedSemanticSearch>({
    id: s.string(),
    v: s.int(),
    query: s.string(),
    limit: s.int(),
    orgId: s.string(),
    userId: s.string(),
    citationIds: s.array(s.lazy(() => persistedSemanticSearchCitationSchema)),
    records: s.record(s.string(), s.string()),
    isShared: s.boolean(),
    shareLink: s.optional(s.string()),
    sharedWith: s.array(s.lazy(() => persistedSemanticSearchSharedWithEntrySchema)),
    isArchived: s.boolean(),
    archivedBy: s.optionalNullable(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    _keysMap: {
      id: "_id",
      v: "__v",
    },
  });
