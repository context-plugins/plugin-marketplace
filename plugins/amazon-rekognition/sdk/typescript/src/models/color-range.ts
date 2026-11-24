import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A description of the range of luminance values in a video, either LIMITED (16 to 235) or FULL (0
 * to 255).
 */
export const ColorRange = {
  Full: "FULL",
  Limited: "LIMITED",
} as const;
export type ColorRange = (typeof ColorRange)[keyof typeof ColorRange] | (string & {});

export const colorRangeSchema: EnumSchema<ColorRange> = s.enumOf<ColorRange>(ColorRange);
