import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The presence penalty to use for chat completions. Unsupported. */
export type PresencePenalty = number;

export const presencePenaltySchema: Schema<PresencePenalty> = s.of<PresencePenalty>(s.union([s.float64()]));
