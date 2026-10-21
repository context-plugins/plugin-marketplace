import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { experimentResponse1Schema, type ExperimentResponse1 } from "./experiment-response1.js";

/** A started experiment. */
export type ExperimentStartResponse = {
  /** The experiment, now running */
  experiment: ExperimentResponse1;
  /**
   * Things that weaken the result without invalidating it, such as a variant whose agent does not
   * pin a prompt version, so that the prompt can be edited while the experiment runs
   */
  warnings?: string[];
};

export const experimentStartResponseSchema: Schema<ExperimentStartResponse> =
  s.object<ExperimentStartResponse>({
    experiment: experimentResponse1Schema,
    warnings: s.optional(s.array(s.string())),
  });
