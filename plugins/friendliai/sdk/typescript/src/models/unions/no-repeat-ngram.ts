import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * If this exceeds 1, every ngram of that size can only occur once among the generated result (plus
 * the input tokens for decoder-only models). 1 means that this mechanism is disabled (i.e., you
 * cannot prevent 1-gram from being generated repeatedly). Defaults to 1. This is similar to Hugging
 * Face's
 * [`no_repeat_ngram_size`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.no_repeat_ngram_size)
 * argument.
 */
export type NoRepeatNgram = number;

export const noRepeatNgramSchema: Schema<NoRepeatNgram> = s.of<NoRepeatNgram>(s.union([s.int()]));
