import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currency1Schema, type Currency1 } from "./currency1.js";
import { disputeHistoryItemSchema, type DisputeHistoryItem } from "./dispute-history-item.js";
import { disputeOrderItemSchema, type DisputeOrderItem } from "./dispute-order-item.js";
import { disputeReasonSchema, type DisputeReason } from "./dispute-reason.js";
import { disputeStatusSchema, type DisputeStatus } from "./dispute-status.js";

export type Dispute = {
  /** ID of the dispute. */
  id: string;
  /** Array of links to images which were uploaded by customer. */
  attachments: string[] | null;
  /** ID of the payment. */
  paymentId: string;
  /** Total disputed amount. */
  amount: string;
  /** The currency of the dispute. It's always equal to the currency of the payment. */
  currency: Currency1;
  /** Date and time the Dispute was created, in UTC, and displayed in ISO 8601 datetime format. */
  createdAt: string;
  /**
   * Date and time of the expiration of the Dispute, in UTC, and displayed in ISO 8601 datetime
   * format.
   */
  expiredAt: string;
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
  status: DisputeStatus;
  /**
   * Cause of the dispute was created (selected by customer). There are only four reasons:
   *   - `unreceived_refund` - a refund not received
   *   - `identity_theft` - I did not place this order (also known as identity theft)
   *   - `product_issue` - there was a problem with the product
   *   - `not_delivered` - the order was not delivered
   */
  reason: DisputeReason;
  /** How many days left before dispute will be automatically approved. */
  daysLeft: number;
  history: DisputeHistoryItem[];
  items: DisputeOrderItem[];
  /** Merchant-assigned order number. */
  orderNumber: string;
  /** The customer additional comments on the causes of the dispute. */
  comment: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputeSchema: Schema<Dispute> = s.object<Dispute>(
  {
    id: s.string(),
    attachments: s.nullable(s.array(s.string())),
    paymentId: s.string(),
    amount: s.string(),
    currency: currency1Schema,
    createdAt: s.string(),
    expiredAt: s.string(),
    status: disputeStatusSchema,
    reason: disputeReasonSchema,
    daysLeft: s.int(),
    history: s.array(s.lazy(() => disputeHistoryItemSchema)),
    items: s.array(s.lazy(() => disputeOrderItemSchema)),
    orderNumber: s.string(),
    comment: s.string(),
    _keysMap: {
      paymentId: "payment_id",
      createdAt: "created_at",
      expiredAt: "expired_at",
      daysLeft: "days_left",
      orderNumber: "order_number",
    },
  },
  { additionalProperties: s.json() },
);
