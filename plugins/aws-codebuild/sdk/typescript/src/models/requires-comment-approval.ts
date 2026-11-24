import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies when comment-based approval is required before triggering a build on pull requests.
 * This setting determines whether builds run automatically or require explicit approval through
 * comments. DISABLED: Builds trigger automatically without requiring comment approval
 * ALL_PULL_REQUESTS: All pull requests require comment approval before builds execute (unless
 * contributor is one of the approver roles) FORK_PULL_REQUESTS: Only pull requests from forked
 * repositories require comment approval (unless contributor is one of the approver roles)
 */
export const RequiresCommentApproval = {
  Disabled: "DISABLED",
  AllPullRequests: "ALL_PULL_REQUESTS",
  ForkPullRequests: "FORK_PULL_REQUESTS",
} as const;
export type RequiresCommentApproval =
  | (typeof RequiresCommentApproval)[keyof typeof RequiresCommentApproval]
  | (string & {});

export const requiresCommentApprovalSchema: EnumSchema<RequiresCommentApproval> =
  s.enumOf<RequiresCommentApproval>(RequiresCommentApproval);
