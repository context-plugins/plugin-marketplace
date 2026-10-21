import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Sensitivity threshold (0.0 to 1.0) for voice activity detection. A higher threshold will require
 * louder audio to activate the model, and thus might perform better in noisy environments.
 */
export type Threshold = number;

export const thresholdSchema: Schema<Threshold> = s.of<Threshold>(s.union([s.float64()]));
