import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocationSchema,
  type AiConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation,
} from "./ai-config-targeting-environment-fallthrough-rollout-experimentation-allocation.js";
import {
  aiConfigTargetingEnvironmentFallthroughRolloutVariationSchema,
  type AiConfigTargetingEnvironmentFallthroughRolloutVariation,
} from "./ai-config-targeting-environment-fallthrough-rollout-variation.js";

export type AiConfigTargetingEnvironmentFallthroughRollout = {
  bucketBy?: string;
  contextKind: string;
  experimentAllocation?: AiConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocation;
  seed?: number;
  variations: AiConfigTargetingEnvironmentFallthroughRolloutVariation[];
};

export const aiConfigTargetingEnvironmentFallthroughRolloutSchema: Schema<AiConfigTargetingEnvironmentFallthroughRollout> =
  s.object<AiConfigTargetingEnvironmentFallthroughRollout>({
    bucketBy: s.optional(s.string()),
    contextKind: s.string(),
    experimentAllocation: s.optional(
      s.lazy(() => aiConfigTargetingEnvironmentFallthroughRolloutExperimentationAllocationSchema),
    ),
    seed: s.optional(s.int()),
    variations: s.array(s.lazy(() => aiConfigTargetingEnvironmentFallthroughRolloutVariationSchema)),
  });
