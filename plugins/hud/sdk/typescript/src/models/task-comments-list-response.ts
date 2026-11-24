import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskCommentItemSchema, type TaskCommentItem } from "./task-comment-item.js";
import { reasonSchema, type Reason } from "./unions/reason.js";

export type TaskCommentsListResponse = {
  comments: TaskCommentItem[];
  canComment: boolean;
  reason?: Reason;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskCommentsListResponseSchema: Schema<TaskCommentsListResponse> =
  s.object<TaskCommentsListResponse>(
    {
      comments: s.array(s.lazy(() => taskCommentItemSchema)),
      canComment: s.boolean(),
      reason: s.optional(s.lazy(() => reasonSchema)),
      _keysMap: {
        canComment: "can_comment",
      },
    },
    { additionalProperties: s.json() },
  );
