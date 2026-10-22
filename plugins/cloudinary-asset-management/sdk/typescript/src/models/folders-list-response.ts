import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderSchema, type Folder } from "./folder.js";

export type FoldersListResponse = {
  /** The root folders in the product environment. */
  folders: Folder[];
  /** A cursor for pagination. Always null for root folders. */
  nextCursor: string | null;
  /** The total number of root folders. */
  totalCount: number;
};

export const foldersListResponseSchema: Schema<FoldersListResponse> = s.object<FoldersListResponse>({
  folders: s.array(s.lazy(() => folderSchema)),
  nextCursor: s.nullable(s.string()),
  totalCount: s.int(),
  _keysMap: {
    nextCursor: "next_cursor",
    totalCount: "total_count",
  },
});
