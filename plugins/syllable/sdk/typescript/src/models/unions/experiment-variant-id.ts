import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of the experiment variant that answered the session */
export type ExperimentVariantId = string;

export const experimentVariantIdSchema: Schema<ExperimentVariantId> = s.of<ExperimentVariantId>(
  s.union([s.string()]),
);
