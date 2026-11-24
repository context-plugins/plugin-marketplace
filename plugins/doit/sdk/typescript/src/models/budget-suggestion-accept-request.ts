import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Links a budget suggestion to an existing budget. */
export type BudgetSuggestionAcceptRequest = {
  /** ID of the budget (created via POST /analytics/v1/budgets) to link this suggestion to. */
  budgetId: string;
  /** Whether the customer edited the suggested values before accepting. */
  editedBeforeAccept?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetSuggestionAcceptRequestSchema: Schema<BudgetSuggestionAcceptRequest> =
  s.object<BudgetSuggestionAcceptRequest>(
    {
      budgetId: s.string(),
      editedBeforeAccept: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
