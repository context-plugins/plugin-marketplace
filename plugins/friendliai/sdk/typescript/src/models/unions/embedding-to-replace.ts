import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A list of flattened embedding vectors used for replacing the tokens at the specified indices
 * provided via `token_index_to_replace`.
 */
export type EmbeddingToReplace = number[];

export const embeddingToReplaceSchema: Schema<EmbeddingToReplace> = s.of<EmbeddingToReplace>(
  s.union([s.array(s.float64())]),
);
