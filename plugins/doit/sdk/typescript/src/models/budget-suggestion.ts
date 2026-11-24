import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { confidenceSchema, type Confidence } from "./confidence.js";
import { scopeChipSchema, type ScopeChip } from "./scope-chip.js";
import {
  statusDoiTBudgetSuggestionsApiSchema,
  type StatusDoiTBudgetSuggestionsApi,
} from "./status-doi-tbudget-suggestions-api.js";

/** An AI-generated budget recommendation. */
export type BudgetSuggestion = {
  id?: string;
  name?: string;
  description?: string;
  /** Explanation of why this budget is suggested. */
  rationale?: string;
  confidence?: Confidence;
  /** Suggested budget amount as a decimal-string value with its currency. */
  amount?: Amount;
  timeInterval?: string;
  /** Suggested alert thresholds as percentages of the amount. */
  alertThresholds?: number[];
  /** Human-readable summary of the suggested budget scope. */
  scopeChips?: ScopeChip[];
  /** Draft budget configuration to merge over the create-budget defaults. */
  config?: Record<string, unknown>;
  /** Timestamp when the suggestion was generated. */
  generatedTime?: Date;
  status?: StatusDoiTBudgetSuggestionsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetSuggestionSchema: Schema<BudgetSuggestion> = s.object<BudgetSuggestion>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    rationale: s.optional(s.string()),
    confidence: s.optional(s.lazy(() => confidenceSchema)),
    amount: s.optional(s.lazy(() => amountSchema)),
    timeInterval: s.optional(s.string()),
    alertThresholds: s.optional(s.array(s.float64())),
    scopeChips: s.optional(s.array(s.lazy(() => scopeChipSchema))),
    config: s.optional(s.record(s.string(), s.unknown())),
    generatedTime: s.optional(s.dateTime()),
    status: s.optional(s.lazy(() => statusDoiTBudgetSuggestionsApiSchema)),
  },
  { additionalProperties: s.json() },
);
