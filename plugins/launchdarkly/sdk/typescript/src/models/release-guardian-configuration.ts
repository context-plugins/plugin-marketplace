import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ReleaseGuardianConfiguration = {
  /** The monitoring window in milliseconds */
  monitoringWindowMilliseconds: number;
  /** The rollout weight percentage */
  rolloutWeight: number;
  /** Whether or not to roll back on regression */
  rollbackOnRegression: boolean;
  /** The randomization unit for the measured rollout */
  randomizationUnit?: string;
};

export const releaseGuardianConfigurationSchema: Schema<ReleaseGuardianConfiguration> =
  s.object<ReleaseGuardianConfiguration>({
    monitoringWindowMilliseconds: s.int(),
    rolloutWeight: s.int(),
    rollbackOnRegression: s.boolean(),
    randomizationUnit: s.optional(s.string()),
  });
