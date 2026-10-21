import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  featureFlagOverrideConfSystemSettingsConfSchema,
  type FeatureFlagOverrideConfSystemSettingsConf,
} from "./feature-flag-override-conf-system-settings-conf.js";

/** Support and diagnostics settings. */
export type SupportTypeSystemSettingsConf = {
  /** List of feature flag overrides applied to this Cribl instance. */
  featureFlagOverrides?: FeatureFlagOverrideConfSystemSettingsConf[];
  /** Maximum number of log files to retain before rotating. */
  logFileMaxFiles?: number;
  /** Maximum size of each log file. Value is a numeral and unit such as <code>10 MB</code>. */
  logFileMaxSize?: string;
};

export const supportTypeSystemSettingsConfSchema: Schema<SupportTypeSystemSettingsConf> =
  s.object<SupportTypeSystemSettingsConf>({
    featureFlagOverrides: s.optional(s.array(s.lazy(() => featureFlagOverrideConfSystemSettingsConfSchema))),
    logFileMaxFiles: s.optional(s.int()),
    logFileMaxSize: s.optional(s.string()),
  });
