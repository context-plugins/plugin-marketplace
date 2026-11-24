import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { themeColorsInternalSchema, themeColorsSchema, type ThemeColors } from "./theme-colors.js";

/** Request body for updating a custom theme. Only provided fields are modified. */
export type UpdateCustomThemeRequest = {
  /** The display name of the custom theme. */
  name?: string | null;
  /** A color in hex notation. Accepts `#RGB`, `#RRGGBB`, or `#RRGGBBAA`. */
  primaryColor?: string;
  /**
   * Palettes for light and dark display modes. Each palette must contain between 1 and 32 hex
   * colors.
   */
  colors?: ThemeColors;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateCustomThemeRequestProperties: s.Shape<UpdateCustomThemeRequest> = {
  name: s.optionalNullable(s.string()),
  primaryColor: s.optional(s.string()),
  colors: s.optional(s.lazy(() => themeColorsInternalSchema)),
};

export const updateCustomThemeRequestInternalSchema: Schema<UpdateCustomThemeRequest> =
  s.object<UpdateCustomThemeRequest>(updateCustomThemeRequestProperties, { additionalProperties: s.json() });

export const updateCustomThemeRequestSchema: Schema<UpdateCustomThemeRequest> = s.lazySchema(() =>
  s.object<UpdateCustomThemeRequest>(
    {
      ...updateCustomThemeRequestProperties,
      name: s.optionalNullable(s.string().check(s.maxLength(200))),
      primaryColor: s.optional(
        s.string().check(s.pattern("^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$")),
      ),
      colors: s.optional(s.lazy(() => themeColorsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
