import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Configuration that controls how changes to a resource are gated by approvals. */
export type ApprovalRequestSetting = {
  /** If approvals are required for this environment */
  required: boolean;
  /** Whether to skip approvals for pending changes */
  bypassApprovalsForPendingChanges: boolean;
  /**
   * Sets the amount of approvals required before a member can apply a change. The minimum is one
   * and the maximum is five.
   */
  minNumApprovals: number;
  /** Allow someone who makes an approval request to apply their own change */
  canReviewOwnRequest: boolean;
  /** Allow applying the change as long as at least one person has approved */
  canApplyDeclinedChanges: boolean;
  /**
   * Automatically apply changes that have been approved by all reviewers. This field is only
   * applicable for approval services other than LaunchDarkly.
   */
  autoApplyApprovedChanges?: boolean | null;
  /** Which service to use for managing approvals */
  serviceKind: string;
  /** Arbitrary service-specific configuration */
  serviceConfig: Record<string, unknown>;
  /**
   * Require approval only on flags with the provided tags. Otherwise all flags will require
   * approval.
   */
  requiredApprovalTags: string[];
  /**
   * Optional integration configuration ID of a custom approval integration. This is an
   * Enterprise-only feature.
   */
  serviceKindConfigurationId?: string | null;
};

export const approvalRequestSettingSchema: Schema<ApprovalRequestSetting> = s.object<ApprovalRequestSetting>({
  required: s.boolean(),
  bypassApprovalsForPendingChanges: s.boolean(),
  minNumApprovals: s.int(),
  canReviewOwnRequest: s.boolean(),
  canApplyDeclinedChanges: s.boolean(),
  autoApplyApprovedChanges: s.optionalNullable(s.boolean()),
  serviceKind: s.string(),
  serviceConfig: s.record(s.string(), s.unknown()),
  requiredApprovalTags: s.array(s.string()),
  serviceKindConfigurationId: s.optionalNullable(s.string()),
});
