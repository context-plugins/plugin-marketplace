import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation = {
  canReshuffle: boolean;
  defaultVariation: number;
  type: string;
};

export const aiConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocationSchema: Schema<AiConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation> =
  s.object<AiConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation>({
    canReshuffle: s.boolean(),
    defaultVariation: s.int(),
    type: s.string(),
  });
