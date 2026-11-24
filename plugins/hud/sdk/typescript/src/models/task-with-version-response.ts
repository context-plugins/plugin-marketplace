import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskResponseInternalSchema, taskResponseSchema, type TaskResponse } from "./task-response.js";
import { taskVersionResponseSchema, type TaskVersionResponse } from "./task-version-response.js";

export type TaskWithVersionResponse = {
  task: TaskResponse;
  version: TaskVersionResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const taskWithVersionResponseProperties: s.Shape<TaskWithVersionResponse> = {
  task: taskResponseInternalSchema,
  version: taskVersionResponseSchema,
};

export const taskWithVersionResponseInternalSchema: Schema<TaskWithVersionResponse> =
  s.object<TaskWithVersionResponse>(taskWithVersionResponseProperties, { additionalProperties: s.json() });

export const taskWithVersionResponseSchema: Schema<TaskWithVersionResponse> = s.lazySchema(() =>
  s.object<TaskWithVersionResponse>(
    {
      ...taskWithVersionResponseProperties,
      task: taskResponseSchema,
    },
    { additionalProperties: s.json() },
  ),
);
