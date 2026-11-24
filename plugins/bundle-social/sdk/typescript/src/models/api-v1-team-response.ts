import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bioInternalSchema, bioSchema, type Bio } from "./bio.js";
import { botSchema, type Bot } from "./bot.js";
import { createdBySchema, type CreatedBy } from "./created-by.js";
import {
  organizationBundleSocialTeamApiInternalSchema,
  organizationBundleSocialTeamApiSchema,
  type OrganizationBundleSocialTeamApi,
} from "./organization-bundle-social-team-api.js";
import { socialAccountSchema, type SocialAccount } from "./social-account.js";

export type ApiV1TeamResponse = {
  id: string;
  name: string;
  avatarUrl?: string | null;
  organizationId: string;
  createdById: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  organization: OrganizationBundleSocialTeamApi;
  createdBy: CreatedBy;
  bots: Bot[];
  socialAccounts: SocialAccount[];
  bio?: Bio | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TeamResponseProperties: s.Shape<ApiV1TeamResponse> = {
  id: s.string(),
  name: s.string(),
  avatarUrl: s.optionalNullable(s.string()),
  organizationId: s.string(),
  createdById: s.string(),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  deletedAt: s.optionalNullable(s.dateTime()),
  organization: organizationBundleSocialTeamApiInternalSchema,
  createdBy: createdBySchema,
  bots: s.array(s.lazy(() => botSchema)),
  socialAccounts: s.array(s.lazy(() => socialAccountSchema)),
  bio: s.optionalNullable(s.lazy(() => bioInternalSchema)),
};

export const apiV1TeamResponseInternalSchema: Schema<ApiV1TeamResponse> = s.object<ApiV1TeamResponse>(
  apiV1TeamResponseProperties,
  { additionalProperties: s.json() },
);

export const apiV1TeamResponseSchema: Schema<ApiV1TeamResponse> = s.lazySchema(() =>
  s.object<ApiV1TeamResponse>(
    {
      ...apiV1TeamResponseProperties,
      organization: organizationBundleSocialTeamApiSchema,
      bio: s.optionalNullable(s.lazy(() => bioSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
