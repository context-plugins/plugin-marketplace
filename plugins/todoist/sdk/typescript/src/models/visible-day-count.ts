import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Number of consecutive days shown in the week calendar layout. */
export const VisibleDayCount = {
  _1: 1,
  _3: 3,
  _7: 7,
} as const;
export type VisibleDayCount = (typeof VisibleDayCount)[keyof typeof VisibleDayCount] | (number & {});

export const visibleDayCountSchema: EnumSchema<VisibleDayCount> = s.enumOf<VisibleDayCount>(VisibleDayCount);
