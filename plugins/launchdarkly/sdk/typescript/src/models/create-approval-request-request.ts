import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateApprovalRequestRequest = {
  /** String representation of the resource specifier */
  resourceId: string;
  /** Optional comment describing the approval request */
  comment?: string;
  /** A brief description of the changes you're requesting */
  description: string;
  instructions: Record<string, unknown>[];
  /** An array of member IDs. These members are notified to review the approval request. */
  notifyMemberIds?: string[];
  /**
   * An array of team keys. The members of these teams are notified to review the approval request.
   */
  notifyTeamKeys?: string[];
  integrationConfig?: Record<string, Record<string, unknown>>;
};

export const createApprovalRequestRequestSchema: Schema<CreateApprovalRequestRequest> =
  s.object<CreateApprovalRequestRequest>({
    resourceId: s.string(),
    comment: s.optional(s.string()),
    description: s.string(),
    instructions: s.array(s.record(s.string(), s.unknown())),
    notifyMemberIds: s.optional(s.array(s.string())),
    notifyTeamKeys: s.optional(s.array(s.string())),
    integrationConfig: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  });
