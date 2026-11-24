import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { alertThresholdSchema, type AlertThreshold } from "./alert-threshold.js";
import { externalConfigFilterSchema, type ExternalConfigFilter } from "./external-config-filter.js";
import { riskStatusSchema, type RiskStatus } from "./risk-status.js";

/** Summary information for a budget. */
export type BudgetListItem = {
  alertThresholds?: AlertThreshold[];
  amount?: number;
  budgetName?: string;
  createTime?: number;
  currency?: string;
  currentUtilization?: number;
  endPeriod?: number;
  forecastedUtilizationDate?: number;
  id?: string;
  owner?: string;
  /**
   * Server-computed risk classification, based on current utilization and forecasted breach date
   * relative to the configured amount and current period end. "atRisk" - the budget has already
   * exceeded its configured amount, or its forecast projects it will before the current period
   * ends. "onTrack" - the budget has forecast data and is neither over budget nor projected to
   * breach. "unknown" - no forecast data is available yet, the budget is a fixed budget whose
   * period has already expired, or the budget is invalid/draft.
   */
  riskStatus?: RiskStatus;
  /** The filters selected define the scope of the budget. */
  scopes?: ExternalConfigFilter[];
  startPeriod?: number;
  timeInterval?: string;
  updateTime?: number;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetListItemSchema: Schema<BudgetListItem> = s.object<BudgetListItem>(
  {
    alertThresholds: s.optional(s.array(s.lazy(() => alertThresholdSchema))),
    amount: s.optional(s.float64()),
    budgetName: s.optional(s.string()),
    createTime: s.optional(s.int()),
    currency: s.optional(s.string()),
    currentUtilization: s.optional(s.float64()),
    endPeriod: s.optional(s.int()),
    forecastedUtilizationDate: s.optional(s.int()),
    id: s.optional(s.string()),
    owner: s.optional(s.string()),
    riskStatus: s.optional(s.lazy(() => riskStatusSchema)),
    scopes: s.optional(s.array(s.lazy(() => externalConfigFilterSchema))),
    startPeriod: s.optional(s.int()),
    timeInterval: s.optional(s.string()),
    updateTime: s.optional(s.int()),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
