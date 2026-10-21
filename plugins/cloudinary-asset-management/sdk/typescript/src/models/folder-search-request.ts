import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directionEnumSchema, type DirectionEnum } from "./direction-enum.js";

export type FolderSearchRequest = {
  /** The (Lucene-like) string expression specifying the search query. */
  expression?: string;
  /**
   * An array of single-key objects mapping a field to a sort direction. Each object must contain
   * exactly one field name mapped to 'asc' or 'desc'. Default: [{"created_at": "desc"}].
   */
  sortBy?: DirectionEnum[];
  /** Maximum number of folders to return (max 500, default 50). @default 50 */
  maxResults?: number;
  /** When more results are available, use the next_cursor value from the previous response. */
  nextCursor?: string;
};

export const folderSearchRequestSchema: Schema<FolderSearchRequest> = s.object<FolderSearchRequest>({
  expression: s.optional(s.string()),
  sortBy: s.optional(s.array(s.lazy(() => directionEnumSchema))),
  maxResults: s.defaulted(s.int(), 50),
  nextCursor: s.optional(s.string()),
  _keysMap: {
    sortBy: "sort_by",
    maxResults: "max_results",
    nextCursor: "next_cursor",
  },
});
