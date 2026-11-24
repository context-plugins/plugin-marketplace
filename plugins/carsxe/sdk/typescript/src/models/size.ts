import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Size = {
  Small: "Small",
  Medium: "Medium",
  Large: "Large",
  Wallpaper: "Wallpaper",
  All: "All",
} as const;
export type Size = (typeof Size)[keyof typeof Size] | (string & {});

export const sizeSchema: EnumSchema<Size> = s.enumOf<Size>(Size);
