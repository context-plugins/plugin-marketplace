import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A list of weights that determine the influence of each ControlNet model in the generation
 * process. Each value must be within [0, 1], where 0 disables the corresponding ControlNet and 1
 * applies it fully. When multiple ControlNet models are used, the list length must match the number
 * of control images. If omitted, all ControlNet models default to full influence (1.0). This field
 * is only applicable when using ControlNet models.
 */
export type ControlnetWeights = number[];

export const controlnetWeightsSchema: Schema<ControlnetWeights> = s.of<ControlnetWeights>(
  s.union([s.array(s.float64())]),
);
