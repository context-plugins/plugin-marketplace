import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Penalizes tokens that have already appeared in the input tokens. Should be a positive value. 1.0
 * means no penalty and is the default. Only allowed for encoder-decoder models. See [Keskar et al.,
 * 2019](https://arxiv.org/abs/1909.05858) for more details. This is similar to Hugging Face's
 * [`encoder_repetition_penalty`](https://huggingface.co/docs/transformers/v4.26.0/en/main_classes/text_generation#transformers.GenerationConfig.encoder_repetition_penalty)
 * argument.
 */
export type EncoderRepetitionPenalty = number;

export const encoderRepetitionPenaltySchema: Schema<EncoderRepetitionPenalty> =
  s.of<EncoderRepetitionPenalty>(s.union([s.float64()]));
