import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The maximum number of tokens to generate. For decoder-only models like GPT, the length of your
 * input tokens plus `max_tokens` should not exceed the model's maximum length (e.g., 2048 for
 * OpenAI GPT-3). For encoder-decoder models like T5 or BlenderBot, `max_tokens` should not exceed
 * the model's maximum output length. This is similar to Hugging Face's
 * [`max_new_tokens`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.max_new_tokens)
 * argument.
 */
export type MaxTokens = number;

export const maxTokensSchema: Schema<MaxTokens> = s.of<MaxTokens>(s.union([s.int()]));
