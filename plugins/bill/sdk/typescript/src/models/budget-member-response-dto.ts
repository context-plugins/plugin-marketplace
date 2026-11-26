import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { budgetRoleTypeSchema, type BudgetRoleType } from "./budget-role-type.js";

/** Budget members response. */
export type BudgetMemberResponseDto = {
  /**
   * BILL-generated ID of the user
   *
   * @deprecated
   */
  userId?: string;
  /** BILL-generated UUID of the user */
  userUuid?: string;
  /** Total amount spent by the user in the current budget period */
  spent?: number;
  /** Funds assigned to the user in the current budget period */
  limit?: number;
  /** Funds assigned to the user in all future budget periods */
  recurringLimit?: number;
  /** Set as `true` if the user receives the `recurringLimit` funds in all future budget periods. */
  recurring?: boolean;
  budgetRole?: BudgetRoleType;
  /** User display name */
  name?: string;
  /** Set as `true` if the budget member is retired */
  retired?: boolean;
  /** Set as `true` if all the budget funds are shared with the user */
  shareBudgetFunds?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const budgetMemberResponseDtoSchema: Schema<BudgetMemberResponseDto> =
  s.object<BudgetMemberResponseDto>(
    {
      userId: s.optional(s.string()),
      userUuid: s.optional(s.string()),
      spent: s.optional(s.float64()),
      limit: s.optional(s.float64()),
      recurringLimit: s.optional(s.float64()),
      recurring: s.optional(s.boolean()),
      budgetRole: s.optional(s.lazy(() => budgetRoleTypeSchema)),
      name: s.optional(s.string()),
      retired: s.optional(s.boolean()),
      shareBudgetFunds: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
