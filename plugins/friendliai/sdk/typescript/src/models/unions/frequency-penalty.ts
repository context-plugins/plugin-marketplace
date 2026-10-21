import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Number between -2.0 and 2.0. Positive values penalizes tokens that have been sampled, taking into
 * account their frequency in the preceding text. This penalization diminishes the model's tendency
 * to reproduce identical lines verbatim.
 */
export type FrequencyPenalty = number;

export const frequencyPenaltySchema: Schema<FrequencyPenalty> = s.of<FrequencyPenalty>(
  s.union([s.float64()]),
);
