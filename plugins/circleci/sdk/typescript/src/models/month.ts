import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Month = {
  Jan: "JAN",
  Feb: "FEB",
  Mar: "MAR",
  Apr: "APR",
  May: "MAY",
  Jun: "JUN",
  Jul: "JUL",
  Aug: "AUG",
  Sep: "SEP",
  Oct: "OCT",
  Nov: "NOV",
  Dec: "DEC",
} as const;
export type Month = (typeof Month)[keyof typeof Month] | (string & {});

export const monthSchema: EnumSchema<Month> = s.enumOf<Month>(Month);
