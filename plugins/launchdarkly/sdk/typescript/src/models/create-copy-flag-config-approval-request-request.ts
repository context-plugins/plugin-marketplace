import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { excludedAction1Schema, type ExcludedAction1 } from "./excluded-action1.js";
import { includedAction1Schema, type IncludedAction1 } from "./included-action1.js";
import { sourceFlagSchema, type SourceFlag } from "./source-flag.js";

export type CreateCopyFlagConfigApprovalRequestRequest = {
  /** Optional comment describing the approval request */
  comment?: string;
  /** A brief description of your changes */
  description: string;
  /** An array of member IDs. These members are notified to review the approval request. */
  notifyMemberIds?: string[];
  /**
   * An array of team keys. The members of these teams are notified to review the approval request.
   */
  notifyTeamKeys?: string[];
  source: SourceFlag;
  /**
   * Optional list of the flag changes to copy from the source environment to the target
   * environment. You may include either <code>includedActions</code> or
   * <code>excludedActions</code>, but not both. If neither are included, then all flag changes will
   * be copied.
   */
  includedActions?: IncludedAction1[];
  /**
   * Optional list of the flag changes NOT to copy from the source environment to the target
   * environment. You may include either <code>includedActions</code> or
   * <code>excludedActions</code>, but not both. If neither are included, then all flag changes will
   * be copied.
   */
  excludedActions?: ExcludedAction1[];
};

export const createCopyFlagConfigApprovalRequestRequestSchema: Schema<CreateCopyFlagConfigApprovalRequestRequest> =
  s.object<CreateCopyFlagConfigApprovalRequestRequest>({
    comment: s.optional(s.string()),
    description: s.string(),
    notifyMemberIds: s.optional(s.array(s.string())),
    notifyTeamKeys: s.optional(s.array(s.string())),
    source: sourceFlagSchema,
    includedActions: s.optional(s.array(s.lazy(() => includedAction1Schema))),
    excludedActions: s.optional(s.array(s.lazy(() => excludedAction1Schema))),
  });
