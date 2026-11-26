import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actorRoleSchema, type ActorRole } from "./actor-role.js";
import { reimbursementStatusSchema, type ReimbursementStatus } from "./reimbursement-status.js";

/** DTO representing an action that happened on a reimbursement from the Spend API. */
export type StatusHistory = {
  /** BILL-generated ID of the user that approved or denied the reimbursement */
  actorId?: string;
  actorRole?: ActorRole;
  /** Reimbursement action date and time */
  occurredTime?: Date;
  /** Reimbursement action note */
  note?: string;
  status?: ReimbursementStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusHistorySchema: Schema<StatusHistory> = s.object<StatusHistory>(
  {
    actorId: s.optional(s.string()),
    actorRole: s.optional(s.lazy(() => actorRoleSchema)),
    occurredTime: s.optional(s.dateTime()),
    note: s.optional(s.string()),
    status: s.optional(s.lazy(() => reimbursementStatusSchema)),
  },
  { additionalProperties: s.json() },
);
