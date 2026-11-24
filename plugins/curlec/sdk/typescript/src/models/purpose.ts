import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Purpose = {
  Refund: "refund",
  Cashback: "cashback",
  Payout: "payout",
  Salary: "salary",
  UtilityBill: "utility bill",
  VendorBill: "vendor bill",
} as const;
export type Purpose = (typeof Purpose)[keyof typeof Purpose] | (string & {});

export const purposeSchema: EnumSchema<Purpose> = s.enumOf<Purpose>(Purpose);
