import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The minimum number of tokens to generate. Default value is 0. This is similar to Hugging Face's
 * [`min_new_tokens`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.generationconfig.min_new_tokens)
 * argument.
 *
 * **This field is unsupported when `tools` or `response_format` is specified.**
 */
export type MinTokens12 = number;

export const minTokens12Schema: Schema<MinTokens12> = s.of<MinTokens12>(s.union([s.int()]));
