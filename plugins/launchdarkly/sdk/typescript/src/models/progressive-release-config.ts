import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { releasePolicyStageSchema, type ReleasePolicyStage } from "./release-policy-stage.js";

/** Configuration for progressive releases */
export type ProgressiveReleaseConfig = {
  /** Context kind key to use as the randomization unit for the rollout */
  rolloutContextKindKey?: string;
  /** List of stages */
  stages?: ReleasePolicyStage[];
};

export const progressiveReleaseConfigSchema: Schema<ProgressiveReleaseConfig> =
  s.object<ProgressiveReleaseConfig>({
    rolloutContextKindKey: s.optional(s.string()),
    stages: s.optional(s.array(s.lazy(() => releasePolicyStageSchema))),
  });
