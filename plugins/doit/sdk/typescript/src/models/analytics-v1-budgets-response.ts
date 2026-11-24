import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { budgetListItemSchema, type BudgetListItem } from "./budget-list-item.js";
import { riskAggregationsSchema, type RiskAggregations } from "./risk-aggregations.js";

export type AnalyticsV1BudgetsResponse = {
  /** Array of Budgets */
  budgets?: BudgetListItem[];
  /** Page token, returned by a previous call, to request the next page of results */
  pageToken?: string;
  /** Budgets rows count */
  rowCount?: number;
  /**
   * Aggregate counts of risk statuses across the full filtered result set (all pages), not just the
   * current page.
   */
  riskAggregations?: RiskAggregations;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsV1BudgetsResponseSchema: Schema<AnalyticsV1BudgetsResponse> =
  s.object<AnalyticsV1BudgetsResponse>(
    {
      budgets: s.optional(s.array(s.lazy(() => budgetListItemSchema))),
      pageToken: s.optional(s.string()),
      rowCount: s.optional(s.int()),
      riskAggregations: s.optional(s.lazy(() => riskAggregationsSchema)),
    },
    { additionalProperties: s.json() },
  );
