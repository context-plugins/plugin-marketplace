import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of insight to generate. */
export const TypeInsightsApi = {
  ExpenseRatioVerification: "EXPENSE_RATIO_VERIFICATION",
  BalanceVerification: "BALANCE_VERIFICATION",
  AccountVerification: "ACCOUNT_VERIFICATION",
  IdentityVerification: "IDENTITY_VERIFICATION",
  IncomeVerification: "INCOME_VERIFICATION",
} as const;
export type TypeInsightsApi = (typeof TypeInsightsApi)[keyof typeof TypeInsightsApi] | (string & {});

export const typeInsightsApiSchema: EnumSchema<TypeInsightsApi> = s.enumOf<TypeInsightsApi>(TypeInsightsApi);
