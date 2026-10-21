import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReleaseGuardianConfigurationInput = {
  /** The monitoring window in milliseconds */
  monitoringWindowMilliseconds?: number;
  /** The rollout weight */
  rolloutWeight?: number;
  /** Whether or not to rollback on regression */
  rollbackOnRegression?: boolean;
  /** The randomization unit for the measured rollout */
  randomizationUnit?: string;
};

export const releaseGuardianConfigurationInputSchema: Schema<ReleaseGuardianConfigurationInput> =
  s.object<ReleaseGuardianConfigurationInput>({
    monitoringWindowMilliseconds: s.optional(s.int()),
    rolloutWeight: s.optional(s.int()),
    rollbackOnRegression: s.optional(s.boolean()),
    randomizationUnit: s.optional(s.string()),
  });
