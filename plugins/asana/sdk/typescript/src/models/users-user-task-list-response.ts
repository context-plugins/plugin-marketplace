import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userTaskListResponseSchema, type UserTaskListResponse } from "./user-task-list-response.js";

export type UsersUserTaskListResponse = {
  data?: UserTaskListResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersUserTaskListResponseSchema: Schema<UsersUserTaskListResponse> =
  s.object<UsersUserTaskListResponse>(
    {
      data: s.optional(s.lazy(() => userTaskListResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
