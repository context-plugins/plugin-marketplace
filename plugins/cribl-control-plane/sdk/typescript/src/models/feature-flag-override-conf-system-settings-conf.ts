import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FeatureFlagOverrideConfSystemSettingsConf = {
  /** If <code>true</code>, the feature flag is disabled. Otherwise, <code>false</code>. */
  disabled: boolean;
  /** Unique identifier of the feature flag to override. */
  flagId: string;
};

export const featureFlagOverrideConfSystemSettingsConfSchema: Schema<FeatureFlagOverrideConfSystemSettingsConf> =
  s.object<FeatureFlagOverrideConfSystemSettingsConf>({
    disabled: s.boolean(),
    flagId: s.string(),
  });
