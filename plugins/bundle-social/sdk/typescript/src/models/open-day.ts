import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OpenDay = {
  Monday: "MONDAY",
  Tuesday: "TUESDAY",
  Wednesday: "WEDNESDAY",
  Thursday: "THURSDAY",
  Friday: "FRIDAY",
  Saturday: "SATURDAY",
  Sunday: "SUNDAY",
} as const;
export type OpenDay = (typeof OpenDay)[keyof typeof OpenDay] | (string & {});

export const openDaySchema: EnumSchema<OpenDay> = s.enumOf<OpenDay>(OpenDay);
