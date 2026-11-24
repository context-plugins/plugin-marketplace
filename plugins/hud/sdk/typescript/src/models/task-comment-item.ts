import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { avatarUrlSchema, type AvatarUrl } from "./unions/avatar-url.js";
import {
  parentIdHudPlatformTasksApiSchema,
  type ParentIdHudPlatformTasksApi,
} from "./unions/parent-id-hud-platform-tasks-api.js";
import { updatedAtSchema, type UpdatedAt } from "./unions/updated-at.js";
import { userNameSchema, type UserName } from "./unions/user-name.js";

export type TaskCommentItem = {
  id: string;
  taskId: string;
  parentId?: ParentIdHudPlatformTasksApi;
  userId: string;
  message: string;
  createdAt: Date;
  updatedAt?: UpdatedAt;
  userName?: UserName;
  avatarUrl?: AvatarUrl;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskCommentItemSchema: Schema<TaskCommentItem> = s.object<TaskCommentItem>(
  {
    id: s.string(),
    taskId: s.string(),
    parentId: s.optional(s.lazy(() => parentIdHudPlatformTasksApiSchema)),
    userId: s.string(),
    message: s.string(),
    createdAt: s.dateTime(),
    updatedAt: s.optional(s.lazy(() => updatedAtSchema)),
    userName: s.optional(s.lazy(() => userNameSchema)),
    avatarUrl: s.optional(s.lazy(() => avatarUrlSchema)),
    _keysMap: {
      taskId: "task_id",
      parentId: "parent_id",
      userId: "user_id",
      createdAt: "created_at",
      updatedAt: "updated_at",
      userName: "user_name",
      avatarUrl: "avatar_url",
    },
  },
  { additionalProperties: s.json() },
);
