import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The maximum number of tokens including both the generated result and the input tokens. Only
 * allowed for decoder-only models. Only one argument between `max_tokens` and `max_total_tokens` is
 * allowed. Default value is the model's maximum length. This is similar to Hugging Face's
 * [`max_length`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.max_length)
 * argument.
 */
export type MaxTotalTokens = number;

export const maxTotalTokensSchema: Schema<MaxTotalTokens> = s.of<MaxTotalTokens>(s.union([s.int()]));
