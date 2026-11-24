import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum representing the actor role for reimbursements in the Spend API. */
export const ActorRole = {
  Submitter: "SUBMITTER",
  Manager: "MANAGER",
  BudgetOwner: "BUDGET_OWNER",
  Admin: "ADMIN",
  System: "SYSTEM",
} as const;
export type ActorRole = (typeof ActorRole)[keyof typeof ActorRole] | (string & {});

export const actorRoleSchema: EnumSchema<ActorRole> = s.enumOf<ActorRole>(ActorRole);
