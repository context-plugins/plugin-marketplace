import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskResponseSchema, type TaskResponse } from "./task-response.js";

export type TasksRemoveFollowersResponse = {
  data?: TaskResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksRemoveFollowersResponseSchema: Schema<TasksRemoveFollowersResponse> =
  s.object<TasksRemoveFollowersResponse>(
    {
      data: s.optional(s.lazy(() => taskResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
