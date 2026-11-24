import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskResponseSchema, type TaskResponse } from "./task-response.js";

export type TasksAddFollowersResponse = {
  data?: TaskResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksAddFollowersResponseSchema: Schema<TasksAddFollowersResponse> =
  s.object<TasksAddFollowersResponse>(
    {
      data: s.optional(s.lazy(() => taskResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
