import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type3BundleSocialSocialAccountApiSchema,
  type Type3BundleSocialSocialAccountApi,
} from "./type3-bundle-social-social-account-api.js";

export type ApiV1SocialAccountUnsetChannelRequest = {
  type: Type3BundleSocialSocialAccountApi;
  teamId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountUnsetChannelRequestSchema: Schema<ApiV1SocialAccountUnsetChannelRequest> =
  s.object<ApiV1SocialAccountUnsetChannelRequest>(
    {
      type: type3BundleSocialSocialAccountApiSchema,
      teamId: s.string(),
    },
    { additionalProperties: s.json() },
  );
