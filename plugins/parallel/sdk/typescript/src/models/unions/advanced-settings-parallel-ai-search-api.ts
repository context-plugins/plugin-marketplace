import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { advancedSearchSettingsSchema, type AdvancedSearchSettings } from "../advanced-search-settings.js";

/**
 * Advanced configuration for source policy, fetch policy, and excerpt settings. May impact result
 * quality and latency unless used carefully. When omitted, excerpts are enabled by default.
 */
export type AdvancedSettingsParallelAiSearchApi = AdvancedSearchSettings;

export const advancedSettingsParallelAiSearchApiSchema: Schema<AdvancedSettingsParallelAiSearchApi> =
  s.of<AdvancedSettingsParallelAiSearchApi>(s.union([s.lazy(() => advancedSearchSettingsSchema)]));
