import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  itemBundleSocialOrganizationApiSchema,
  type ItemBundleSocialOrganizationApi,
} from "./item-bundle-social-organization-api.js";

export type ApiV1OrganizationUsageMessagesResponse = {
  items: ItemBundleSocialOrganizationApi[];
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1OrganizationUsageMessagesResponseSchema: Schema<ApiV1OrganizationUsageMessagesResponse> =
  s.object<ApiV1OrganizationUsageMessagesResponse>(
    {
      items: s.array(s.lazy(() => itemBundleSocialOrganizationApiSchema)),
      total: s.float64(),
    },
    { additionalProperties: s.json() },
  );
