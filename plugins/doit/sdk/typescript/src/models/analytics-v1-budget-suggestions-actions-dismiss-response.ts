import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1DoiTBudgetSuggestionsApiSchema,
  type Status1DoiTBudgetSuggestionsApi,
} from "./status1-doi-tbudget-suggestions-api.js";

export type AnalyticsV1BudgetSuggestionsActionsDismissResponse = {
  /** ID of the dismissed suggestion. */
  id?: string;
  status?: Status1DoiTBudgetSuggestionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsV1BudgetSuggestionsActionsDismissResponseSchema: Schema<AnalyticsV1BudgetSuggestionsActionsDismissResponse> =
  s.object<AnalyticsV1BudgetSuggestionsActionsDismissResponse>(
    {
      id: s.optional(s.string()),
      status: s.optional(s.lazy(() => status1DoiTBudgetSuggestionsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
