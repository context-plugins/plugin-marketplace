import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigTargetingEnvironmentFallthroughRolloutVariation = {
  untracked?: boolean;
  variation: number;
  weight: number;
};

export const aiConfigTargetingEnvironmentFallthroughRolloutVariationSchema: Schema<AiConfigTargetingEnvironmentFallthroughRolloutVariation> =
  s.object<AiConfigTargetingEnvironmentFallthroughRolloutVariation>({
    untracked: s.optional(s.boolean()),
    variation: s.int(),
    weight: s.int(),
    _keysMap: {
      untracked: "_untracked",
    },
  });
