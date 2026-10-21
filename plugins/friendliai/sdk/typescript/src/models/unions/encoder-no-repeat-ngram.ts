import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * If this exceeds 1, every ngram of that size occurring in the input token sequence cannot appear
 * in the generated result. 1 means that this mechanism is disabled (i.e., you cannot prevent 1-gram
 * from being generated repeatedly). Only allowed for encoder-decoder models. Defaults to 1. This is
 * similar to Hugging Face's
 * [`encoder_no_repeat_ngram_size`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.encoder_no_repeat_ngram_size)
 * argument.
 */
export type EncoderNoRepeatNgram = number;

export const encoderNoRepeatNgramSchema: Schema<EncoderNoRepeatNgram> = s.of<EncoderNoRepeatNgram>(
  s.union([s.int()]),
);
