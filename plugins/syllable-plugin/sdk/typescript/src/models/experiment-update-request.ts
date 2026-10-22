import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  daoExperimentVariantWriteSchema,
  type DaoExperimentVariantWrite,
} from "./dao-experiment-variant-write.js";
import { description19Schema, type Description19 } from "./unions/description19.js";

/**
 * Replace an experiment's name, hypothesis, and complete variant set.
 *
 * Include at least two variants that use distinct agents. Mark exactly one as the control and use
 * positive whole-number weights that total 100.
 */
export type ExperimentUpdateRequest = {
  /** The name of the experiment */
  name: string;
  /** The hypothesis under test */
  description?: Description19;
  /**
   * The complete set of variants for this experiment. Include at least 2 variants that use distinct
   * agents, mark exactly one variant as the control, and assign positive whole number weights that
   * total 100.
   */
  variants: DaoExperimentVariantWrite[];
};

export const experimentUpdateRequestSchema: Schema<ExperimentUpdateRequest> =
  s.object<ExperimentUpdateRequest>({
    name: s.string(),
    description: s.optional(s.lazy(() => description19Schema)),
    variants: s.array(s.lazy(() => daoExperimentVariantWriteSchema)),
  });
