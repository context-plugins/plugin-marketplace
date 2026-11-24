import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  accountInsightDataItemInternalSchema,
  accountInsightDataItemSchema,
  type AccountInsightDataItem,
} from "../account-insight-data-item.js";
import {
  balanceInsightDataItemInternalSchema,
  balanceInsightDataItemSchema,
  type BalanceInsightDataItem,
} from "../balance-insight-data-item.js";
import {
  expenseRatioInsightDataItemSchema,
  type ExpenseRatioInsightDataItem,
} from "../expense-ratio-insight-data-item.js";
import {
  identityInsightDataItemInternalSchema,
  identityInsightDataItemSchema,
  type IdentityInsightDataItem,
} from "../identity-insight-data-item.js";
import {
  incomeInsightDataItemInternalSchema,
  incomeInsightDataItemSchema,
  type IncomeInsightDataItem,
} from "../income-insight-data-item.js";

export type Datum1InsightsApi =
  | AccountInsightDataItem
  | BalanceInsightDataItem
  | IdentityInsightDataItem
  | IncomeInsightDataItem
  | ExpenseRatioInsightDataItem;

export const datum1InsightsApiInternalSchema: Schema<Datum1InsightsApi> = s.of<Datum1InsightsApi>(
  s.union([
    s.lazy(() => accountInsightDataItemInternalSchema),
    s.lazy(() => balanceInsightDataItemInternalSchema),
    s.lazy(() => identityInsightDataItemInternalSchema),
    s.lazy(() => incomeInsightDataItemInternalSchema),
    s.lazy(() => expenseRatioInsightDataItemSchema),
  ]),
);

export const datum1InsightsApiSchema: Schema<Datum1InsightsApi> = s.lazySchema(() =>
  s.of<Datum1InsightsApi>(
    s.union([
      s.lazy(() => accountInsightDataItemSchema),
      s.lazy(() => balanceInsightDataItemSchema),
      s.lazy(() => identityInsightDataItemSchema),
      s.lazy(() => incomeInsightDataItemSchema),
      s.lazy(() => expenseRatioInsightDataItemSchema),
    ]),
  ),
);
