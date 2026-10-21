import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { knowledgeRetrievedChunkSchema, type KnowledgeRetrievedChunk } from "./knowledge-retrieved-chunk.js";

/** Knowledge retrieval response. */
export type ServerlessKnowledgeRetrievalSuccess = {
  /** A list of result. */
  results: KnowledgeRetrievedChunk[];
};

export const serverlessKnowledgeRetrievalSuccessSchema: Schema<ServerlessKnowledgeRetrievalSuccess> =
  s.object<ServerlessKnowledgeRetrievalSuccess>({
    results: s.array(s.lazy(() => knowledgeRetrievedChunkSchema)),
  });
