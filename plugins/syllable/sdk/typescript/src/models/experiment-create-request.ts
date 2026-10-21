import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  daoExperimentVariantWriteSchema,
  type DaoExperimentVariantWrite,
} from "./dao-experiment-variant-write.js";
import { description19Schema, type Description19 } from "./unions/description19.js";

/**
 * Create an experiment with at least two distinct agents and one control variant.
 *
 * Variant weights are positive whole-number percentages that must total 100.
 */
export type ExperimentCreateRequest = {
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
  /** The channel target being split */
  targetId: number;
};

export const experimentCreateRequestSchema: Schema<ExperimentCreateRequest> =
  s.object<ExperimentCreateRequest>({
    name: s.string(),
    description: s.optional(s.lazy(() => description19Schema)),
    variants: s.array(s.lazy(() => daoExperimentVariantWriteSchema)),
    targetId: s.int(),
    _keysMap: {
      targetId: "target_id",
    },
  });
