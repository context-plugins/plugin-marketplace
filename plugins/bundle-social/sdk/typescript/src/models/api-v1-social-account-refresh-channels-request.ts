import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type7BundleSocialSocialAccountApiSchema,
  type Type7BundleSocialSocialAccountApi,
} from "./type7-bundle-social-social-account-api.js";

export type ApiV1SocialAccountRefreshChannelsRequest = {
  type: Type7BundleSocialSocialAccountApi;
  teamId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountRefreshChannelsRequestSchema: Schema<ApiV1SocialAccountRefreshChannelsRequest> =
  s.object<ApiV1SocialAccountRefreshChannelsRequest>(
    {
      type: type7BundleSocialSocialAccountApiSchema,
      teamId: s.string(),
    },
    { additionalProperties: s.json() },
  );
