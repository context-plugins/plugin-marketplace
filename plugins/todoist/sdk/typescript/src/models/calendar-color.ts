import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CalendarColor = {
  Priority: "PRIORITY",
  Label: "LABEL",
  Project: "PROJECT",
} as const;
export type CalendarColor = (typeof CalendarColor)[keyof typeof CalendarColor] | (string & {});

export const calendarColorSchema: EnumSchema<CalendarColor> = s.enumOf<CalendarColor>(CalendarColor);
