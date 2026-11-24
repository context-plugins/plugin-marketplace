import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  parentIdHudPlatformTasksApiSchema,
  type ParentIdHudPlatformTasksApi,
} from "./unions/parent-id-hud-platform-tasks-api.js";

export type CreateTaskCommentRequest = {
  body: string;
  parentId?: ParentIdHudPlatformTasksApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTaskCommentRequestSchema: Schema<CreateTaskCommentRequest> =
  s.object<CreateTaskCommentRequest>(
    {
      body: s.string(),
      parentId: s.optional(s.lazy(() => parentIdHudPlatformTasksApiSchema)),
      _keysMap: {
        parentId: "parent_id",
      },
    },
    { additionalProperties: s.json() },
  );
