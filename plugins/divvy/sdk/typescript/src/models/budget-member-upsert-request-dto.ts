import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { budgetRoleTypeSchema, type BudgetRoleType } from "./budget-role-type.js";

/** Add a budget member */
export type BudgetMemberUpsertRequestDto = {
  /**
   * Funds assigned to the user in the current budget period.
   *
   * **Note**: This field is required with `shareBudgetFunds` is set as `false`.
   */
  limit?: number;
  /**
   * Funds assigned to the user in all future budget periods.
   *
   * **Note**: This field is required when `shareBudgetFunds` is set as `false`.
   */
  recurringLimit?: number;
  role?: BudgetRoleType;
  /**
   * Set as `true` to share all the budget funds with the user.
   *
   * **Note**: You cannot set this field as `true` when either `limit` or `recurringLimit` is set.
   */
  shareBudgetFunds?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetMemberUpsertRequestDtoSchema: Schema<BudgetMemberUpsertRequestDto> =
  s.object<BudgetMemberUpsertRequestDto>(
    {
      limit: s.optional(s.float64()),
      recurringLimit: s.optional(s.float64()),
      role: s.optional(s.lazy(() => budgetRoleTypeSchema)),
      shareBudgetFunds: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
