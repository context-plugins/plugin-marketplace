import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  taskRemoveFollowersRequestSchema,
  type TaskRemoveFollowersRequest,
} from "./task-remove-followers-request.js";

export type TasksRemoveFollowersRequest = {
  data?: TaskRemoveFollowersRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksRemoveFollowersRequestSchema: Schema<TasksRemoveFollowersRequest> =
  s.object<TasksRemoveFollowersRequest>(
    {
      data: s.optional(s.lazy(() => taskRemoveFollowersRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
