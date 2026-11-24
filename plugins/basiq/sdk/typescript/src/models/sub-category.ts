import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  categoryAffordabilityExpensesApiSchema,
  type CategoryAffordabilityExpensesApi,
} from "./category-affordability-expenses-api.js";
import { changeHistorySchema, type ChangeHistory } from "./change-history.js";

/** Payments Sub-Category */
export type SubCategory = {
  /** Category data */
  category: CategoryAffordabilityExpensesApi;
  changeHistory: ChangeHistory[];
  /** Summary period "monthly". */
  summary: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subCategorySchema: Schema<SubCategory> = s.object<SubCategory>(
  {
    category: categoryAffordabilityExpensesApiSchema,
    changeHistory: s.array(s.lazy(() => changeHistorySchema)),
    summary: s.string(),
  },
  { additionalProperties: s.json() },
);
