import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { syncItemSchema, type SyncItem } from "./sync-item.js";

/**
 * The response from a content sync operation, containing the synced items and tokens for subsequent
 * sync requests.
 */
export type SyncResponse = {
  /** Array of sync item objects representing content changes. */
  items?: SyncItem[];
  /**
   * Token to retrieve the next page of sync results. Present only when more pages are available.
   */
  paginationToken?: string;
  /**
   * Token representing the current sync state. Use this in subsequent sync requests to receive only
   * new changes.
   */
  syncToken?: string;
  /** Total number of items in the sync response. */
  totalCount?: number;
  /** Maximum items returned per page. */
  limit?: number;
  /** Number of items skipped in this response. */
  skip?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncResponseSchema: Schema<SyncResponse> = s.object<SyncResponse>(
  {
    items: s.optional(s.array(s.lazy(() => syncItemSchema))),
    paginationToken: s.optional(s.string()),
    syncToken: s.optional(s.string()),
    totalCount: s.optional(s.int()),
    limit: s.optional(s.int()),
    skip: s.optional(s.int()),
    _keysMap: {
      totalCount: "total_count",
    },
  },
  { additionalProperties: s.json() },
);
