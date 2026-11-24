import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ScenarioHudPlatformTasksetsApi = string;

export const scenarioHudPlatformTasksetsApiSchema: Schema<ScenarioHudPlatformTasksetsApi> =
  s.of<ScenarioHudPlatformTasksetsApi>(s.union([s.string()]));
