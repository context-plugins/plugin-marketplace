import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApiColorId = {
  BerryRed: "berry_red",
  Red: "red",
  Orange: "orange",
  Yellow: "yellow",
  OliveGreen: "olive_green",
  LimeGreen: "lime_green",
  Green: "green",
  MintGreen: "mint_green",
  Teal: "teal",
  SkyBlue: "sky_blue",
  LightBlue: "light_blue",
  Blue: "blue",
  Grape: "grape",
  Violet: "violet",
  Lavender: "lavender",
  Magenta: "magenta",
  Salmon: "salmon",
  Charcoal: "charcoal",
  Grey: "grey",
  Taupe: "taupe",
} as const;
export type ApiColorId = (typeof ApiColorId)[keyof typeof ApiColorId] | (string & {});

export const apiColorIdSchema: EnumSchema<ApiColorId> = s.enumOf<ApiColorId>(ApiColorId);
