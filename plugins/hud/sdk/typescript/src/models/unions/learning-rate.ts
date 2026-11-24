import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LearningRate = number;

export const learningRateSchema: Schema<LearningRate> = s.of<LearningRate>(s.union([s.float64()]));
