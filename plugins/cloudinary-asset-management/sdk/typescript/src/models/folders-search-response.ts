import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderSchema, type Folder } from "./folder.js";

export type FoldersSearchResponse = {
  /** The total number of folders matching the search. */
  totalCount: number;
  /** The time taken to execute the search (ms). */
  time: number;
  /** A cursor for pagination. */
  nextCursor?: string | null;
  /** The folders matching the search. */
  folders: Folder[];
};

export const foldersSearchResponseSchema: Schema<FoldersSearchResponse> = s.object<FoldersSearchResponse>({
  totalCount: s.int(),
  time: s.int(),
  nextCursor: s.optionalNullable(s.string()),
  folders: s.array(s.lazy(() => folderSchema)),
  _keysMap: {
    totalCount: "total_count",
    nextCursor: "next_cursor",
  },
});
