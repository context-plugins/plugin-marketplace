import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Sampling temperature. Smaller temperature makes the generation result closer to greedy, argmax
 * (i.e., `top_k = 1`) sampling. Defaults to 1.0. This is similar to Hugging Face's
 * [`temperature`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.generationconfig.temperature)
 * argument.
 */
export type Temperature = number;

export const temperatureSchema: Schema<Temperature> = s.of<Temperature>(s.union([s.float64()]));
