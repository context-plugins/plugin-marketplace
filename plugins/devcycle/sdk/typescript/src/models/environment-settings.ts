import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EnvironmentSettings = {
  /** A unique App Icon URI for a given environment */
  appIconUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const environmentSettingsProperties: s.Shape<EnvironmentSettings> = {
  appIconUri: s.optional(s.string()),
  _keysMap: {
    appIconUri: "appIconURI",
  },
};

export const environmentSettingsInternalSchema: Schema<EnvironmentSettings> = s.object<EnvironmentSettings>(
  environmentSettingsProperties,
  { additionalProperties: s.json() },
);

export const environmentSettingsSchema: Schema<EnvironmentSettings> = s.lazySchema(() =>
  s.object<EnvironmentSettings>(
    {
      ...environmentSettingsProperties,
      appIconUri: s.optional(s.string().check(s.maxLength(2048))),
    },
    { additionalProperties: s.json() },
  ),
);
