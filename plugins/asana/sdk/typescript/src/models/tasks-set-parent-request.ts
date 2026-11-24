import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskSetParentRequestSchema, type TaskSetParentRequest } from "./task-set-parent-request.js";

export type TasksSetParentRequest = {
  data?: TaskSetParentRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksSetParentRequestSchema: Schema<TasksSetParentRequest> = s.object<TasksSetParentRequest>(
  {
    data: s.optional(s.lazy(() => taskSetParentRequestSchema)),
  },
  { additionalProperties: s.json() },
);
