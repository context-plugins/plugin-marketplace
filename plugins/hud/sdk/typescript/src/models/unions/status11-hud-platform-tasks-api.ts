import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  status1HudPlatformTasksApiSchema,
  type Status1HudPlatformTasksApi,
} from "../status1-hud-platform-tasks-api.js";

export type Status11HudPlatformTasksApi = Status1HudPlatformTasksApi;

export const status11HudPlatformTasksApiSchema: Schema<Status11HudPlatformTasksApi> =
  s.of<Status11HudPlatformTasksApi>(s.union([s.lazy(() => status1HudPlatformTasksApiSchema)]));
