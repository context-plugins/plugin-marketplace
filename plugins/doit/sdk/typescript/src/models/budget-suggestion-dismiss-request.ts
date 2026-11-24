import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  reasonDoiTBudgetSuggestionsApiSchema,
  type ReasonDoiTBudgetSuggestionsApi,
} from "./reason-doi-tbudget-suggestions-api.js";

/** Optional reason for dismissing a budget suggestion. */
export type BudgetSuggestionDismissRequest = {
  reason?: ReasonDoiTBudgetSuggestionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetSuggestionDismissRequestSchema: Schema<BudgetSuggestionDismissRequest> =
  s.object<BudgetSuggestionDismissRequest>(
    {
      reason: s.optional(s.lazy(() => reasonDoiTBudgetSuggestionsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
