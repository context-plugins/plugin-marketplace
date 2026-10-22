import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status of an experiment.
 *
 * The column is a varchar and not a database enum, so a new value here does not need a migration.
 */
export const ExperimentStatus = {
  Draft: "draft",
  Running: "running",
  Stopped: "stopped",
} as const;
export type ExperimentStatus = (typeof ExperimentStatus)[keyof typeof ExperimentStatus] | (string & {});

export const experimentStatusSchema: EnumSchema<ExperimentStatus> =
  s.enumOf<ExperimentStatus>(ExperimentStatus);
