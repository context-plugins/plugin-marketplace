import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  daoExperimentTargetSummarySchema,
  type DaoExperimentTargetSummary,
} from "../dao-experiment-target-summary.js";

/**
 * The channel target being split, resolved for display. Null when the target has since been
 * deleted, and when the read did not load it.
 */
export type Target = DaoExperimentTargetSummary;

export const targetSchema: Schema<Target> = s.of<Target>(
  s.union([s.lazy(() => daoExperimentTargetSummarySchema)]),
);
