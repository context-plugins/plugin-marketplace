import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TaskIdHudPlatformTracesApi = string;

export const taskIdHudPlatformTracesApiSchema: Schema<TaskIdHudPlatformTracesApi> =
  s.of<TaskIdHudPlatformTracesApi>(s.union([s.string()]));
