import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Color of the tag. */
export const ColorAsanaTagsApi = {
  DarkPink: "dark-pink",
  DarkGreen: "dark-green",
  DarkBlue: "dark-blue",
  DarkRed: "dark-red",
  DarkTeal: "dark-teal",
  DarkBrown: "dark-brown",
  DarkOrange: "dark-orange",
  DarkPurple: "dark-purple",
  DarkWarmGray: "dark-warm-gray",
  LightPink: "light-pink",
  LightGreen: "light-green",
  LightBlue: "light-blue",
  LightRed: "light-red",
  LightTeal: "light-teal",
  LightBrown: "light-brown",
  LightOrange: "light-orange",
  LightPurple: "light-purple",
  LightWarmGray: "light-warm-gray",
} as const;
export type ColorAsanaTagsApi = (typeof ColorAsanaTagsApi)[keyof typeof ColorAsanaTagsApi] | (string & {});

export const colorAsanaTagsApiSchema: EnumSchema<ColorAsanaTagsApi> =
  s.enumOf<ColorAsanaTagsApi>(ColorAsanaTagsApi);
