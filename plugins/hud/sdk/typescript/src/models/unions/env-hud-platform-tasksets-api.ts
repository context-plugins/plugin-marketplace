import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EnvHudPlatformTasksetsApi = string;

export const envHudPlatformTasksetsApiSchema: Schema<EnvHudPlatformTasksetsApi> =
  s.of<EnvHudPlatformTasksetsApi>(s.union([s.string()]));
