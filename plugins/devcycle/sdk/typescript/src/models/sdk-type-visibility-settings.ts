import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SdkTypeVisibilitySettings = {
  enabledInFeatureSettings: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sdkTypeVisibilitySettingsSchema: Schema<SdkTypeVisibilitySettings> =
  s.object<SdkTypeVisibilitySettings>(
    {
      enabledInFeatureSettings: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
