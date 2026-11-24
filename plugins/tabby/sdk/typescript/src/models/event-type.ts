import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The event type of the dispute history item:
 *   - `dispute_created` - the customer raised a dispute;
 *   - `dispute_approved` - disputed was approved and amount was refunded to customer;
 *   - `dispute_declined` - dispute was declined by Tabby support;
 *   - `dispute_canceled` - dispute was canceled by customer;
 *   - `dispute_in_arbitration` - merchant challenged dispute (e.g incorrect amount);
 *   - `dispute_amount_changed` - disputed amount was changed;
 *   - `dispute_comment_added` - merchant added comment to the dispute;
 *   - `evidence_merchant` - agent requested evidence from the merchant;
 *   - `evidence_customer` - agent requested evidence from the customer;
 *   - `evidence_merchant_provided` - merchant provided evidence;
 *   - `evidence_customer_provided` - customer provided evidence;
 *   - `merchant_14d_unresponsive` - merchant did not respond within 14 days;
 *   - `customer_14d_unresponsive` - customer did not respond within 14 days.
 */
export const EventType = {
  DisputeCreated: "dispute_created",
  DisputeApproved: "dispute_approved",
  DisputeDeclined: "dispute_declined",
  DisputeCanceled: "dispute_canceled",
  DisputeInArbitration: "dispute_in_arbitration",
  DisputeAmountChanged: "dispute_amount_changed",
  DisputeCommentAdded: "dispute_comment_added",
  EvidenceMerchant: "evidence_merchant",
  EvidenceCustomer: "evidence_customer",
  EvidenceMerchantProvided: "evidence_merchant_provided",
  EvidenceCustomerProvided: "evidence_customer_provided",
  Merchant14DUnresponsive: "merchant_14d_unresponsive",
  Customer14DUnresponsive: "customer_14d_unresponsive",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
