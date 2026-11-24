import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1SocialAccountConnectionCheckResponse = {
  success: boolean;
  message?: string;
  socialAccountId: string;
  checkedAt: string;
  limit: number;
  used: number;
  remaining: number;
  windowSeconds: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1SocialAccountConnectionCheckResponseProperties: s.Shape<ApiV1SocialAccountConnectionCheckResponse> =
  {
    success: s.boolean(),
    message: s.optional(s.string()),
    socialAccountId: s.string(),
    checkedAt: s.string(),
    limit: s.int(),
    used: s.int(),
    remaining: s.int(),
    windowSeconds: s.int(),
  };

export const apiV1SocialAccountConnectionCheckResponseInternalSchema: Schema<ApiV1SocialAccountConnectionCheckResponse> =
  s.object<ApiV1SocialAccountConnectionCheckResponse>(apiV1SocialAccountConnectionCheckResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1SocialAccountConnectionCheckResponseSchema: Schema<ApiV1SocialAccountConnectionCheckResponse> =
  s.lazySchema(() =>
    s.object<ApiV1SocialAccountConnectionCheckResponse>(
      {
        ...apiV1SocialAccountConnectionCheckResponseProperties,
        limit: s.int().check(s.gte(1)),
        used: s.int().check(s.gte(0)),
        remaining: s.int().check(s.gte(0)),
        windowSeconds: s.int().check(s.gte(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
