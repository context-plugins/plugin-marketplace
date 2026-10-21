import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The minimum number of tokens including both the generated result and the input tokens. Only
 * allowed for decoder-only models. Only one argument between `min_tokens` and `min_total_tokens` is
 * allowed. This is similar to Hugging Face's
 * [`min_length`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.min_length)
 * argument.
 */
export type MinTotalTokens = number;

export const minTotalTokensSchema: Schema<MinTotalTokens> = s.of<MinTotalTokens>(s.union([s.int()]));
