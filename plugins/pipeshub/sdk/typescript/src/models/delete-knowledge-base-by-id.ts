import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response returned by DELETE /knowledgeBase/{kbId} (deleteKnowledgeBase). */
export type DeleteKnowledgeBaseById = {
  success: boolean;
  message: string;
};

export const deleteKnowledgeBaseByIdSchema: Schema<DeleteKnowledgeBaseById> =
  s.object<DeleteKnowledgeBaseById>({
    success: s.boolean(),
    message: s.string(),
  });
