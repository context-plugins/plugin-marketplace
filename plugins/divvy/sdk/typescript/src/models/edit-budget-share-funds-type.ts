import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The subset of BudgetShareFundsType options that users are allowed to use for updates/creates.
 * (Other options are read-only.)
 */
export const EditBudgetShareFundsType = {
  DoNotShare: "DO_NOT_SHARE",
  ShareManually: "SHARE_MANUALLY",
} as const;
export type EditBudgetShareFundsType =
  | (typeof EditBudgetShareFundsType)[keyof typeof EditBudgetShareFundsType]
  | (string & {});

export const editBudgetShareFundsTypeSchema: EnumSchema<EditBudgetShareFundsType> =
  s.enumOf<EditBudgetShareFundsType>(EditBudgetShareFundsType);
