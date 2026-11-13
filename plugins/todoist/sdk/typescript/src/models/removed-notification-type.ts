import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A set of legacy NotificationType values that have been removed from the mailers and database, but
 * are still referenced by clients therefore we have to maintain the contract.
 *
 * Ensures we still send down the keys without needing to maintain the associated mailer code and
 * database values.
 */
export const RemovedNotificationType = {
  BizTrialEnterCc: "biz_trial_enter_cc",
  BizTrialWillEnd: "biz_trial_will_end",
  BizPaymentFailed: "biz_payment_failed",
  BizAccountDisabled: "biz_account_disabled",
  BizInvitationCreated: "biz_invitation_created",
  BizInvitationAccepted: "biz_invitation_accepted",
  BizInvitationRejected: "biz_invitation_rejected",
  BizPolicyDisallowedInvitation: "biz_policy_disallowed_invitation",
  BizPolicyRejectedInvitation: "biz_policy_rejected_invitation",
} as const;
export type RemovedNotificationType =
  | (typeof RemovedNotificationType)[keyof typeof RemovedNotificationType]
  | (string & {});

export const removedNotificationTypeSchema: EnumSchema<RemovedNotificationType> =
  s.enumOf<RemovedNotificationType>(RemovedNotificationType);
