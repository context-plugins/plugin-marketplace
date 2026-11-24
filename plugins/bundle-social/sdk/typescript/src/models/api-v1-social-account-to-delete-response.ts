import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialSocialAccountApiSchema,
  type ItemBundleSocialSocialAccountApi,
} from "./item-bundle-social-social-account-api.js";
import {
  paginationBundleSocialOrganizationApiSchema,
  type PaginationBundleSocialOrganizationApi,
} from "./pagination-bundle-social-organization-api.js";

export type ApiV1SocialAccountToDeleteResponse = {
  items: ItemBundleSocialSocialAccountApi[];
  pagination: PaginationBundleSocialOrganizationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1SocialAccountToDeleteResponseSchema: Schema<ApiV1SocialAccountToDeleteResponse> =
  s.object<ApiV1SocialAccountToDeleteResponse>(
    {
      items: s.array(s.lazy(() => itemBundleSocialSocialAccountApiSchema)),
      pagination: paginationBundleSocialOrganizationApiSchema,
    },
    { additionalProperties: s.json() },
  );
