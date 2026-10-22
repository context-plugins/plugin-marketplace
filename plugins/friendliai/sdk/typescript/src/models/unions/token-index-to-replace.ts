import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A list of token indices where to replace the embeddings of input tokens provided via either
 * `tokens` or `prompt`.
 */
export type TokenIndexToReplace = number[];

export const tokenIndexToReplaceSchema: Schema<TokenIndexToReplace> = s.of<TokenIndexToReplace>(
  s.union([s.array(s.int())]),
);
