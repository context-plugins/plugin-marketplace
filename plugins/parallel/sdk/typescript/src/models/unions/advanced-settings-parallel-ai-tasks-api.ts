import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskAdvancedSettingsSchema, type TaskAdvancedSettings } from "../task-advanced-settings.js";

/** Advanced search configuration for the task run. */
export type AdvancedSettingsParallelAiTasksApi = TaskAdvancedSettings;

export const advancedSettingsParallelAiTasksApiSchema: Schema<AdvancedSettingsParallelAiTasksApi> =
  s.of<AdvancedSettingsParallelAiTasksApi>(s.union([s.lazy(() => taskAdvancedSettingsSchema)]));
