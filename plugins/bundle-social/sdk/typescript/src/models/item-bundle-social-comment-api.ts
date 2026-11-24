import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  platformBundleSocialCommentApiSchema,
  type PlatformBundleSocialCommentApi,
} from "./platform-bundle-social-comment-api.js";
import {
  platformDataBundleSocialCommentApiSchema,
  type PlatformDataBundleSocialCommentApi,
} from "./platform-data-bundle-social-comment-api.js";

export type ItemBundleSocialCommentApi = {
  id: string;
  teamId: string;
  organizationId?: string | null;
  postId?: string | null;
  importedPostId?: string | null;
  socialAccountId: string;
  importId: string;
  platform: PlatformBundleSocialCommentApi;
  externalId: string;
  externalParentId?: string | null;
  externalPostId?: string | null;
  authorName?: string | null;
  authorExternalId?: string | null;
  authorProfileUrl?: string | null;
  authorAvatarUrl?: string | null;
  text?: string | null;
  likesCount: number;
  repliesCount: number;
  platformData?: PlatformDataBundleSocialCommentApi;
  publishedAt?: Date | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemBundleSocialCommentApiSchema: Schema<ItemBundleSocialCommentApi> =
  s.object<ItemBundleSocialCommentApi>(
    {
      id: s.string(),
      teamId: s.string(),
      organizationId: s.optionalNullable(s.string()),
      postId: s.optionalNullable(s.string()),
      importedPostId: s.optionalNullable(s.string()),
      socialAccountId: s.string(),
      importId: s.string(),
      platform: platformBundleSocialCommentApiSchema,
      externalId: s.string(),
      externalParentId: s.optionalNullable(s.string()),
      externalPostId: s.optionalNullable(s.string()),
      authorName: s.optionalNullable(s.string()),
      authorExternalId: s.optionalNullable(s.string()),
      authorProfileUrl: s.optionalNullable(s.string()),
      authorAvatarUrl: s.optionalNullable(s.string()),
      text: s.optionalNullable(s.string()),
      likesCount: s.float64(),
      repliesCount: s.float64(),
      platformData: s.optional(s.lazy(() => platformDataBundleSocialCommentApiSchema)),
      publishedAt: s.optionalNullable(s.dateTime()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      deletedAt: s.optionalNullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
