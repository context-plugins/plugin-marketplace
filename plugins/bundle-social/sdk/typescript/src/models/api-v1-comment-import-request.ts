import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { socialAccountTypeSchema, type SocialAccountType } from "./social-account-type.js";

export type ApiV1CommentImportRequest = {
  teamId: string;
  postId?: string;
  importedPostId?: string;
  socialAccountType: SocialAccountType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CommentImportRequestSchema: Schema<ApiV1CommentImportRequest> =
  s.object<ApiV1CommentImportRequest>(
    {
      teamId: s.string(),
      postId: s.optional(s.string()),
      importedPostId: s.optional(s.string()),
      socialAccountType: socialAccountTypeSchema,
    },
    { additionalProperties: s.json() },
  );
