import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { collaboratorSchema, type Collaborator } from "./collaborator.js";
import { currencySchema, type Currency } from "./currency.js";
import { externalBudgetAlertSchema, type ExternalBudgetAlert } from "./external-budget-alert.js";
import { externalConfigFilterSchema, type ExternalConfigFilter } from "./external-config-filter.js";
import { publicSchema, type Public } from "./public.js";
import { slackChannelSchema, type SlackChannel } from "./slack-channel.js";

/** Budget details and runtime metrics. */
export type BudgetApi = {
  /** List of up to three thresholds defined as a percentage of amount. */
  alerts?: ExternalBudgetAlert[];
  /** Budget period amount required: true(if usePrevSpend is false) */
  amount?: number;
  /** List of seasonal amounts for recurring budgets with different amounts per period. */
  seasonalAmounts?: number[];
  /** List of permitted users to view/edit the report. */
  collaborators?: Collaborator[];
  /** Creation time (in UNIX timestamp). */
  createTime?: number;
  /** Currency code for monetary values. */
  currency: Currency;
  currentUtilization?: number;
  /** Budget description. */
  description?: string;
  /** Fixed budget end date (in UNIX timestamp) required: true(if budget type is fixed) */
  endPeriod?: number;
  forecastedUtilization?: number;
  /** Periodical growth percentage in recurring budgets. @default 0 */
  growthPerPeriod?: number;
  /** budget ID, identifying the report in:path */
  id?: string;
  /** Budget metric - currently fixed to "cost" @default "cost" */
  metric?: string;
  /** Budget Name */
  name: string;
  /** Public sharing access level for the budget. */
  public?: Public;
  /** List of emails to notify when reaching alert threshold. */
  recipients?: string[];
  /** List of Slack channels to notify when reaching alert threshold. */
  recipientsSlackChannels?: SlackChannel[];
  /** The filters selected define the scope of the budget. */
  scopes: ExternalConfigFilter[];
  /** Budget start date (in UNIX timestamp). */
  startPeriod: number;
  /** Recurring budget interval can be one of: ["day", "week", "month", "quarter" ,"year"] */
  timeInterval: string;
  /** budget type can be one of: ["fixed", "recurring"] */
  type: string;
  /** Update time (in UNIX timestamp). */
  updateTime?: number;
  /** Use the last period's spend as the target amount for recurring budgets. @default false */
  usePrevSpend?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetApiSchema: Schema<BudgetApi> = s.object<BudgetApi>(
  {
    alerts: s.optional(s.array(s.lazy(() => externalBudgetAlertSchema))),
    amount: s.optional(s.float64()),
    seasonalAmounts: s.optional(s.array(s.float64())),
    collaborators: s.optional(s.array(s.lazy(() => collaboratorSchema))),
    createTime: s.optional(s.int()),
    currency: currencySchema,
    currentUtilization: s.optional(s.float64()),
    description: s.optional(s.string()),
    endPeriod: s.optional(s.int()),
    forecastedUtilization: s.optional(s.float64()),
    growthPerPeriod: s.defaulted(s.float64(), 0),
    id: s.optional(s.string()),
    metric: s.defaulted(s.string(), "cost"),
    name: s.string(),
    public: s.optional(s.lazy(() => publicSchema)),
    recipients: s.optional(s.array(s.string())),
    recipientsSlackChannels: s.optional(s.array(s.lazy(() => slackChannelSchema))),
    scopes: s.array(s.lazy(() => externalConfigFilterSchema)),
    startPeriod: s.int(),
    timeInterval: s.string(),
    type: s.string(),
    updateTime: s.optional(s.int()),
    usePrevSpend: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
