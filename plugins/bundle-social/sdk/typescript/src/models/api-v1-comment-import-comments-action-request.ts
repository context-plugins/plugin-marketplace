import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  actionBundleSocialCommentApiSchema,
  type ActionBundleSocialCommentApi,
} from "./action-bundle-social-comment-api.js";

export type ApiV1CommentImportCommentsActionRequest = {
  teamId: string;
  action: ActionBundleSocialCommentApi;
  reason?: string;
  banAuthor?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1CommentImportCommentsActionRequestProperties: s.Shape<ApiV1CommentImportCommentsActionRequest> = {
  teamId: s.string(),
  action: actionBundleSocialCommentApiSchema,
  reason: s.optional(s.string()),
  banAuthor: s.optional(s.boolean()),
};

export const apiV1CommentImportCommentsActionRequestInternalSchema: Schema<ApiV1CommentImportCommentsActionRequest> =
  s.object<ApiV1CommentImportCommentsActionRequest>(apiV1CommentImportCommentsActionRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1CommentImportCommentsActionRequestSchema: Schema<ApiV1CommentImportCommentsActionRequest> =
  s.lazySchema(() =>
    s.object<ApiV1CommentImportCommentsActionRequest>(
      {
        ...apiV1CommentImportCommentsActionRequestProperties,
        reason: s.optional(s.string().check(s.maxLength(500))),
      },
      { additionalProperties: s.json() },
    ),
  );
