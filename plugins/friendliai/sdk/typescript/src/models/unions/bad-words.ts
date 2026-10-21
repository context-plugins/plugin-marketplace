import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Text phrases that should not be generated. For a bad word phrase that contains N tokens, if the
 * first N-1 tokens appears at the last of the generated result, the logit for the last token of the
 * phrase is set to -inf. Before checking whether a bard word is included in the result, the word is
 * converted into tokens. We recommend using `bad_word_tokens` because it is clearer. For example,
 * after tokenization, phrases "clear" and " clear" can result in different token sequences due to
 * the prepended space character. Defaults to empty list.
 */
export type BadWords = string[];

export const badWordsSchema: Schema<BadWords> = s.of<BadWords>(s.union([s.array(s.string())]));
