import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output aspect ratio, width-to-height. Limited to the core ratios every model supports natively.
 */
export const AspectRatio = {
  _11: "1:1",
  _169: "16:9",
  _916: "9:16",
  _43: "4:3",
  _34: "3:4",
} as const;
export type AspectRatio = (typeof AspectRatio)[keyof typeof AspectRatio] | (string & {});

export const aspectRatioSchema: EnumSchema<AspectRatio> = s.enumOf<AspectRatio>(AspectRatio);
