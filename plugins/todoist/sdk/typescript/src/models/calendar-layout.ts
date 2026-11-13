import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CalendarLayout = {
  Week: "WEEK",
  Month: "MONTH",
} as const;
export type CalendarLayout = (typeof CalendarLayout)[keyof typeof CalendarLayout] | (string & {});

export const calendarLayoutSchema: EnumSchema<CalendarLayout> = s.enumOf<CalendarLayout>(CalendarLayout);
