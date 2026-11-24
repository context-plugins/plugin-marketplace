import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type3BundleSocialSocialAccountApiSchema,
  type Type3BundleSocialSocialAccountApi,
} from "./type3-bundle-social-social-account-api.js";

export type ApiV1SocialAccountSetChannelRequest = {
  type: Type3BundleSocialSocialAccountApi;
  teamId: string;
  channelId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountSetChannelRequestSchema: Schema<ApiV1SocialAccountSetChannelRequest> =
  s.object<ApiV1SocialAccountSetChannelRequest>(
    {
      type: type3BundleSocialSocialAccountApiSchema,
      teamId: s.string(),
      channelId: s.string(),
    },
    { additionalProperties: s.json() },
  );
