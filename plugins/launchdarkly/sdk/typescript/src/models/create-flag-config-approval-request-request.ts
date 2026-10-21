import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateFlagConfigApprovalRequestRequest = {
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
  executionDate?: number;
  /**
   * The ID of a scheduled change. Include this if your <code>instructions</code> include editing or
   * deleting a scheduled change.
   */
  operatingOnId?: string;
  integrationConfig?: Record<string, Record<string, unknown>>;
};

export const createFlagConfigApprovalRequestRequestSchema: Schema<CreateFlagConfigApprovalRequestRequest> =
  s.object<CreateFlagConfigApprovalRequestRequest>({
    comment: s.optional(s.string()),
    description: s.string(),
    instructions: s.array(s.record(s.string(), s.unknown())),
    notifyMemberIds: s.optional(s.array(s.string())),
    notifyTeamKeys: s.optional(s.array(s.string())),
    executionDate: s.optional(s.int()),
    operatingOnId: s.optional(s.string()),
    integrationConfig: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  });
