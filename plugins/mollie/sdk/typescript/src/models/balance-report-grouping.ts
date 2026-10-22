import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BalanceReportGrouping = {
  StatusBalances: "status-balances",
  TransactionCategories: "transaction-categories",
} as const;
export type BalanceReportGrouping =
  | (typeof BalanceReportGrouping)[keyof typeof BalanceReportGrouping]
  | (string & {});

export const balanceReportGroupingSchema: EnumSchema<BalanceReportGrouping> =
  s.enumOf<BalanceReportGrouping>(BalanceReportGrouping);
