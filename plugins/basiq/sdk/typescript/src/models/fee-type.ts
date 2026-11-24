import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** (mandatory) - The type of fee. */
export const FeeType = {
  Deposit: "DEPOSIT",
  Event: "EVENT",
  Exit: "EXIT",
  Payment: "PAYMENT",
  Periodic: "PERIODIC",
  Purchase: "PURCHASE",
  Transaction: "TRANSACTION",
  Upfront: "UPFRONT",
  Variable: "VARIABLE",
  Withdrawal: "WITHDRAWAL",
} as const;
export type FeeType = (typeof FeeType)[keyof typeof FeeType] | (string & {});

export const feeTypeSchema: EnumSchema<FeeType> = s.enumOf<FeeType>(FeeType);
