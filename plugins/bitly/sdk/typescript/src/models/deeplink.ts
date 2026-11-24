import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { installPreferenceSchema, type InstallPreference } from "./install-preference.js";

export type Deeplink = {
  appId?: string;
  appUriPath?: string;
  installUrl?: string;
  installType?: InstallPreference;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deeplinkSchema: Schema<Deeplink> = s.object<Deeplink>(
  {
    appId: s.optional(s.string()),
    appUriPath: s.optional(s.string()),
    installUrl: s.optional(s.string()),
    installType: s.optional(s.lazy(() => installPreferenceSchema)),
    _keysMap: {
      appId: "app_id",
      appUriPath: "app_uri_path",
      installUrl: "install_url",
      installType: "install_type",
    },
  },
  { additionalProperties: s.json() },
);
