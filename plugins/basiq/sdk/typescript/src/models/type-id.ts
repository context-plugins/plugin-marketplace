import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeId = {
  AccountVerification: "ACCOUNT_VERIFICATION",
  BalanceVerification: "BALANCE_VERIFICATION",
  IdentityVerification: "IDENTITY_VERIFICATION",
  IncomeVerification: "INCOME_VERIFICATION",
  ExpenseRatioVerification: "EXPENSE_RATIO_VERIFICATION",
} as const;
export type TypeId = (typeof TypeId)[keyof typeof TypeId] | (string & {});

export const typeIdSchema: EnumSchema<TypeId> = s.enumOf<TypeId>(TypeId);
