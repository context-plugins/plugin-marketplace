import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Knowledge retrieval request. */
export type ServerlessKnowledgeRetrievalBody = {
  /** A text string used to find relevant information within the knowledge-base. */
  query: string;
  /** Maximum number of top-ranked knowledge-base entries to return in results. */
  k: number;
  /** A List of knowledge-base IDs. For now, only one knowledge-base is supported. */
  knowledgeIds: string[];
};

export const serverlessKnowledgeRetrievalBodySchema: Schema<ServerlessKnowledgeRetrievalBody> =
  s.object<ServerlessKnowledgeRetrievalBody>({
    query: s.string(),
    k: s.int(),
    knowledgeIds: s.array(s.string()),
  });
