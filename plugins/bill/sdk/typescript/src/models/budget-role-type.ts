import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Options for setting a user's role within a budget. DELETE removes the user from the budget. */
export const BudgetRoleType = {
  Member: "MEMBER",
  Owner: "OWNER",
  Observer: "OBSERVER",
} as const;
export type BudgetRoleType = (typeof BudgetRoleType)[keyof typeof BudgetRoleType] | (string & {});

export const budgetRoleTypeSchema: EnumSchema<BudgetRoleType> = s.enumOf<BudgetRoleType>(BudgetRoleType);
