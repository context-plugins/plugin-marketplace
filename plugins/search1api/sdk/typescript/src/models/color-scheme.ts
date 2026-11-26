import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ColorScheme = {
  Light: "light",
  Dark: "dark",
} as const;
export type ColorScheme = (typeof ColorScheme)[keyof typeof ColorScheme] | (string & {});

export const colorSchemeSchema: EnumSchema<ColorScheme> = s.enumOf<ColorScheme>(ColorScheme);
