import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currency1Schema, type Currency1 } from "./currency1.js";
import {
  entity1RazorpayTransfersApiSchema,
  type Entity1RazorpayTransfersApi,
} from "./entity1-razorpay-transfers-api.js";
import { settlementStatusSchema, type SettlementStatus } from "./settlement-status.js";
import { transferStatusSchema, type TransferStatus } from "./transfer-status.js";

/**
 * A fund transfer from a merchant or captured payment to a Linked Account (Route). Minimum amount
 * is ₹100 (10000 paise). INR only. Prefix: trf_
 */
export type TransferRazorpayTransfersApi = {
  /** Transfer ID. Prefix: trf_ */
  id?: string;
  entity?: Entity1RazorpayTransfersApi;
  /** Source entity ID (payment ID, order ID, or merchant account ID for direct transfers). */
  source?: string;
  /** Destination Linked Account ID (acc_*). */
  recipient?: string;
  /** Transfer amount in paise. Minimum 10000 (₹100). */
  amount?: number;
  /** Always INR for transfers. */
  currency?: Currency1;
  /** Total amount reversed so far in paise. */
  amountReversed?: number;
  /** Transfer fee charged in paise. */
  fees?: number;
  /** GST on transfer fee in paise. */
  tax?: number;
  /** Transfer processing status. */
  transferStatus?: TransferStatus;
  /** Settlement status of the transferred funds in the Linked Account. */
  settlementStatus?: SettlementStatus;
  /** If true, settlement of this transfer is on hold. */
  onHold?: boolean;
  /** Unix timestamp until which settlement is on hold. null means indefinite hold. */
  onHoldUntil?: number;
  /** Settlement ID (setl_*) in the Linked Account once settled. */
  recipientSettlementId?: string;
  /**
   * Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not
   * exceed 256 characters.
   */
  notes?: Record<string, string>;
  /** Keys from notes that will be visible to the Linked Account in their dashboard. */
  linkedAccountNotes?: string[];
  createdAt?: number;
  /** Unix timestamp when the transfer was processed. */
  processedAt?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transferRazorpayTransfersApiProperties: s.Shape<TransferRazorpayTransfersApi> = {
  id: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity1RazorpayTransfersApiSchema)),
  source: s.optional(s.string()),
  recipient: s.optional(s.string()),
  amount: s.optional(s.int()),
  currency: s.optional(s.lazy(() => currency1Schema)),
  amountReversed: s.optional(s.int()),
  fees: s.optional(s.int()),
  tax: s.optional(s.int()),
  transferStatus: s.optional(s.lazy(() => transferStatusSchema)),
  settlementStatus: s.optional(s.lazy(() => settlementStatusSchema)),
  onHold: s.optional(s.boolean()),
  onHoldUntil: s.optional(s.int()),
  recipientSettlementId: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.string())),
  linkedAccountNotes: s.optional(s.array(s.string())),
  createdAt: s.optional(s.int()),
  processedAt: s.optional(s.int()),
  _keysMap: {
    amountReversed: "amount_reversed",
    transferStatus: "transfer_status",
    settlementStatus: "settlement_status",
    onHold: "on_hold",
    onHoldUntil: "on_hold_until",
    recipientSettlementId: "recipient_settlement_id",
    linkedAccountNotes: "linked_account_notes",
    createdAt: "created_at",
    processedAt: "processed_at",
  },
};

export const transferRazorpayTransfersApiInternalSchema: Schema<TransferRazorpayTransfersApi> =
  s.object<TransferRazorpayTransfersApi>(transferRazorpayTransfersApiProperties, {
    additionalProperties: s.json(),
  });

export const transferRazorpayTransfersApiSchema: Schema<TransferRazorpayTransfersApi> = s.lazySchema(() =>
  s.object<TransferRazorpayTransfersApi>(
    {
      ...transferRazorpayTransfersApiProperties,
      notes: s.optional(s.record(s.string(), s.string()).check(s.maxProperties(15))),
    },
    { additionalProperties: s.json() },
  ),
);
