import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeRazorpaySettlementsApiSchema,
  type TypeRazorpaySettlementsApi,
} from "./type-razorpay-settlements-api.js";

/** A single transaction line item in the settlement reconciliation report. */
export type SettlementReconRecord = {
  /** ID of the transaction entity (payment, refund, etc.). */
  entityId?: string;
  settlementId?: string;
  orderId?: string;
  paymentId?: string;
  disputeId?: string;
  type?: TypeRazorpaySettlementsApi;
  amount?: number;
  debit?: number;
  credit?: number;
  fee?: number;
  tax?: number;
  currency?: string;
  method?: string;
  description?: string;
  notes?: string;
  settled?: boolean;
  onHold?: boolean;
  createdAt?: number;
  settledAt?: number;
  postedAt?: number;
  cardNetwork?: string;
  cardIssuer?: string;
  cardType?: string;
  settlementUtr?: string;
  orderReceipt?: string;
  creditType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const settlementReconRecordSchema: Schema<SettlementReconRecord> = s.object<SettlementReconRecord>(
  {
    entityId: s.optional(s.string()),
    settlementId: s.optional(s.string()),
    orderId: s.optional(s.string()),
    paymentId: s.optional(s.string()),
    disputeId: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeRazorpaySettlementsApiSchema)),
    amount: s.optional(s.int()),
    debit: s.optional(s.int()),
    credit: s.optional(s.int()),
    fee: s.optional(s.int()),
    tax: s.optional(s.int()),
    currency: s.optional(s.string()),
    method: s.optional(s.string()),
    description: s.optional(s.string()),
    notes: s.optional(s.string()),
    settled: s.optional(s.boolean()),
    onHold: s.optional(s.boolean()),
    createdAt: s.optional(s.int()),
    settledAt: s.optional(s.int()),
    postedAt: s.optional(s.int()),
    cardNetwork: s.optional(s.string()),
    cardIssuer: s.optional(s.string()),
    cardType: s.optional(s.string()),
    settlementUtr: s.optional(s.string()),
    orderReceipt: s.optional(s.string()),
    creditType: s.optional(s.string()),
    _keysMap: {
      entityId: "entity_id",
      settlementId: "settlement_id",
      orderId: "order_id",
      paymentId: "payment_id",
      disputeId: "dispute_id",
      onHold: "on_hold",
      createdAt: "created_at",
      settledAt: "settled_at",
      postedAt: "posted_at",
      cardNetwork: "card_network",
      cardIssuer: "card_issuer",
      cardType: "card_type",
      settlementUtr: "settlement_utr",
      orderReceipt: "order_receipt",
      creditType: "credit_type",
    },
  },
  { additionalProperties: s.json() },
);
