import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { companyInternalSchema, companySchema, type Company } from "./company.js";
import {
  expenseCategoryInternalSchema,
  expenseCategorySchema,
  type ExpenseCategory,
} from "./expense-category.js";

export type CompanyExpenseCategory = {
  companyId?: number;
  expenseCategoryId?: number;
  company?: Company;
  expenseCategory?: ExpenseCategory;
};

const companyExpenseCategoryProperties: s.Shape<CompanyExpenseCategory> = {
  companyId: s.optional(s.int()),
  expenseCategoryId: s.optional(s.int()),
  company: s.optional(s.lazy(() => companyInternalSchema)),
  expenseCategory: s.optional(s.lazy(() => expenseCategoryInternalSchema)),
};

export const companyExpenseCategoryInternalSchema: Schema<CompanyExpenseCategory> =
  s.object<CompanyExpenseCategory>(companyExpenseCategoryProperties);

export const companyExpenseCategorySchema: Schema<CompanyExpenseCategory> = s.lazySchema(() =>
  s.object<CompanyExpenseCategory>({
    ...companyExpenseCategoryProperties,
    company: s.optional(s.lazy(() => companySchema)),
    expenseCategory: s.optional(s.lazy(() => expenseCategorySchema)),
  }),
);
