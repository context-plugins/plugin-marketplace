import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CloseDay = {
  Monday: "MONDAY",
  Tuesday: "TUESDAY",
  Wednesday: "WEDNESDAY",
  Thursday: "THURSDAY",
  Friday: "FRIDAY",
  Saturday: "SATURDAY",
  Sunday: "SUNDAY",
} as const;
export type CloseDay = (typeof CloseDay)[keyof typeof CloseDay] | (string & {});

export const closeDaySchema: EnumSchema<CloseDay> = s.enumOf<CloseDay>(CloseDay);
