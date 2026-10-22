import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Knowledge retrieved chunk. */
export type KnowledgeRetrievedChunk = {
  /** Retrieved text matching the search query. */
  text: string;
  /** Numerical relevance score of the retrieved result. */
  score: number;
  /** ID of specific text segment. */
  contentChunkId: string;
  /** ID of content in knowledge-base. */
  contentId: string;
};

export const knowledgeRetrievedChunkSchema: Schema<KnowledgeRetrievedChunk> =
  s.object<KnowledgeRetrievedChunk>({
    text: s.string(),
    score: s.float64(),
    contentChunkId: s.string(),
    contentId: s.string(),
  });
