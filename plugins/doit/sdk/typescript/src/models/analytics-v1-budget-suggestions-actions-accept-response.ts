import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsV1BudgetSuggestionsActionsAcceptResponse = {
  /** ID of the budget the suggestion was linked to. */
  budgetId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsV1BudgetSuggestionsActionsAcceptResponseSchema: Schema<AnalyticsV1BudgetSuggestionsActionsAcceptResponse> =
  s.object<AnalyticsV1BudgetSuggestionsActionsAcceptResponse>(
    {
      budgetId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
