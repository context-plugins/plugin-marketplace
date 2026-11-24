import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  platformBundleSocialCommentApiSchema,
  type PlatformBundleSocialCommentApi,
} from "./platform-bundle-social-comment-api.js";
import {
  statusBundleSocialCommentApiSchema,
  type StatusBundleSocialCommentApi,
} from "./status-bundle-social-comment-api.js";

export type ApiV1CommentImportResponse = {
  id: string;
  teamId: string;
  organizationId?: string | null;
  socialAccountId: string;
  postId?: string | null;
  importedPostId?: string | null;
  platform: PlatformBundleSocialCommentApi;
  status: StatusBundleSocialCommentApi;
  commentsImported: number;
  error?: string | null;
  rateLimitResetAt?: Date | null;
  startedAt?: Date | null;
  completedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CommentImportResponseSchema: Schema<ApiV1CommentImportResponse> =
  s.object<ApiV1CommentImportResponse>(
    {
      id: s.string(),
      teamId: s.string(),
      organizationId: s.optionalNullable(s.string()),
      socialAccountId: s.string(),
      postId: s.optionalNullable(s.string()),
      importedPostId: s.optionalNullable(s.string()),
      platform: platformBundleSocialCommentApiSchema,
      status: statusBundleSocialCommentApiSchema,
      commentsImported: s.float64(),
      error: s.optionalNullable(s.string()),
      rateLimitResetAt: s.optionalNullable(s.dateTime()),
      startedAt: s.optionalNullable(s.dateTime()),
      completedAt: s.optionalNullable(s.dateTime()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
