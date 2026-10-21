import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The minimum number of tokens to generate. Default value is 0. This is similar to Hugging Face's
 * [`min_new_tokens`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.generationconfig.min_new_tokens)
 * argument.
 *
 * **This field is unsupported when `response_format` is specified.**
 */
export type MinTokens = number;

export const minTokensSchema: Schema<MinTokens> = s.of<MinTokens>(s.union([s.int()]));
