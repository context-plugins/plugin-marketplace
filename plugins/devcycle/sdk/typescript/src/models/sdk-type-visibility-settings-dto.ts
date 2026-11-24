import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SdkTypeVisibilitySettingsDto = {
  enabledInFeatureSettings: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sdkTypeVisibilitySettingsDtoSchema: Schema<SdkTypeVisibilitySettingsDto> =
  s.object<SdkTypeVisibilitySettingsDto>(
    {
      enabledInFeatureSettings: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
