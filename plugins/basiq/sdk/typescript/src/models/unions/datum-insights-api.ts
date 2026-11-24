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

export type DatumInsightsApi =
  | ExpenseRatioInsightDataItem
  | AccountInsightDataItem
  | BalanceInsightDataItem
  | IdentityInsightDataItem;

export const datumInsightsApiInternalSchema: Schema<DatumInsightsApi> = s.of<DatumInsightsApi>(
  s.union([
    s.lazy(() => expenseRatioInsightDataItemSchema),
    s.lazy(() => accountInsightDataItemInternalSchema),
    s.lazy(() => balanceInsightDataItemInternalSchema),
    s.lazy(() => identityInsightDataItemInternalSchema),
  ]),
);

export const datumInsightsApiSchema: Schema<DatumInsightsApi> = s.lazySchema(() =>
  s.of<DatumInsightsApi>(
    s.union([
      s.lazy(() => expenseRatioInsightDataItemSchema),
      s.lazy(() => accountInsightDataItemSchema),
      s.lazy(() => balanceInsightDataItemSchema),
      s.lazy(() => identityInsightDataItemSchema),
    ]),
  ),
);
