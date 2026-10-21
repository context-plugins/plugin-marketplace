import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { releasePolicyStageSchema, type ReleasePolicyStage } from "./release-policy-stage.js";

/** Configuration for guarded releases */
export type GuardedReleaseConfig = {
  /** Context kind key to use as the randomization unit for the rollout */
  rolloutContextKindKey?: string;
  /** The minimum number of samples required to make a decision */
  minSampleSize?: number;
  /** Whether to roll back on regression */
  rollbackOnRegression?: boolean;
  /** List of metric keys */
  metricKeys?: string[];
  /** List of metric group keys */
  metricGroupKeys?: string[];
  /** List of stages */
  stages?: ReleasePolicyStage[];
};

export const guardedReleaseConfigSchema: Schema<GuardedReleaseConfig> = s.object<GuardedReleaseConfig>({
  rolloutContextKindKey: s.optional(s.string()),
  minSampleSize: s.optional(s.int()),
  rollbackOnRegression: s.optional(s.boolean()),
  metricKeys: s.optional(s.array(s.string())),
  metricGroupKeys: s.optional(s.array(s.string())),
  stages: s.optional(s.array(s.lazy(() => releasePolicyStageSchema))),
});
