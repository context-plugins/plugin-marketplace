import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The number of independently generated results for the prompt. Defaults to 1. This is similar to
 * Hugging Face's
 * [`num_return_sequences`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.num_return_sequences)
 * argument.
 */
export type N = number;

export const nSchema: Schema<N> = s.of<N>(s.union([s.int()]));
