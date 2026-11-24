import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = FirstVersion 3 = PayrollPayment 5 = Kconnect 7 = Cash 9 = Transfer */
export const PayrollType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
} as const;
export type PayrollType = (typeof PayrollType)[keyof typeof PayrollType] | (number & {});

export const payrollTypeSchema: EnumSchema<PayrollType> = s.enumOf<PayrollType>(PayrollType);
