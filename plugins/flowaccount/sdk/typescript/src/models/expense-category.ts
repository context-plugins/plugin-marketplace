import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyExpenseCategoryInternalSchema,
  companyExpenseCategorySchema,
  type CompanyExpenseCategory,
} from "./company-expense-category.js";
import { expenseListInternalSchema, expenseListSchema, type ExpenseList } from "./expense-list.js";

export type ExpenseCategory = {
  id?: number;
  name: string;
  nameForeign?: string | null;
  isShare?: boolean;
  isDelete?: boolean;
  isGlSystem?: boolean;
  systemCode?: number | null;
  resetTransactionId?: number | null;
  taxLife?: number | null;
  chartOfAccountId?: number | null;
  chartOfAccountIdCredit?: number | null;
  depreciationChartOfAccountId?: number | null;
  accumulatedDepreciationChartOfAccountId?: number | null;
  depreciableAsset?: boolean | null;
  expenseList?: ExpenseList[] | null;
  companyExpenseCategory?: CompanyExpenseCategory[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const expenseCategoryProperties: s.Shape<ExpenseCategory> = {
  id: s.optional(s.int()),
  name: s.string(),
  nameForeign: s.optionalNullable(s.string()),
  isShare: s.optional(s.boolean()),
  isDelete: s.optional(s.boolean()),
  isGlSystem: s.optional(s.boolean()),
  systemCode: s.optionalNullable(s.int()),
  resetTransactionId: s.optionalNullable(s.int()),
  taxLife: s.optionalNullable(s.int()),
  chartOfAccountId: s.optionalNullable(s.int()),
  chartOfAccountIdCredit: s.optionalNullable(s.int()),
  depreciationChartOfAccountId: s.optionalNullable(s.int()),
  accumulatedDepreciationChartOfAccountId: s.optionalNullable(s.int()),
  depreciableAsset: s.optionalNullable(s.boolean()),
  expenseList: s.optionalNullable(s.array(s.lazy(() => expenseListInternalSchema))),
  companyExpenseCategory: s.optionalNullable(s.array(s.lazy(() => companyExpenseCategoryInternalSchema))),
  _keysMap: {
    isGlSystem: "isGLSystem",
  },
};

export const expenseCategoryInternalSchema: Schema<ExpenseCategory> = s.object<ExpenseCategory>(
  expenseCategoryProperties,
  { additionalProperties: s.json() },
);

export const expenseCategorySchema: Schema<ExpenseCategory> = s.lazySchema(() =>
  s.object<ExpenseCategory>(
    {
      ...expenseCategoryProperties,
      name: s.string().check(s.minLength(0), s.maxLength(255)),
      expenseList: s.optionalNullable(s.array(s.lazy(() => expenseListSchema))),
      companyExpenseCategory: s.optionalNullable(s.array(s.lazy(() => companyExpenseCategorySchema))),
    },
    { additionalProperties: s.json() },
  ),
);
