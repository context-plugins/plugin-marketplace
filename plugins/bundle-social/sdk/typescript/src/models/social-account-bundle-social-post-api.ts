import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { socialAccountSchema, type SocialAccount } from "./social-account.js";

export type SocialAccountBundleSocialPostApi = {
  postId: string;
  socialAccountId: string;
  externalPostId?: string | null;
  externalAlternatePostId?: string | null;
  externalVideoId?: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  socialAccount: SocialAccount;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const socialAccountBundleSocialPostApiSchema: Schema<SocialAccountBundleSocialPostApi> =
  s.object<SocialAccountBundleSocialPostApi>(
    {
      postId: s.string(),
      socialAccountId: s.string(),
      externalPostId: s.optionalNullable(s.string()),
      externalAlternatePostId: s.optionalNullable(s.string()),
      externalVideoId: s.optionalNullable(s.string()),
      createdAt: s.nullable(s.dateTime()),
      updatedAt: s.nullable(s.dateTime()),
      deletedAt: s.optionalNullable(s.dateTime()),
      socialAccount: socialAccountSchema,
    },
    { additionalProperties: s.json() },
  );
