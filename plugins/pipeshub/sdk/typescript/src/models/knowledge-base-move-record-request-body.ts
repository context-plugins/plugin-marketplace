import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request body for PUT /knowledgeBase/{kbId}/record/{recordId}/move (moveRecord). */
export type KnowledgeBaseMoveRecordRequestBody = {
  /** Target folder ID, or null to move the record to the knowledge base root */
  newParentId: string | null;
};

export const knowledgeBaseMoveRecordRequestBodySchema: Schema<KnowledgeBaseMoveRecordRequestBody> =
  s.object<KnowledgeBaseMoveRecordRequestBody>({
    newParentId: s.nullable(s.string()),
  });
