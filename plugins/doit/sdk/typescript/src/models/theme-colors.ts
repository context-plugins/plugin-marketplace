import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex colors.
 */
export type ThemeColors = {
  /** Colors used when the report is displayed in light mode. */
  light: string[];
  /** Colors used when the report is displayed in dark mode. */
  dark: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const themeColorsProperties: s.Shape<ThemeColors> = {
  light: s.array(s.string()),
  dark: s.array(s.string()),
};

export const themeColorsInternalSchema: Schema<ThemeColors> = s.object<ThemeColors>(themeColorsProperties, {
  additionalProperties: s.json(),
});

export const themeColorsSchema: Schema<ThemeColors> = s.lazySchema(() =>
  s.object<ThemeColors>(
    {
      ...themeColorsProperties,
      light: s
        .array(s.string().check(s.pattern("^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")))
        .check(s.minLength(1), s.maxLength(32)),
      dark: s
        .array(s.string().check(s.pattern("^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")))
        .check(s.minLength(1), s.maxLength(32)),
    },
    { additionalProperties: s.json() },
  ),
);
