import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KnowledgeBaseRequest1 = {
  /** New name for the knowledge base */
  kbName?: string;
};

export const knowledgeBaseRequest1Schema: Schema<KnowledgeBaseRequest1> = s.object<KnowledgeBaseRequest1>({
  kbName: s.optional(s.string()),
});
