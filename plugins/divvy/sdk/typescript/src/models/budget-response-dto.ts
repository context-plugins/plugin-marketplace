import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { budgetShareFundsTypeSchema, type BudgetShareFundsType } from "./budget-share-funds-type.js";
import { currentPeriodSchema, type CurrentPeriod } from "./current-period.js";
import { periodIntervalTypeSchema, type PeriodIntervalType } from "./period-interval-type.js";

/** Budgets response. */
export type BudgetResponseDto = {
  /**
   * BILL-generated ID of the budget
   *
   * @deprecated
   */
  id?: string;
  /** BILL-generated UUID of the budget */
  uuid?: string;
  /** Budget name */
  name?: string;
  /** Budget description */
  description?: string;
  /** Set as `true` if the budget is retired */
  retired?: boolean;
  /** Budget start date */
  startDate?: string;
  /** Budget expiration date */
  expirationDate?: string;
  recurringInterval?: PeriodIntervalType;
  /** Timezone in which the budget funds are reset */
  timezone?: string;
  /** Set as `true` to automatically add all new users to this budget */
  autoAddUsers?: boolean;
  /** Set as `true` if a receipt is required for transactions in the budget */
  receiptRequired?: boolean;
  /**
   * Maximum transaction size in the budget. Any single transaction for an amount greater than
   * `maxTxSize` will be declined.
   */
  maxTxSize?: number;
  /**
   * Set as `true` for any budget funds assigned to users and vendor cards to carry over from one
   * budget period to the next. The budget period is set with `recurringInterval`.
   */
  carryOver?: boolean;
  /** Set as `true` if the current budget is set as the default budget for the company */
  default?: boolean;
  /**
   * BILL-generated ID of the parent budget
   *
   * @deprecated
   */
  parentBudgetId?: string;
  /** BILL-generated UUID of the parent budget */
  parentBudgetUuid?: string;
  /**
   * Set as `true` if this budget is a budget group. A budget group can be set as a parent of other
   * budgets.
   */
  budgetGroup?: boolean;
  shareFunds?: BudgetShareFundsType;
  /** Spend limit for all future budget periods */
  recurringLimit?: number;
  /** Set as `true` for enabling spend amounts over the budget limit */
  limitlessOverspend?: boolean;
  /** Spend goal for a limitless budget */
  limitlessGoal?: number;
  currentPeriod?: CurrentPeriod;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetResponseDtoSchema: Schema<BudgetResponseDto> = s.object<BudgetResponseDto>(
  {
    id: s.optional(s.string()),
    uuid: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    retired: s.optional(s.boolean()),
    startDate: s.optional(s.dateOnly()),
    expirationDate: s.optional(s.dateOnly()),
    recurringInterval: s.optional(s.lazy(() => periodIntervalTypeSchema)),
    timezone: s.optional(s.string()),
    autoAddUsers: s.optional(s.boolean()),
    receiptRequired: s.optional(s.boolean()),
    maxTxSize: s.optional(s.float64()),
    carryOver: s.optional(s.boolean()),
    default: s.optional(s.boolean()),
    parentBudgetId: s.optional(s.string()),
    parentBudgetUuid: s.optional(s.string()),
    budgetGroup: s.optional(s.boolean()),
    shareFunds: s.optional(s.lazy(() => budgetShareFundsTypeSchema)),
    recurringLimit: s.optional(s.float64()),
    limitlessOverspend: s.optional(s.boolean()),
    limitlessGoal: s.optional(s.float64()),
    currentPeriod: s.optional(s.lazy(() => currentPeriodSchema)),
  },
  { additionalProperties: s.json() },
);
