import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ColorSettingsDto = {
  primary: string;
  secondary: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const colorSettingsDtoProperties: s.Shape<ColorSettingsDto> = {
  primary: s.string(),
  secondary: s.string(),
};

export const colorSettingsDtoInternalSchema: Schema<ColorSettingsDto> = s.object<ColorSettingsDto>(
  colorSettingsDtoProperties,
  { additionalProperties: s.json() },
);

export const colorSettingsDtoSchema: Schema<ColorSettingsDto> = s.lazySchema(() =>
  s.object<ColorSettingsDto>(
    {
      ...colorSettingsDtoProperties,
      primary: s
        .string()
        .check(s.maxLength(9), s.pattern("^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$")),
      secondary: s
        .string()
        .check(s.maxLength(9), s.pattern("^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$")),
    },
    { additionalProperties: s.json() },
  ),
);
