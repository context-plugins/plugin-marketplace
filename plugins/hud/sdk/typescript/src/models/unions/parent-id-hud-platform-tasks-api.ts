import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ParentIdHudPlatformTasksApi = string;

export const parentIdHudPlatformTasksApiSchema: Schema<ParentIdHudPlatformTasksApi> =
  s.of<ParentIdHudPlatformTasksApi>(s.union([s.string()]));
