import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the dispute:
 *   - `new` - dispute pending merchant approval for refund or initiate a challenge
 *   - `declined` - dispute was declined by Tabby support
 *   - `cancelled` - dispute was canceled by customer
 *   - `refunded` - dispute was approved or the order was refunded via Payments API
 *   - `in_progress` - merchant challenged dispute and need a response from Tabby support
 *   - `evidence_merchant` - waiting for evidence from the merchant
 *   - `evidence_customer` - waiting for evidence from the customer
 */
export const DisputeStatus = {
  New: "new",
  Declined: "declined",
  Cancelled: "cancelled",
  Refunded: "refunded",
  InProgress: "in_progress",
  EvidenceMerchant: "evidence_merchant",
  EvidenceCustomer: "evidence_customer",
} as const;
export type DisputeStatus = (typeof DisputeStatus)[keyof typeof DisputeStatus] | (string & {});

export const disputeStatusSchema: EnumSchema<DisputeStatus> = s.enumOf<DisputeStatus>(DisputeStatus);
