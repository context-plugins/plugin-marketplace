import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Number between -2.0 and 2.0. Positive values penalizes tokens that have been sampled at least
 * once in the existing text.
 */
export type PresencePenalty = number;

export const presencePenaltySchema: Schema<PresencePenalty> = s.of<PresencePenalty>(s.union([s.float64()]));
