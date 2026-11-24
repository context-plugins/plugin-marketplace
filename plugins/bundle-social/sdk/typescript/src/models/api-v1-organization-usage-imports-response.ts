import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  paginationBundleSocialOrganizationApiSchema,
  type PaginationBundleSocialOrganizationApi,
} from "./pagination-bundle-social-organization-api.js";
import {
  socialAccountBundleSocialOrganizationApiSchema,
  type SocialAccountBundleSocialOrganizationApi,
} from "./social-account-bundle-social-organization-api.js";

export type ApiV1OrganizationUsageImportsResponse = {
  limitPerSocialAccount: number;
  socialAccounts: SocialAccountBundleSocialOrganizationApi[];
  pagination: PaginationBundleSocialOrganizationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1OrganizationUsageImportsResponseSchema: Schema<ApiV1OrganizationUsageImportsResponse> =
  s.object<ApiV1OrganizationUsageImportsResponse>(
    {
      limitPerSocialAccount: s.float64(),
      socialAccounts: s.array(s.lazy(() => socialAccountBundleSocialOrganizationApiSchema)),
      pagination: paginationBundleSocialOrganizationApiSchema,
    },
    { additionalProperties: s.json() },
  );
