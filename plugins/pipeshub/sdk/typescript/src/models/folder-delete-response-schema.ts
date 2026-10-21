import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response returned by DELETE /knowledgeBase/{kbId}/folder/{folderId} (deleteFolder). */
export type FolderDeleteResponseSchema = {
  success: boolean;
  message: string;
};

export const folderDeleteResponseSchemaSchema: Schema<FolderDeleteResponseSchema> =
  s.object<FolderDeleteResponseSchema>({
    success: s.boolean(),
    message: s.string(),
  });
