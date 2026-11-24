import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { socialAccountSchema, type SocialAccount } from "./social-account.js";

export type ApiV1SocialAccountProfileRefreshResponse = {
  success: boolean;
  message?: string;
  socialAccountId: string;
  socialAccount: SocialAccount;
  refreshedAt: string;
  limit: number;
  used: number;
  remaining: number;
  windowSeconds: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1SocialAccountProfileRefreshResponseProperties: s.Shape<ApiV1SocialAccountProfileRefreshResponse> =
  {
    success: s.boolean(),
    message: s.optional(s.string()),
    socialAccountId: s.string(),
    socialAccount: socialAccountSchema,
    refreshedAt: s.string(),
    limit: s.int(),
    used: s.int(),
    remaining: s.int(),
    windowSeconds: s.int(),
  };

export const apiV1SocialAccountProfileRefreshResponseInternalSchema: Schema<ApiV1SocialAccountProfileRefreshResponse> =
  s.object<ApiV1SocialAccountProfileRefreshResponse>(apiV1SocialAccountProfileRefreshResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1SocialAccountProfileRefreshResponseSchema: Schema<ApiV1SocialAccountProfileRefreshResponse> =
  s.lazySchema(() =>
    s.object<ApiV1SocialAccountProfileRefreshResponse>(
      {
        ...apiV1SocialAccountProfileRefreshResponseProperties,
        limit: s.int().check(s.gte(1)),
        used: s.int().check(s.gte(0)),
        remaining: s.int().check(s.gte(0)),
        windowSeconds: s.int().check(s.gte(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
