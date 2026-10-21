import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KnowledgeBaseRequest = {
  /** Name of the knowledge base */
  kbName: string;
};

export const knowledgeBaseRequestSchema: Schema<KnowledgeBaseRequest> = s.object<KnowledgeBaseRequest>({
  kbName: s.string(),
});
