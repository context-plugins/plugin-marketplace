import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request model to move files between insight upload folders. */
export type InsightsFolderFileMove = {
  /** System-assign folder ID */
  destinationFolderId: number;
  /** List of system-assigned IDs for the files to be moved */
  fileIdList: number[];
};

export const insightsFolderFileMoveSchema: Schema<InsightsFolderFileMove> = s.object<InsightsFolderFileMove>({
  destinationFolderId: s.int(),
  fileIdList: s.array(s.int()),
  _keysMap: {
    destinationFolderId: "destination_folder_id",
    fileIdList: "file_id_list",
  },
});
