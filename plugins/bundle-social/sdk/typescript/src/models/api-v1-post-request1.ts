import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataInternalSchema, dataSchema, type Data } from "./data.js";
import { firstComment2InternalSchema, firstComment2Schema, type FirstComment2 } from "./first-comment2.js";
import {
  socialAccountTypeBundleSocialOrganizationApiSchema,
  type SocialAccountTypeBundleSocialOrganizationApi,
} from "./social-account-type-bundle-social-organization-api.js";
import { status5Schema, type Status5 } from "./status5.js";

export type ApiV1PostRequest1 = {
  teamId: string;
  title: string;
  referenceKey?: string | null;
  postDate: string;
  status: Status5;
  socialAccountTypes: SocialAccountTypeBundleSocialOrganizationApi[];
  data: Data;
  firstComment?: FirstComment2 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PostRequest1Properties: s.Shape<ApiV1PostRequest1> = {
  teamId: s.string(),
  title: s.string(),
  referenceKey: s.optionalNullable(s.string()),
  postDate: s.string(),
  status: status5Schema,
  socialAccountTypes: s.array(s.lazy(() => socialAccountTypeBundleSocialOrganizationApiSchema)),
  data: dataInternalSchema,
  firstComment: s.optionalNullable(s.lazy(() => firstComment2InternalSchema)),
};

export const apiV1PostRequest1InternalSchema: Schema<ApiV1PostRequest1> = s.object<ApiV1PostRequest1>(
  apiV1PostRequest1Properties,
  { additionalProperties: s.json() },
);

export const apiV1PostRequest1Schema: Schema<ApiV1PostRequest1> = s.lazySchema(() =>
  s.object<ApiV1PostRequest1>(
    {
      ...apiV1PostRequest1Properties,
      title: s.string().check(s.minLength(1)),
      referenceKey: s.optionalNullable(s.string().check(s.minLength(1), s.maxLength(128))),
      socialAccountTypes: s
        .array(s.lazy(() => socialAccountTypeBundleSocialOrganizationApiSchema))
        .check(s.minLength(1)),
      data: dataSchema,
      firstComment: s.optionalNullable(s.lazy(() => firstComment2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
