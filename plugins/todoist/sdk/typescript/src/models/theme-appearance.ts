import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ThemeAppearance = {
  Light: "light",
  Dark: "dark",
  System: "system",
} as const;
export type ThemeAppearance = (typeof ThemeAppearance)[keyof typeof ThemeAppearance] | (string & {});

export const themeAppearanceSchema: EnumSchema<ThemeAppearance> = s.enumOf<ThemeAppearance>(ThemeAppearance);
