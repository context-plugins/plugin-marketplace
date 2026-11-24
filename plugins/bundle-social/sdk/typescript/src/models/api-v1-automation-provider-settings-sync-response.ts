import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lastSyncErrorSchema, type LastSyncError } from "./last-sync-error.js";
import { platformSchema, type Platform } from "./platform.js";
import { socialAccountSchema, type SocialAccount } from "./social-account.js";
import { status59Schema, type Status59 } from "./status59.js";
import { type112Schema, type Type112 } from "./type112.js";
import { config2InternalSchema, config2Schema, type Config2 } from "./unions/config2.js";

export type ApiV1AutomationProviderSettingsSyncResponse = {
  id: string;
  teamId: string;
  organizationId?: string | null;
  platform: Platform;
  socialAccountId: string;
  type: Type112;
  status: Status59;
  config?: Config2;
  providerResponse?: Record<string, unknown> | null;
  lastSyncedAt?: Date | null;
  lastSyncError?: LastSyncError | null;
  createdAt: Date | null;
  updatedAt: Date | null;
  socialAccount?: SocialAccount;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationProviderSettingsSyncResponseProperties: s.Shape<ApiV1AutomationProviderSettingsSyncResponse> =
  {
    id: s.string(),
    teamId: s.string(),
    organizationId: s.optionalNullable(s.string()),
    platform: platformSchema,
    socialAccountId: s.string(),
    type: type112Schema,
    status: status59Schema,
    config: s.optional(s.lazy(() => config2InternalSchema)),
    providerResponse: s.optionalNullable(s.record(s.string(), s.unknown())),
    lastSyncedAt: s.optionalNullable(s.dateTime()),
    lastSyncError: s.optionalNullable(s.lazy(() => lastSyncErrorSchema)),
    createdAt: s.nullable(s.dateTime()),
    updatedAt: s.nullable(s.dateTime()),
    socialAccount: s.optional(s.lazy(() => socialAccountSchema)),
  };

export const apiV1AutomationProviderSettingsSyncResponseInternalSchema: Schema<ApiV1AutomationProviderSettingsSyncResponse> =
  s.object<ApiV1AutomationProviderSettingsSyncResponse>(
    apiV1AutomationProviderSettingsSyncResponseProperties,
    { additionalProperties: s.json() },
  );

export const apiV1AutomationProviderSettingsSyncResponseSchema: Schema<ApiV1AutomationProviderSettingsSyncResponse> =
  s.lazySchema(() =>
    s.object<ApiV1AutomationProviderSettingsSyncResponse>(
      {
        ...apiV1AutomationProviderSettingsSyncResponseProperties,
        config: s.optional(s.lazy(() => config2Schema)),
      },
      { additionalProperties: s.json() },
    ),
  );
