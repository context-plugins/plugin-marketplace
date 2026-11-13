import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to use the DD-MM-YYYY date format (if set to 0), or the MM-DD-YYYY format (if set to 1)
 */
export const DateFormat = {
  _0: 0,
  _1: 1,
} as const;
export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat] | (number & {});

export const dateFormatSchema: EnumSchema<DateFormat> = s.enumOf<DateFormat>(DateFormat);
