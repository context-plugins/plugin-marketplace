import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  persistedSemanticSearchSharedWithEntrySchema,
  type PersistedSemanticSearchSharedWithEntry,
} from "./persisted-semantic-search-shared-with-entry.js";

/**
 * One persisted search row as returned by `GET /search`. Mirrors the persisted search document
 * except `citationIds` is an array of ObjectId strings (citations are not populated on the list
 * endpoint, unlike `GET /search/{searchId}`).
 *
 * `shareLink` is absent from the JSON when the search has not been shared. `archivedBy` is `null`
 * on rows that were previously archived and then unarchived, and absent on rows that have never
 * been archived. The list endpoint already filters out currently-archived rows, so a string user-id
 * value never appears here in practice.
 */
export type SemanticSearchHistoryItem = {
  id: string;
  v: number;
  query: string;
  limit: number;
  orgId: string;
  userId: string;
  citationIds: string[];
  /**
   * Map of source-record id (or `_key`) to `JSON.stringify(<record>)`. Clients must `JSON.parse`
   * each value to recover the underlying record object. Populated at write-time in the POST
   * `/search` handler.
   */
  records: Record<string, string>;
  isShared: boolean;
  /** Set once the search has been shared via `/search/{searchId}/share`. */
  shareLink?: string;
  sharedWith: PersistedSemanticSearchSharedWithEntry[];
  isArchived: boolean;
  /**
   * User ID of the last user who archived this row, or `null` after an unarchive cleared the
   * archive state. Absent on rows that have never been archived.
   */
  archivedBy?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export const semanticSearchHistoryItemSchema: Schema<SemanticSearchHistoryItem> =
  s.object<SemanticSearchHistoryItem>({
    id: s.string(),
    v: s.int(),
    query: s.string(),
    limit: s.int(),
    orgId: s.string(),
    userId: s.string(),
    citationIds: s.array(s.string()),
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
