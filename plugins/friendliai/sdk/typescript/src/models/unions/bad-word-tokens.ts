import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tokenSequenceSchema, type TokenSequence } from "../token-sequence.js";

/**
 * Same as the above `bad_words` field, but receives token sequences instead of text phrases. This
 * is similar to Hugging Face's
 * [`bad_word_ids`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.bad_words_ids)
 * argument.
 */
export type BadWordTokens = TokenSequence[];

export const badWordTokensSchema: Schema<BadWordTokens> = s.of<BadWordTokens>(
  s.union([s.array(s.lazy(() => tokenSequenceSchema))]),
);
