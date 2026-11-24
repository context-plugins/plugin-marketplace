import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountVerificationDataSchema, type AccountVerificationData } from "../account-verification-data.js";
import { balanceVerificationDataSchema, type BalanceVerificationData } from "../balance-verification-data.js";
import { expenseRatioDataSchema, type ExpenseRatioData } from "../expense-ratio-data.js";
import {
  identityVerificationDataInternalSchema,
  identityVerificationDataSchema,
  type IdentityVerificationData,
} from "../identity-verification-data.js";
import { incomeVerificationDataSchema, type IncomeVerificationData } from "../income-verification-data.js";

/** Input data for the insight. The required fields vary by `type`. */
export type DataInsightsApi =
  | ExpenseRatioData
  | BalanceVerificationData
  | AccountVerificationData
  | IdentityVerificationData
  | IncomeVerificationData;

export const dataInsightsApiInternalSchema: Schema<DataInsightsApi> = s.of<DataInsightsApi>(
  s.union([
    s.lazy(() => expenseRatioDataSchema),
    s.lazy(() => balanceVerificationDataSchema),
    s.lazy(() => accountVerificationDataSchema),
    s.lazy(() => identityVerificationDataInternalSchema),
    s.lazy(() => incomeVerificationDataSchema),
  ]),
);

export const dataInsightsApiSchema: Schema<DataInsightsApi> = s.lazySchema(() =>
  s.of<DataInsightsApi>(
    s.union([
      s.lazy(() => expenseRatioDataSchema),
      s.lazy(() => balanceVerificationDataSchema),
      s.lazy(() => accountVerificationDataSchema),
      s.lazy(() => identityVerificationDataSchema),
      s.lazy(() => incomeVerificationDataSchema),
    ]),
  ),
);
