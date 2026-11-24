import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { installPreferenceSchema, type InstallPreference } from "./install-preference.js";
import { mobileOsSchema, type MobileOs } from "./mobile-os.js";

export type DeeplinkRule = {
  guid?: string;
  bitlink?: string;
  appUriPath?: string;
  installUrl?: string;
  appGuid?: string;
  os?: MobileOs;
  installType?: InstallPreference;
  /** ISO timestamp */
  created?: string;
  /** ISO timestamp */
  modified?: string;
  brandGuid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deeplinkRuleSchema: Schema<DeeplinkRule> = s.object<DeeplinkRule>(
  {
    guid: s.optional(s.string()),
    bitlink: s.optional(s.string()),
    appUriPath: s.optional(s.string()),
    installUrl: s.optional(s.string()),
    appGuid: s.optional(s.string()),
    os: s.optional(s.lazy(() => mobileOsSchema)),
    installType: s.optional(s.lazy(() => installPreferenceSchema)),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    brandGuid: s.optional(s.string()),
    _keysMap: {
      appUriPath: "app_uri_path",
      installUrl: "install_url",
      appGuid: "app_guid",
      installType: "install_type",
      brandGuid: "brand_guid",
    },
  },
  { additionalProperties: s.json() },
);
