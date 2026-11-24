import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataBundleSocialCommentApiSchema,
  type DataBundleSocialCommentApi,
} from "./data-bundle-social-comment-api.js";
import { socialAccountType1Schema, type SocialAccountType1 } from "./social-account-type1.js";
import { status5Schema, type Status5 } from "./status5.js";

export type ApiV1CommentRequest1 = {
  teamId: string;
  title?: string;
  internalPostId?: string;
  importedPostId?: string;
  internalParentCommentId?: string | null;
  fetchedParentCommentId?: string | null;
  postDate?: string;
  status?: Status5;
  socialAccountTypes?: SocialAccountType1[];
  data?: DataBundleSocialCommentApi;
  text?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1CommentRequest1Properties: s.Shape<ApiV1CommentRequest1> = {
  teamId: s.string(),
  title: s.optional(s.string()),
  internalPostId: s.optional(s.string()),
  importedPostId: s.optional(s.string()),
  internalParentCommentId: s.optionalNullable(s.string()),
  fetchedParentCommentId: s.optionalNullable(s.string()),
  postDate: s.optional(s.string()),
  status: s.optional(s.lazy(() => status5Schema)),
  socialAccountTypes: s.optional(s.array(s.lazy(() => socialAccountType1Schema))),
  data: s.optional(s.lazy(() => dataBundleSocialCommentApiSchema)),
  text: s.optional(s.string()),
};

export const apiV1CommentRequest1InternalSchema: Schema<ApiV1CommentRequest1> =
  s.object<ApiV1CommentRequest1>(apiV1CommentRequest1Properties, { additionalProperties: s.json() });

export const apiV1CommentRequest1Schema: Schema<ApiV1CommentRequest1> = s.lazySchema(() =>
  s.object<ApiV1CommentRequest1>(
    {
      ...apiV1CommentRequest1Properties,
      title: s.optional(s.string().check(s.minLength(1))),
      socialAccountTypes: s.optional(s.array(s.lazy(() => socialAccountType1Schema)).check(s.minLength(1))),
      text: s.optional(s.string().check(s.minLength(1), s.maxLength(10000))),
    },
    { additionalProperties: s.json() },
  ),
);
