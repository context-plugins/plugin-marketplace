import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response returned by PUT /knowledgeBase/{kbId} (updateKnowledgeBase). */
export type UpdateKnowledgeBaseById = {
  success: boolean;
  message: string;
};

export const updateKnowledgeBaseByIdSchema: Schema<UpdateKnowledgeBaseById> =
  s.object<UpdateKnowledgeBaseById>({
    success: s.boolean(),
    message: s.string(),
  });
