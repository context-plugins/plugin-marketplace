import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Penalizes tokens that have already appeared in the generated result (plus the input tokens for
 * decoder-only models). Should be a positive value (1.0 means no penalty and is the default). See
 * [Keskar et al., 2019](https://arxiv.org/abs/1909.05858) for more details. This is similar to
 * Hugging Face's
 * [`repetition_penalty`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.generationconfig.repetition_penalty)
 * argument.
 */
export type RepetitionPenalty = number;

export const repetitionPenaltySchema: Schema<RepetitionPenalty> = s.of<RepetitionPenalty>(
  s.union([s.float64()]),
);
