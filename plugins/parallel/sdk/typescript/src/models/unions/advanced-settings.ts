import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { advancedExtractSettingsSchema, type AdvancedExtractSettings } from "../advanced-extract-settings.js";

/**
 * Advanced configuration for fetch policy, excerpt settings, and full content settings. May impact
 * result quality and latency unless used carefully. When omitted, excerpts are enabled and full
 * content is disabled by default.
 */
export type AdvancedSettings = AdvancedExtractSettings;

export const advancedSettingsSchema: Schema<AdvancedSettings> = s.of<AdvancedSettings>(
  s.union([s.lazy(() => advancedExtractSettingsSchema)]),
);
