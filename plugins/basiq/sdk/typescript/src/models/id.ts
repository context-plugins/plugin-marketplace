import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Unique identifier for the Insight type. Maps to the `insightType` values used by existing Insight
 * endpoints: `account`, `balance`, `identity`, `income`, `expense-ratio`.
 */
export const Id = {
  AccountVerification: "ACCOUNT_VERIFICATION",
  BalanceVerification: "BALANCE_VERIFICATION",
  IdentityVerification: "IDENTITY_VERIFICATION",
  IncomeVerification: "INCOME_VERIFICATION",
  ExpenseRatioVerification: "EXPENSE_RATIO_VERIFICATION",
} as const;
export type Id = (typeof Id)[keyof typeof Id] | (string & {});

export const idSchema: EnumSchema<Id> = s.enumOf<Id>(Id);
