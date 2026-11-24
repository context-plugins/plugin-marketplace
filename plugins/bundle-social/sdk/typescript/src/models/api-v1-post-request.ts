import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataInternalSchema, dataSchema, type Data } from "./data.js";
import { firstComment2InternalSchema, firstComment2Schema, type FirstComment2 } from "./first-comment2.js";
import {
  socialAccountTypeBundleSocialOrganizationApiSchema,
  type SocialAccountTypeBundleSocialOrganizationApi,
} from "./social-account-type-bundle-social-organization-api.js";
import { status5Schema, type Status5 } from "./status5.js";

export type ApiV1PostRequest = {
  title?: string;
  referenceKey?: string | null;
  postDate?: string;
  status?: Status5;
  socialAccountTypes?: SocialAccountTypeBundleSocialOrganizationApi[];
  data?: Data;
  firstComment?: FirstComment2 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PostRequestProperties: s.Shape<ApiV1PostRequest> = {
  title: s.optional(s.string()),
  referenceKey: s.optionalNullable(s.string()),
  postDate: s.optional(s.string()),
  status: s.optional(s.lazy(() => status5Schema)),
  socialAccountTypes: s.optional(s.array(s.lazy(() => socialAccountTypeBundleSocialOrganizationApiSchema))),
  data: s.optional(s.lazy(() => dataInternalSchema)),
  firstComment: s.optionalNullable(s.lazy(() => firstComment2InternalSchema)),
};

export const apiV1PostRequestInternalSchema: Schema<ApiV1PostRequest> = s.object<ApiV1PostRequest>(
  apiV1PostRequestProperties,
  { additionalProperties: s.json() },
);

export const apiV1PostRequestSchema: Schema<ApiV1PostRequest> = s.lazySchema(() =>
  s.object<ApiV1PostRequest>(
    {
      ...apiV1PostRequestProperties,
      title: s.optional(s.string().check(s.minLength(1))),
      referenceKey: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(128))),
      socialAccountTypes: s.optional(
        s.array(s.lazy(() => socialAccountTypeBundleSocialOrganizationApiSchema)).check(s.minLength(1)),
      ),
      data: s.optional(s.lazy(() => dataSchema)),
      firstComment: s.optionalNullable(s.lazy(() => firstComment2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
