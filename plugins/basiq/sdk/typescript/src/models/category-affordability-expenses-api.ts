import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { expenseClassSchema, type ExpenseClass } from "./expense-class.js";

/** Category data */
export type CategoryAffordabilityExpensesApi = {
  /** Class represents one class of classification system */
  expenseClass: ExpenseClass;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const categoryAffordabilityExpensesApiSchema: Schema<CategoryAffordabilityExpensesApi> =
  s.object<CategoryAffordabilityExpensesApi>(
    {
      expenseClass: expenseClassSchema,
    },
    { additionalProperties: s.json() },
  );
