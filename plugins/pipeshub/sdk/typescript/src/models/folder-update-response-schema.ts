import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response returned by PUT /knowledgeBase/{kbId}/folder/{folderId} (updateFolder). */
export type FolderUpdateResponseSchema = {
  success: boolean;
  message: string;
};

export const folderUpdateResponseSchemaSchema: Schema<FolderUpdateResponseSchema> =
  s.object<FolderUpdateResponseSchema>({
    success: s.boolean(),
    message: s.string(),
  });
