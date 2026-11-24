import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The frequency penalty to use for chat completions. Unsupported. */
export type FrequencyPenalty = number;

export const frequencyPenaltySchema: Schema<FrequencyPenalty> = s.of<FrequencyPenalty>(
  s.union([s.float64()]),
);
