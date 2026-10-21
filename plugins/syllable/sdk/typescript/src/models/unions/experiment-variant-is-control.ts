import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the experiment variant that answered the session is the control */
export type ExperimentVariantIsControl = boolean;

export const experimentVariantIsControlSchema: Schema<ExperimentVariantIsControl> =
  s.of<ExperimentVariantIsControl>(s.union([s.boolean()]));
