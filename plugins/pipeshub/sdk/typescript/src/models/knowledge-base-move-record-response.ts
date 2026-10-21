import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response returned by PUT /knowledgeBase/{kbId}/record/{recordId}/move (moveRecord). */
export type KnowledgeBaseMoveRecordResponse = {
  success: boolean;
  message: string;
};

export const knowledgeBaseMoveRecordResponseSchema: Schema<KnowledgeBaseMoveRecordResponse> =
  s.object<KnowledgeBaseMoveRecordResponse>({
    success: s.boolean(),
    message: s.string(),
  });
