import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userTaskListResponseSchema, type UserTaskListResponse } from "./user-task-list-response.js";

export type UserTaskListsResponse = {
  data?: UserTaskListResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userTaskListsResponseSchema: Schema<UserTaskListsResponse> = s.object<UserTaskListsResponse>(
  {
    data: s.optional(s.lazy(() => userTaskListResponseSchema)),
  },
  { additionalProperties: s.json() },
);
