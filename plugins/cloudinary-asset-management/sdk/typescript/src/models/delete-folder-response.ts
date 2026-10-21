import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteFolderResponse = {
  /** List of deleted folder paths. */
  deleted: string[];
};

export const deleteFolderResponseSchema: Schema<DeleteFolderResponse> = s.object<DeleteFolderResponse>({
  deleted: s.array(s.string()),
});
