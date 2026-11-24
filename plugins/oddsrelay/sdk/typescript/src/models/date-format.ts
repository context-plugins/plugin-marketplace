import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DateFormat = {
  Iso: "iso",
  Unix: "unix",
} as const;
export type DateFormat = (typeof DateFormat)[keyof typeof DateFormat] | (string & {});

export const dateFormatSchema: EnumSchema<DateFormat> = s.enumOf<DateFormat>(DateFormat);
