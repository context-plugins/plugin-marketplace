import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The color of the label. */
export const Color = {
  Blue: "blue",
  SkyBlue: "skyBlue",
  Teal: "teal",
  Mint: "mint",
  Lime: "lime",
  SoftYellow: "softYellow",
  Apricot: "apricot",
  Lavender: "lavender",
  Purple: "purple",
  RosePink: "rosePink",
  SlateGrey: "slateGrey",
} as const;
export type Color = (typeof Color)[keyof typeof Color] | (string & {});

export const colorSchema: EnumSchema<Color> = s.enumOf<Color>(Color);
