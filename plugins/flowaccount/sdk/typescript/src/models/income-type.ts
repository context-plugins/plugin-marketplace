import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * 1 = Salary 3 = Commission 5 = Licensing 7 = Interest 9 = NetProfit30 11 = NetProfit25 13 =
 * NetProfit20 15 = NetProfitOther 17 = TaxExemption 19 = DividenFromShareOfProfit 21 =
 * PortionOfNetProfit 23 = RecognitionOfProfit 25 = TaxOther 27 = RevenueDepartmentTax 29 = Others
 */
export const IncomeType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
  _13: 13,
  _15: 15,
  _17: 17,
  _19: 19,
  _21: 21,
  _23: 23,
  _25: 25,
  _27: 27,
  _29: 29,
} as const;
export type IncomeType = (typeof IncomeType)[keyof typeof IncomeType] | (number & {});

export const incomeTypeSchema: EnumSchema<IncomeType> = s.enumOf<IncomeType>(IncomeType);
