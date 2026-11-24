import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { budgetCreateUpdateAlertSchema, type BudgetCreateUpdateAlert } from "./budget-create-update-alert.js";
import { collaboratorSchema, type Collaborator } from "./collaborator.js";
import { currencySchema, type Currency } from "./currency.js";
import { externalConfigFilterSchema, type ExternalConfigFilter } from "./external-config-filter.js";
import { Metric, metricSchema } from "./metric.js";
import { public1Schema, type Public1 } from "./public1.js";
import { slackChannelSchema, type SlackChannel } from "./slack-channel.js";

/** Request body for creating or updating a budget. */
export type BudgetCreateUpdateRequest = {
  /** List of up to three thresholds defined as a percentage of the amount. */
  alerts?: BudgetCreateUpdateAlert[];
  /** Budget period amount required: true(if usePrevSpend is false) */
  amount?: number;
  /** List of seasonal amounts for recurring budgets with different amounts per period. */
  seasonalAmounts?: number[];
  /** List of permitted users to view/edit the report. */
  collaborators?: Collaborator[];
  /** Currency code for monetary values. */
  currency?: Currency;
  /** Budget description */
  description?: string;
  /** Fixed budget end date required: true(if budget type is fixed) */
  endPeriod?: number;
  /** Periodical growth percentage in recurring budget @default 0 */
  growthPerPeriod?: number;
  /** Budget metric @default Metric.Cost */
  metric?: Metric;
  /** Budget Name. */
  name?: string;
  public?: Public1;
  /** List of emails to notify when reaching alert threshold. */
  recipients?: string[];
  /** List of Slack channels to notify when reaching alert threshold. */
  recipientsSlackChannels?: SlackChannel[];
  /** The filters selected define the scope of the budget. */
  scopes?: ExternalConfigFilter[];
  /** Budget start Date */
  startPeriod?: number;
  /** Recurring budget interval can be one of: ["day", "week", "month", "quarter", "year"] */
  timeInterval?: string;
  /** budget type can be one of: ["fixed", "recurring"] */
  type?: string;
  /** Use the last period's spend as the target amount for recurring budgets @default false */
  usePrevSpend?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetCreateUpdateRequestSchema: Schema<BudgetCreateUpdateRequest> =
  s.object<BudgetCreateUpdateRequest>(
    {
      alerts: s.optional(s.array(s.lazy(() => budgetCreateUpdateAlertSchema))),
      amount: s.optional(s.float64()),
      seasonalAmounts: s.optional(s.array(s.float64())),
      collaborators: s.optional(s.array(s.lazy(() => collaboratorSchema))),
      currency: s.optional(s.lazy(() => currencySchema)),
      description: s.optional(s.string()),
      endPeriod: s.optional(s.int()),
      growthPerPeriod: s.defaulted(s.float64(), 0),
      metric: s.defaulted(metricSchema, Metric.Cost),
      name: s.optional(s.string()),
      public: s.optional(s.lazy(() => public1Schema)),
      recipients: s.optional(s.array(s.string())),
      recipientsSlackChannels: s.optional(s.array(s.lazy(() => slackChannelSchema))),
      scopes: s.optional(s.array(s.lazy(() => externalConfigFilterSchema))),
      startPeriod: s.optional(s.int()),
      timeInterval: s.optional(s.string()),
      type: s.optional(s.string()),
      usePrevSpend: s.defaulted(s.boolean(), false),
    },
    { additionalProperties: s.json() },
  );
