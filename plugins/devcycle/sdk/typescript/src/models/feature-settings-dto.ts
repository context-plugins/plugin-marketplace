import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureSettingsDto = {
  publicName: string;
  publicDescription: string;
  optInEnabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const featureSettingsDtoProperties: s.Shape<FeatureSettingsDto> = {
  publicName: s.string(),
  publicDescription: s.string(),
  optInEnabled: s.boolean(),
};

export const featureSettingsDtoInternalSchema: Schema<FeatureSettingsDto> = s.object<FeatureSettingsDto>(
  featureSettingsDtoProperties,
  { additionalProperties: s.json() },
);

export const featureSettingsDtoSchema: Schema<FeatureSettingsDto> = s.lazySchema(() =>
  s.object<FeatureSettingsDto>(
    {
      ...featureSettingsDtoProperties,
      publicName: s.string().check(s.minLength(1), s.maxLength(100)),
      publicDescription: s.string().check(s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
