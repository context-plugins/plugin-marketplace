import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** draft, running, or stopped */
export const ExperimentStatus2 = {
  Draft: "draft",
  Running: "running",
  Stopped: "stopped",
} as const;
export type ExperimentStatus2 = (typeof ExperimentStatus2)[keyof typeof ExperimentStatus2] | (string & {});

export const experimentStatus2Schema: EnumSchema<ExperimentStatus2> =
  s.enumOf<ExperimentStatus2>(ExperimentStatus2);
