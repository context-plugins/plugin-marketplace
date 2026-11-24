import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = PublishDate 3 = PaymentDate 5 = ExpenseDate 7 = TransitionDate */
export const DateType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
} as const;
export type DateType = (typeof DateType)[keyof typeof DateType] | (number & {});

export const dateTypeSchema: EnumSchema<DateType> = s.enumOf<DateType>(DateType);
