import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** BudgetShareFundsType. */
export const BudgetShareFundsType = {
  DoNotShare: "DO_NOT_SHARE",
  ShareManually: "SHARE_MANUALLY",
  ShareWithAllOwners: "SHARE_WITH_ALL_OWNERS",
  ShareWithAllMembers: "SHARE_WITH_ALL_MEMBERS",
  ShareAllOwnersButMembersManually: "SHARE_ALL_OWNERS_BUT_MEMBERS_MANUALLY",
} as const;
export type BudgetShareFundsType =
  | (typeof BudgetShareFundsType)[keyof typeof BudgetShareFundsType]
  | (string & {});

export const budgetShareFundsTypeSchema: EnumSchema<BudgetShareFundsType> =
  s.enumOf<BudgetShareFundsType>(BudgetShareFundsType);
