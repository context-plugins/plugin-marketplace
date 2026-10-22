import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FeatureFlagOverride = {
  /** If <code>true</code>, the feature flag is disabled. Otherwise, <code>false</code>. */
  disabled?: boolean;
  /** Unique identifier of the feature flag to override. */
  flagId?: string;
};

export const featureFlagOverrideSchema: Schema<FeatureFlagOverride> = s.object<FeatureFlagOverride>({
  disabled: s.optional(s.boolean()),
  flagId: s.optional(s.string()),
});
