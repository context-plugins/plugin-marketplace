import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { advancedMonitorSettingsSchema, type AdvancedMonitorSettings } from "../advanced-monitor-settings.js";

/** Advanced monitor configuration. */
export type AdvancedSettingsParallelAiMonitorApi = AdvancedMonitorSettings;

export const advancedSettingsParallelAiMonitorApiSchema: Schema<AdvancedSettingsParallelAiMonitorApi> =
  s.of<AdvancedSettingsParallelAiMonitorApi>(s.union([s.lazy(() => advancedMonitorSettingsSchema)]));
