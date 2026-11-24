import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ObfuscationSettingsDto = {
  enabled: boolean;
  required: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const obfuscationSettingsDtoSchema: Schema<ObfuscationSettingsDto> = s.object<ObfuscationSettingsDto>(
  {
    enabled: s.boolean(),
    required: s.boolean(),
  },
  { additionalProperties: s.json() },
);
