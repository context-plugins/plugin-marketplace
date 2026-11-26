import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  editBudgetShareFundsTypeSchema,
  type EditBudgetShareFundsType,
} from "./edit-budget-share-funds-type.js";
import { periodIntervalTypeSchema, type PeriodIntervalType } from "./period-interval-type.js";

/** Update a budget (limit updated) */
export type BudgetUpdateDto = {
  /** Budget name */
  name?: string;
  /** Budget description */
  description?: string;
  /** Budget expiration date. This value is in the `yyyy-MM-dd` format. */
  expirationDate?: string | null;
  recurringInterval?: PeriodIntervalType;
  /**
   * The month in which the budget will recur. Set this field only when `recurringInterval` is set
   * as `QUARTERLY` or `YEARLY`. The default value is the current month.
   */
  recurMonth?: number;
  /**
   * Timezone in which the budget funds are reset. The default value is the timezone of the
   * company's billing address.
   *
   * Set this field in the `US/{time_zone}` format. For example, `US/Pacific` or `US/Mountain`.
   */
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
  /**
   * Set as `true` for enabling spend amounts over the budget limit.
   *
   * **Note**: You cannot set this field as `true` for budgets with `recurringInterval` set as
   * `DAILY` or `WEEKLY`.
   */
  limitlessOverspend?: boolean;
  /**
   * Spend limit for the initial budget period.
   *
   * **Note**: This field is required unless `limitlessOverspend` is set as `true`.
   */
  limit?: number;
  /**
   * Spend goal for a limitless budget.
   *
   * **Note**: You can set this field when `limitlessOverspend` is set as `true`.
   */
  limitlessGoal?: number;
  /**
   * Spend limit for all future budget periods.
   *
   * **Note**: This field is required when `recurringInterval` is set as any value other than
   * `NONE`.
   */
  recurringLimit?: number;
  /**
   * Spend amount allowed above the budget limit before transactions are declined.
   *
   * **Note**: You cannot set this field when `limitlessOverspend` is set as `true` or for budgets
   * with `recurringInterval` as `DAILY` or `WEEKLY`.
   */
  overspendBuffer?: number;
  shareFunds?: EditBudgetShareFundsType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const budgetUpdateDtoProperties: s.Shape<BudgetUpdateDto> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  expirationDate: s.optionalNullable(s.dateOnly()),
  recurringInterval: s.optional(s.lazy(() => periodIntervalTypeSchema)),
  recurMonth: s.optional(s.int()),
  timezone: s.optional(s.string()),
  autoAddUsers: s.optional(s.boolean()),
  receiptRequired: s.optional(s.boolean()),
  maxTxSize: s.optional(s.float64()),
  carryOver: s.optional(s.boolean()),
  limitlessOverspend: s.optional(s.boolean()),
  limit: s.optional(s.float64()),
  limitlessGoal: s.optional(s.float64()),
  recurringLimit: s.optional(s.float64()),
  overspendBuffer: s.optional(s.float64()),
  shareFunds: s.optional(s.lazy(() => editBudgetShareFundsTypeSchema)),
};

export const budgetUpdateDtoInternalSchema: Schema<BudgetUpdateDto> = s.object<BudgetUpdateDto>(
  budgetUpdateDtoProperties,
  { additionalProperties: s.json() },
);

export const budgetUpdateDtoSchema: Schema<BudgetUpdateDto> = s.lazySchema(() =>
  s.object<BudgetUpdateDto>(
    {
      ...budgetUpdateDtoProperties,
      recurMonth: s.optional(s.int().check(s.gte(1), s.lte(12))),
    },
    { additionalProperties: s.json() },
  ),
);
