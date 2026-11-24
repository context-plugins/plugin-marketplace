import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Hex color in the form `#rrggbb`. */
export type ThemeColor = {
  /** @default "theme_color" */
  name?: "theme_color";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const themeColorProperties: s.Shape<ThemeColor> = {
  name: s.defaulted(s.literal("theme_color"), "theme_color"),
  value: s.optionalNullable(s.string()),
};

export const themeColorInternalSchema: Schema<ThemeColor> = s.object<ThemeColor>(themeColorProperties, {
  additionalProperties: s.json(),
});

export const themeColorSchema: Schema<ThemeColor> = s.lazySchema(() =>
  s.object<ThemeColor>(
    {
      ...themeColorProperties,
      value: s.optionalNullable(s.string().check(s.pattern("^#[0-9a-fA-F]{6}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
