import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Chart of accounts type response. */
export const ChartOfAccountsTypeResponse = {
  Unspecified: "UNSPECIFIED",
  AccountsPayable: "ACCOUNTS_PAYABLE",
  AccountsReceivable: "ACCOUNTS_RECEIVABLE",
  Bank: "BANK",
  CostOfGoodsSold: "COST_OF_GOODS_SOLD",
  CreditCard: "CREDIT_CARD",
  Equity: "EQUITY",
  Expense: "EXPENSE",
  FixedAsset: "FIXED_ASSET",
  Income: "INCOME",
  LongTermLiability: "LONG_TERM_LIABILITY",
  OtherAsset: "OTHER_ASSET",
  OtherCurrentAsset: "OTHER_CURRENT_ASSET",
  OtherCurrentLiability: "OTHER_CURRENT_LIABILITY",
  OtherExpense: "OTHER_EXPENSE",
  OtherIncome: "OTHER_INCOME",
  NonPosting: "NON_POSTING",
  Undefined: "UNDEFINED",
} as const;
export type ChartOfAccountsTypeResponse =
  | (typeof ChartOfAccountsTypeResponse)[keyof typeof ChartOfAccountsTypeResponse]
  | (string & {});

export const chartOfAccountsTypeResponseSchema: EnumSchema<ChartOfAccountsTypeResponse> =
  s.enumOf<ChartOfAccountsTypeResponse>(ChartOfAccountsTypeResponse);
