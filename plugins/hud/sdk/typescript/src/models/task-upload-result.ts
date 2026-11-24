import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  outcomeHudPlatformTasksApiSchema,
  type OutcomeHudPlatformTasksApi,
} from "./outcome-hud-platform-tasks-api.js";
import { taskVersionIdSchema, type TaskVersionId } from "./unions/task-version-id.js";

/** The task one upload item landed on. */
export type TaskUploadResult = {
  externalId: string;
  taskId: string;
  taskVersionId: TaskVersionId;
  outcome: OutcomeHudPlatformTasksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskUploadResultSchema: Schema<TaskUploadResult> = s.object<TaskUploadResult>(
  {
    externalId: s.string(),
    taskId: s.string(),
    taskVersionId: taskVersionIdSchema,
    outcome: outcomeHudPlatformTasksApiSchema,
    _keysMap: {
      externalId: "external_id",
      taskId: "task_id",
      taskVersionId: "task_version_id",
    },
  },
  { additionalProperties: s.json() },
);
