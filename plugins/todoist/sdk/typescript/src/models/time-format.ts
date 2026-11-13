import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether to use a 24h format such as 13:00 (if set to 0) when displaying time, or a 12h format
 * such as 1:00pm (if set to 1)
 */
export const TimeFormat = {
  _0: 0,
  _1: 1,
} as const;
export type TimeFormat = (typeof TimeFormat)[keyof typeof TimeFormat] | (number & {});

export const timeFormatSchema: EnumSchema<TimeFormat> = s.enumOf<TimeFormat>(TimeFormat);
