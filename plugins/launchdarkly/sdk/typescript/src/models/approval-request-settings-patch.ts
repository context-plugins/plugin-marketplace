import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApprovalRequestSettingsPatch = {
  /**
   * Automatically apply changes that have been approved by all reviewers. This field is only
   * applicable for approval services other than LaunchDarkly.
   */
  autoApplyApprovedChanges?: boolean | null;
  /** Whether to skip approvals for pending changes */
  bypassApprovalsForPendingChanges?: boolean;
  /** Allow applying the change as long as at least one person has approved */
  canApplyDeclinedChanges?: boolean;
  /** Allow someone who makes an approval request to apply their own change */
  canReviewOwnRequest?: boolean;
  environmentKey: string;
  /**
   * Sets the amount of approvals required before a member can apply a change. The minimum is one
   * and the maximum is five.
   */
  minNumApprovals?: number;
  /** If approvals are required for this environment */
  required?: boolean;
  /**
   * Require approval only on flags with the provided tags. Otherwise all flags will require
   * approval.
   */
  requiredApprovalTags?: string[];
  resourceKind: string;
  /** Arbitrary service-specific configuration */
  serviceConfig?: Record<string, unknown>;
  /** Which service to use for managing approvals */
  serviceKind?: string;
  /**
   * Optional integration configuration ID of a custom approval integration. This is an
   * Enterprise-only feature.
   */
  serviceKindConfigurationId?: string | null;
};

export const approvalRequestSettingsPatchSchema: Schema<ApprovalRequestSettingsPatch> =
  s.object<ApprovalRequestSettingsPatch>({
    autoApplyApprovedChanges: s.optionalNullable(s.boolean()),
    bypassApprovalsForPendingChanges: s.optional(s.boolean()),
    canApplyDeclinedChanges: s.optional(s.boolean()),
    canReviewOwnRequest: s.optional(s.boolean()),
    environmentKey: s.string(),
    minNumApprovals: s.optional(s.int()),
    required: s.optional(s.boolean()),
    requiredApprovalTags: s.optional(s.array(s.string())),
    resourceKind: s.string(),
    serviceConfig: s.optional(s.record(s.string(), s.unknown())),
    serviceKind: s.optional(s.string()),
    serviceKindConfigurationId: s.optionalNullable(s.string()),
  });
