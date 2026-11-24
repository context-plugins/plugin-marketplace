import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { draftVersionInternalSchema, draftVersionSchema, type DraftVersion } from "./draft-version.js";
import { platformScopeSchema, type PlatformScope } from "./platform-scope.js";
import {
  publishedVersionInternalSchema,
  publishedVersionSchema,
  type PublishedVersion,
} from "./published-version.js";
import {
  statusBundleSocialAutomationApiSchema,
  type StatusBundleSocialAutomationApi,
} from "./status-bundle-social-automation-api.js";

export type ItemBundleSocialAutomationApi = {
  id: string;
  teamId: string;
  organizationId?: string | null;
  name: string;
  status: StatusBundleSocialAutomationApi;
  platformScope: PlatformScope;
  createdByUserId?: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  deletedAt?: Date | null;
  draftVersion?: DraftVersion;
  publishedVersion?: PublishedVersion;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const itemBundleSocialAutomationApiProperties: s.Shape<ItemBundleSocialAutomationApi> = {
  id: s.string(),
  teamId: s.string(),
  organizationId: s.optionalNullable(s.string()),
  name: s.string(),
  status: statusBundleSocialAutomationApiSchema,
  platformScope: platformScopeSchema,
  createdByUserId: s.optionalNullable(s.string()),
  createdAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  deletedAt: s.optionalNullable(s.dateTime()),
  draftVersion: s.optional(s.lazy(() => draftVersionInternalSchema)),
  publishedVersion: s.optional(s.lazy(() => publishedVersionInternalSchema)),
};

export const itemBundleSocialAutomationApiInternalSchema: Schema<ItemBundleSocialAutomationApi> =
  s.object<ItemBundleSocialAutomationApi>(itemBundleSocialAutomationApiProperties, {
    additionalProperties: s.json(),
  });

export const itemBundleSocialAutomationApiSchema: Schema<ItemBundleSocialAutomationApi> = s.lazySchema(() =>
  s.object<ItemBundleSocialAutomationApi>(
    {
      ...itemBundleSocialAutomationApiProperties,
      draftVersion: s.optional(s.lazy(() => draftVersionSchema)),
      publishedVersion: s.optional(s.lazy(() => publishedVersionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
