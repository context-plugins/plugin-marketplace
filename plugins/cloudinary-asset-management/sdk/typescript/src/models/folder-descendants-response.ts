import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderDetailResponseSchema, type FolderDetailResponse } from "./folder-detail-response.js";

/** The descendant folders of a folder. */
export type FolderDescendantsResponse = {
  /** The descendant folders. */
  folders: FolderDetailResponse[];
};

export const folderDescendantsResponseSchema: Schema<FolderDescendantsResponse> =
  s.object<FolderDescendantsResponse>({
    folders: s.array(s.lazy(() => folderDetailResponseSchema)),
  });
