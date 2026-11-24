import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { themeColorsInternalSchema, themeColorsSchema, type ThemeColors } from "./theme-colors.js";

/** Request body for creating a custom theme. */
export type CreateCustomThemeRequest = {
  /** The display name of the custom theme. */
  name: string;
  /** A color in hex notation. Accepts `#RGB`, `#RRGGBB`, or `#RRGGBBAA`. */
  primaryColor: string;
  /**
   * Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex
   * colors.
   */
  colors: ThemeColors;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCustomThemeRequestProperties: s.Shape<CreateCustomThemeRequest> = {
  name: s.string(),
  primaryColor: s.string(),
  colors: themeColorsInternalSchema,
};

export const createCustomThemeRequestInternalSchema: Schema<CreateCustomThemeRequest> =
  s.object<CreateCustomThemeRequest>(createCustomThemeRequestProperties, { additionalProperties: s.json() });

export const createCustomThemeRequestSchema: Schema<CreateCustomThemeRequest> = s.lazySchema(() =>
  s.object<CreateCustomThemeRequest>(
    {
      ...createCustomThemeRequestProperties,
      name: s.string().check(s.maxLength(200)),
      primaryColor: s.string().check(s.pattern("^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")),
      colors: themeColorsSchema,
    },
    { additionalProperties: s.json() },
  ),
);
