import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { refundStatus2Schema, type RefundStatus2 } from "./refund-status2.js";
import { refundTargetType3Schema, type RefundTargetType3 } from "./refund-target-type3.js";
import { Type62, type62Schema } from "./type62.js";
import { creator11Schema, type Creator11 } from "./unions/creator11.js";
import { errorCodeSchema, type ErrorCode } from "./unions/error-code.js";
import { externalIdentifier29Schema, type ExternalIdentifier29 } from "./unions/external-identifier29.js";
import {
  paymentServiceRefundIdSchema,
  type PaymentServiceRefundId,
} from "./unions/payment-service-refund-id.js";
import { rawResponseCodeSchema, type RawResponseCode } from "./unions/raw-response-code.js";
import {
  rawResponseDescription1Schema,
  type RawResponseDescription1,
} from "./unions/raw-response-description1.js";
import { reasonSchema, type Reason } from "./unions/reason.js";
import { settledCurrencySchema, type SettledCurrency } from "./unions/settled-currency.js";
import { targetIdSchema, type TargetId } from "./unions/target-id.js";
import {
  transactionExternalIdentifier1Schema,
  type TransactionExternalIdentifier1,
} from "./unions/transaction-external-identifier1.js";

export type Refund = {
  /** Always `refund`. @default Type62.Refund */
  type?: Type62;
  /** The unique identifier for the refund. */
  id: string;
  /** The ID of the transaction associated with this refund. */
  transactionId: string;
  /** The payment service's unique ID for the refund. */
  paymentServiceRefundId?: PaymentServiceRefundId;
  /** The status of the refund. */
  status: RefundStatus2;
  /**
   * The ISO 4217 currency code for this refund. Will always match that of the associated
   * transaction.
   */
  currency: string;
  /** The amount of this refund, in the smallest currency unit (for example, cents or pence). */
  amount: number;
  /** The reason for this refund. Could be a multiline string. */
  reason?: Reason;
  /** The type of the instrument that was refunded. */
  targetType: RefundTargetType3;
  /**
   * The optional ID of the instrument that was refunded. This may be `null` if the instrument was
   * not stored.
   */
  targetId?: TargetId;
  /**
   * The base62 encoded refund ID. This represents a shorter version of this refund's `id` which is
   * sent to payment services, anti-fraud services, and other connectors. You can use this ID to
   * reconcile a payment service's refund against our system.
   */
  reconciliationId: string;
  /** An external identifier that can be used to match the refund against your own records. */
  externalIdentifier?: ExternalIdentifier29;
  /**
   * The base62 encoded transaction ID. This represents a shorter version of the related
   * transaction's `id` which is sent to payment services, anti-fraud services, and other
   * connectors. You can use this ID to reconcile a payment service's transaction against our
   * system.
   */
  transactionReconciliationId: string;
  /** An external identifier that can be used to match the transaction against your own records. */
  transactionExternalIdentifier?: TransactionExternalIdentifier1;
  /** The date this refund was created at. */
  createdAt: Date;
  /** The date this refund was last updated at. */
  updatedAt: Date;
  /** The user that created this resource */
  creator?: Creator11;
  /** The standardized error code set by Gr4vy. */
  errorCode?: ErrorCode;
  /**
   * This is the response code received from the payment service. This can be set to any value and
   * is not standardized across different payment services.
   */
  rawResponseCode?: RawResponseCode;
  /**
   * This is the response description received from the payment service. This can be set to any
   * value and is not standardized across different payment services.
   */
  rawResponseDescription?: RawResponseDescription1;
  /** The ISO 4217 currency code of this refund's settlement. */
  settledCurrency?: SettledCurrency;
  /**
   * The net amount settled for this refund, in the smallest currency unit (for example, cents or
   * pence).
   *
   * @default 0
   */
  settledAmount?: number;
  /** Indicates whether this refund has been settled. */
  settled: boolean;
};

export const refundSchema: Schema<Refund> = s.object<Refund>({
  type: s.defaulted(type62Schema, Type62.Refund),
  id: s.string(),
  transactionId: s.string(),
  paymentServiceRefundId: s.optional(s.lazy(() => paymentServiceRefundIdSchema)),
  status: refundStatus2Schema,
  currency: s.string(),
  amount: s.int(),
  reason: s.optional(s.lazy(() => reasonSchema)),
  targetType: refundTargetType3Schema,
  targetId: s.optional(s.lazy(() => targetIdSchema)),
  reconciliationId: s.string(),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier29Schema)),
  transactionReconciliationId: s.string(),
  transactionExternalIdentifier: s.optional(s.lazy(() => transactionExternalIdentifier1Schema)),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  creator: s.optional(s.lazy(() => creator11Schema)),
  errorCode: s.optional(s.lazy(() => errorCodeSchema)),
  rawResponseCode: s.optional(s.lazy(() => rawResponseCodeSchema)),
  rawResponseDescription: s.optional(s.lazy(() => rawResponseDescription1Schema)),
  settledCurrency: s.optional(s.lazy(() => settledCurrencySchema)),
  settledAmount: s.defaulted(s.int(), 0),
  settled: s.boolean(),
  _keysMap: {
    transactionId: "transaction_id",
    paymentServiceRefundId: "payment_service_refund_id",
    targetType: "target_type",
    targetId: "target_id",
    reconciliationId: "reconciliation_id",
    externalIdentifier: "external_identifier",
    transactionReconciliationId: "transaction_reconciliation_id",
    transactionExternalIdentifier: "transaction_external_identifier",
    createdAt: "created_at",
    updatedAt: "updated_at",
    errorCode: "error_code",
    rawResponseCode: "raw_response_code",
    rawResponseDescription: "raw_response_description",
    settledCurrency: "settled_currency",
    settledAmount: "settled_amount",
  },
});
