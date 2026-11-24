import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { budgetSuggestionSchema, type BudgetSuggestion } from "./budget-suggestion.js";

export type AnalyticsV1BudgetSuggestionsResponse = {
  /** Array of pending budget suggestions. */
  items?: BudgetSuggestion[];
  /** Number of suggestions returned. */
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsV1BudgetSuggestionsResponseSchema: Schema<AnalyticsV1BudgetSuggestionsResponse> =
  s.object<AnalyticsV1BudgetSuggestionsResponse>(
    {
      items: s.optional(s.array(s.lazy(() => budgetSuggestionSchema))),
      rowCount: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
