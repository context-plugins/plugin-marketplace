import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Spend \& Expense User Role type information. */
export const RoleType = {
  Admin: "ADMIN",
  Approver: "APPROVER",
  Auditor: "AUDITOR",
  Bookkeeper: "BOOKKEEPER",
  Member: "MEMBER",
  FinanceAdmin: "FINANCE_ADMIN",
  NoAccess: "NO_ACCESS",
} as const;
export type RoleType = (typeof RoleType)[keyof typeof RoleType] | (string & {});

export const roleTypeSchema: EnumSchema<RoleType> = s.enumOf<RoleType>(RoleType);
