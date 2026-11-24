import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Cause of the dispute was created (selected by customer). There are only four reasons:
 *   - `unreceived_refund` - a refund not received
 *   - `identity_theft` - I did not place this order (also known as identity theft)
 *   - `product_issue` - there was a problem with the product
 *   - `not_delivered` - the order was not delivered
 */
export const DisputeReason = {
  UnreceivedRefund: "unreceived_refund",
  IdentityTheft: "identity_theft",
  ProductIssue: "product_issue",
  NotDelivered: "not_delivered",
} as const;
export type DisputeReason = (typeof DisputeReason)[keyof typeof DisputeReason] | (string & {});

export const disputeReasonSchema: EnumSchema<DisputeReason> = s.enumOf<DisputeReason>(DisputeReason);
