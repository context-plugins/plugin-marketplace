import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  socialAccountTypeBundleSocialOrganizationApiSchema,
  type SocialAccountTypeBundleSocialOrganizationApi,
} from "./social-account-type-bundle-social-organization-api.js";

export type ApiV1SocialAccountCopyRequest = {
  fromTeamId: string;
  toTeamId: string;
  /**
   * If you set that to true, selected page will not be transferred automatically. The user will
   * have to select the page themselves again. This only applies to Facebook, Instagram, Linkedin
   * and Youtube.
   */
  resetChannel?: boolean;
  socialAccountTypes: SocialAccountTypeBundleSocialOrganizationApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1SocialAccountCopyRequestProperties: s.Shape<ApiV1SocialAccountCopyRequest> = {
  fromTeamId: s.string(),
  toTeamId: s.string(),
  resetChannel: s.optional(s.boolean()),
  socialAccountTypes: s.array(s.lazy(() => socialAccountTypeBundleSocialOrganizationApiSchema)),
};

export const apiV1SocialAccountCopyRequestInternalSchema: Schema<ApiV1SocialAccountCopyRequest> =
  s.object<ApiV1SocialAccountCopyRequest>(apiV1SocialAccountCopyRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1SocialAccountCopyRequestSchema: Schema<ApiV1SocialAccountCopyRequest> = s.lazySchema(() =>
  s.object<ApiV1SocialAccountCopyRequest>(
    {
      ...apiV1SocialAccountCopyRequestProperties,
      socialAccountTypes: s
        .array(s.lazy(() => socialAccountTypeBundleSocialOrganizationApiSchema))
        .check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
