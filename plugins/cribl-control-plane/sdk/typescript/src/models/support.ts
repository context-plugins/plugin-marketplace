import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { featureFlagOverrideSchema, type FeatureFlagOverride } from "./feature-flag-override.js";

/** Support and diagnostics settings. */
export type Support = {
  /** List of feature flag overrides applied to this Cribl instance. */
  featureFlagOverrides?: FeatureFlagOverride[];
  /** Maximum number of log files to retain before rotating. */
  logFileMaxFiles?: number;
  /** Maximum size of each log file. Value is a numeral and unit such as <code>10 MB</code>. */
  logFileMaxSize?: string;
};

export const supportSchema: Schema<Support> = s.object<Support>({
  featureFlagOverrides: s.optional(s.array(s.lazy(() => featureFlagOverrideSchema))),
  logFileMaxFiles: s.optional(s.int()),
  logFileMaxSize: s.optional(s.string()),
});
