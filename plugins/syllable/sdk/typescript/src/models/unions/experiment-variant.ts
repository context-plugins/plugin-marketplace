import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the experiment variant that answered the session. */
export type ExperimentVariant = string;

export const experimentVariantSchema: Schema<ExperimentVariant> = s.of<ExperimentVariant>(
  s.union([s.string()]),
);
