import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for reimbursement status. */
export const ReimbursementStatusConnectEventsSubscriptionsApi = {
  Unspecified: "UNSPECIFIED",
  Created: "CREATED",
  AwaitingApproval: "AWAITING_APPROVAL",
  ApprovalUndone: "APPROVAL_UNDONE",
  AwaitingTier2Approval: "AWAITING_TIER2_APPROVAL",
  Tier2ApprovalUndone: "TIER2_APPROVAL_UNDONE",
  Approved: "APPROVED",
  CancelPayment: "CANCEL_PAYMENT",
  FundingReceived: "FUNDING_RECEIVED",
  Paid: "PAID",
  PaymentFailed: "PAYMENT_FAILED",
  Denied: "DENIED",
  DenialUndone: "DENIAL_UNDONE",
  Deleted: "DELETED",
} as const;
export type ReimbursementStatusConnectEventsSubscriptionsApi =
  | (typeof ReimbursementStatusConnectEventsSubscriptionsApi)[keyof typeof ReimbursementStatusConnectEventsSubscriptionsApi]
  | (string & {});

export const reimbursementStatusConnectEventsSubscriptionsApiSchema: EnumSchema<ReimbursementStatusConnectEventsSubscriptionsApi> =
  s.enumOf<ReimbursementStatusConnectEventsSubscriptionsApi>(
    ReimbursementStatusConnectEventsSubscriptionsApi,
  );
