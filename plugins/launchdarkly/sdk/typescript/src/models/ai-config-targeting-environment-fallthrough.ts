import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  aiConfigTargetingEnvironmentFallthroughRolloutSchema,
  type AiConfigTargetingEnvironmentFallthroughRollout,
} from "./ai-config-targeting-environment-fallthrough-rollout.js";

export type AiConfigTargetingEnvironmentFallthrough = {
  variation?: number;
  rollout?: AiConfigTargetingEnvironmentFallthroughRollout;
};

export const aiConfigTargetingEnvironmentFallthroughSchema: Schema<AiConfigTargetingEnvironmentFallthrough> =
  s.object<AiConfigTargetingEnvironmentFallthrough>({
    variation: s.optional(s.int()),
    rollout: s.optional(s.lazy(() => aiConfigTargetingEnvironmentFallthroughRolloutSchema)),
  });
