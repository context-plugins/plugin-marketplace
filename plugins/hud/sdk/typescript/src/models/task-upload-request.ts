import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  taskUploadItemInternalSchema,
  taskUploadItemSchema,
  type TaskUploadItem,
} from "./task-upload-item.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { projectIdSchema, type ProjectId } from "./unions/project-id.js";
import { registryIdSchema, type RegistryId } from "./unions/registry-id.js";
import { tasksetIdSchema, type TasksetId } from "./unions/taskset-id.js";
import {
  tasksetNameHudPlatformTasksApiInternalSchema,
  tasksetNameHudPlatformTasksApiSchema,
  type TasksetNameHudPlatformTasksApi,
} from "./unions/taskset-name-hud-platform-tasks-api.js";

export type TaskUploadRequest = {
  /** The team taskset to upload to, created when absent; required without taskset_id */
  tasksetName?: TasksetNameHudPlatformTasksApi;
  /** The taskset to upload to; taskset_name is then ignored */
  tasksetId?: TasksetId;
  description?: Description;
  registryId?: RegistryId;
  projectId?: ProjectId;
  tasks: TaskUploadItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taskUploadRequestProperties: s.Shape<TaskUploadRequest> = {
  tasksetName: s.optional(s.lazy(() => tasksetNameHudPlatformTasksApiInternalSchema)),
  tasksetId: s.optional(s.lazy(() => tasksetIdSchema)),
  description: s.optional(s.lazy(() => descriptionSchema)),
  registryId: s.optional(s.lazy(() => registryIdSchema)),
  projectId: s.optional(s.lazy(() => projectIdSchema)),
  tasks: s.array(s.lazy(() => taskUploadItemInternalSchema)),
  _keysMap: {
    tasksetName: "taskset_name",
    tasksetId: "taskset_id",
    registryId: "registry_id",
    projectId: "project_id",
  },
};

export const taskUploadRequestInternalSchema: Schema<TaskUploadRequest> = s.object<TaskUploadRequest>(
  taskUploadRequestProperties,
  { additionalProperties: s.json() },
);

export const taskUploadRequestSchema: Schema<TaskUploadRequest> = s.lazySchema(() =>
  s.object<TaskUploadRequest>(
    {
      ...taskUploadRequestProperties,
      tasksetName: s.optional(s.lazy(() => tasksetNameHudPlatformTasksApiSchema)),
      tasks: s.array(s.lazy(() => taskUploadItemSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
