import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The team taskset to upload to, created when absent; required without taskset_id */
export type TasksetNameHudPlatformTasksApi = string;

export const tasksetNameHudPlatformTasksApiInternalSchema: Schema<TasksetNameHudPlatformTasksApi> =
  s.of<TasksetNameHudPlatformTasksApi>(s.union([s.string()]));

export const tasksetNameHudPlatformTasksApiSchema: Schema<TasksetNameHudPlatformTasksApi> = s.lazySchema(() =>
  s.of<TasksetNameHudPlatformTasksApi>(s.union([s.string().check(s.maxLength(255))])),
);
