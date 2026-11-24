import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { themeColorsInternalSchema, themeColorsSchema, type ThemeColors } from "./theme-colors.js";

/** A custom color theme applied to Cloud Analytics reports. */
export type CustomTheme = {
  /** The unique identifier of the custom theme. */
  id: string;
  /** The display name of the custom theme. */
  name: string;
  /** A color in hex notation. Accepts `#RGB`, `#RRGGBB`, or `#RRGGBBAA`. */
  primaryColor: string;
  /**
   * Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex
   * colors.
   */
  colors: ThemeColors;
  /** The creation time of the custom theme. */
  createTime?: Date;
  /** The time when the custom theme was last updated. */
  updateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customThemeProperties: s.Shape<CustomTheme> = {
  id: s.string(),
  name: s.string(),
  primaryColor: s.string(),
  colors: themeColorsInternalSchema,
  createTime: s.optional(s.dateTime()),
  updateTime: s.optional(s.dateTime()),
};

export const customThemeInternalSchema: Schema<CustomTheme> = s.object<CustomTheme>(customThemeProperties, {
  additionalProperties: s.json(),
});

export const customThemeSchema: Schema<CustomTheme> = s.lazySchema(() =>
  s.object<CustomTheme>(
    {
      ...customThemeProperties,
      name: s.string().check(s.maxLength(200)),
      primaryColor: s.string().check(s.pattern("^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")),
      colors: themeColorsSchema,
    },
    { additionalProperties: s.json() },
  ),
);
