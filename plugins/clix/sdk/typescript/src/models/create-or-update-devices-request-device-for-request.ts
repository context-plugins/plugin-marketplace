import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateOrUpdateDevicesRequestDeviceForRequest = {
  id?: string;
  model?: string;
  manufacturer?: string;
  platform?: string;
  osName?: string;
  osVersion?: string;
  appName?: string;
  appVersion?: string;
  sdkType?: string;
  sdkVersion?: string;
  adId?: string;
  localeRegion?: string;
  localeLanguage?: string;
  timezone?: string;
  isPushPermissionGranted?: boolean;
  pushToken?: string;
  pushTokenType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createOrUpdateDevicesRequestDeviceForRequestSchema: Schema<CreateOrUpdateDevicesRequestDeviceForRequest> =
  s.object<CreateOrUpdateDevicesRequestDeviceForRequest>(
    {
      id: s.optional(s.string()),
      model: s.optional(s.string()),
      manufacturer: s.optional(s.string()),
      platform: s.optional(s.string()),
      osName: s.optional(s.string()),
      osVersion: s.optional(s.string()),
      appName: s.optional(s.string()),
      appVersion: s.optional(s.string()),
      sdkType: s.optional(s.string()),
      sdkVersion: s.optional(s.string()),
      adId: s.optional(s.string()),
      localeRegion: s.optional(s.string()),
      localeLanguage: s.optional(s.string()),
      timezone: s.optional(s.string()),
      isPushPermissionGranted: s.optional(s.boolean()),
      pushToken: s.optional(s.string()),
      pushTokenType: s.optional(s.string()),
      _keysMap: {
        osName: "os_name",
        osVersion: "os_version",
        appName: "app_name",
        appVersion: "app_version",
        sdkType: "sdk_type",
        sdkVersion: "sdk_version",
        adId: "ad_id",
        localeRegion: "locale_region",
        localeLanguage: "locale_language",
        isPushPermissionGranted: "is_push_permission_granted",
        pushToken: "push_token",
        pushTokenType: "push_token_type",
      },
    },
    { additionalProperties: s.json() },
  );
