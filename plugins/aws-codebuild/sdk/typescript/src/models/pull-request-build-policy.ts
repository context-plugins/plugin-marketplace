import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approverRoleSchema, type ApproverRole } from "./approver-role.js";
import { requiresCommentApprovalSchema, type RequiresCommentApproval } from "./requires-comment-approval.js";

export type PullRequestBuildPolicy = {
  /**
   * Specifies when comment-based approval is required before triggering a build on pull requests.
   * This setting determines whether builds run automatically or require explicit approval through
   * comments. DISABLED: Builds trigger automatically without requiring comment approval
   * ALL_PULL_REQUESTS: All pull requests require comment approval before builds execute (unless
   * contributor is one of the approver roles) FORK_PULL_REQUESTS: Only pull requests from forked
   * repositories require comment approval (unless contributor is one of the approver roles)
   */
  requiresCommentApproval: RequiresCommentApproval;
  /**
   * List of repository roles that have approval privileges for pull request builds when comment
   * approval is required. Only users with these roles can provide valid comment approvals. If a
   * pull request contributor is one of these roles, their pull request builds will trigger
   * automatically. This field is only applicable when requiresCommentApproval is not DISABLED.
   */
  approverRoles?: ApproverRole[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pullRequestBuildPolicySchema: Schema<PullRequestBuildPolicy> = s.object<PullRequestBuildPolicy>(
  {
    requiresCommentApproval: requiresCommentApprovalSchema,
    approverRoles: s.optional(s.array(s.lazy(() => approverRoleSchema))),
  },
  { additionalProperties: s.json() },
);
