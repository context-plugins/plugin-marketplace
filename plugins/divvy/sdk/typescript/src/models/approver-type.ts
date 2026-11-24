import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Spend \& Expense transactions approver type. */
export const ApproverType = {
  Admin: "ADMIN",
  Manager: "MANAGER",
  NextManager: "NEXT_MANAGER",
  BudgetOwner: "BUDGET_OWNER",
  Bookkeeper: "BOOKKEEPER",
  SpecificPerson: "SPECIFIC_PERSON",
} as const;
export type ApproverType = (typeof ApproverType)[keyof typeof ApproverType] | (string & {});

export const approverTypeSchema: EnumSchema<ApproverType> = s.enumOf<ApproverType>(ApproverType);
