import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureSettings = {
  publicName: string;
  publicDescription: string;
  optInEnabled: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const featureSettingsProperties: s.Shape<FeatureSettings> = {
  publicName: s.string(),
  publicDescription: s.string(),
  optInEnabled: s.boolean(),
};

export const featureSettingsInternalSchema: Schema<FeatureSettings> = s.object<FeatureSettings>(
  featureSettingsProperties,
  { additionalProperties: s.json() },
);

export const featureSettingsSchema: Schema<FeatureSettings> = s.lazySchema(() =>
  s.object<FeatureSettings>(
    {
      ...featureSettingsProperties,
      publicName: s.string().check(s.minLength(1), s.maxLength(100)),
      publicDescription: s.string().check(s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
