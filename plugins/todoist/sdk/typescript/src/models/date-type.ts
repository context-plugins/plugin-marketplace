import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Explicit due type from an unresolved typed preview (v1.6+). */
export const DateType = {
  FloatingDate: "floating_date",
  FloatingDatetime: "floating_datetime",
  FixedDatetime: "fixed_datetime",
} as const;
export type DateType = (typeof DateType)[keyof typeof DateType] | (string & {});

export const dateTypeSchema: EnumSchema<DateType> = s.enumOf<DateType>(DateType);
