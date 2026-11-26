import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fundingAccount3Schema, type FundingAccount3 } from "./funding-account3.js";
import { invoicePaySchema, type InvoicePay } from "./invoice-pay.js";
import {
  invoicePaymentTypeResponseSchema,
  type InvoicePaymentTypeResponse,
} from "./invoice-payment-type-response.js";
import { receivablesAccount1Schema, type ReceivablesAccount1 } from "./receivables-account1.js";
import {
  recordInvoicePaymentStatusSchema,
  type RecordInvoicePaymentStatus,
} from "./record-invoice-payment-status.js";

/** Receivable Payment response. */
export type ReceivablePaymentResponseDto = {
  /** BILL-generated ID of the received payment. The value begins with `0rp`. */
  id?: string;
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId?: string;
  /** List of invoice payments */
  invoicePayments?: InvoicePay[];
  /**
   * Invoice payment description. This value is included in the check memo or in the bank descriptor
   * for electronic payments.
   */
  description?: string;
  /** Received payment date. Funds are withdrawn from the customer bank account on this date. */
  paymentDate?: string;
  fundingAccount?: FundingAccount3;
  receivablesAccount?: ReceivablesAccount1;
  /**
   * Received payment amount. For a payment in an international currency (not USD), this value is in
   * the local currency.
   */
  amount: number;
  /**
   * Unapplied received payment amount. This value is available for an overpayment, double payment,
   * or customer payment not currently linked to an invoice.
   */
  unappliedAmount?: number;
  /** Convenience fee charged to the customer */
  convenienceFeeAmount?: number;
  receivablesType?: InvoicePaymentTypeResponse;
  status?: RecordInvoicePaymentStatus;
  /** Received payment reference number */
  referenceNumber?: string;
  /**
   * Information about how the received payment is recorded.
   * * `true`: The payment is received with BILL
   * * `false`: The payment is received outside BILL, and then recorded in BILL
   */
  onlinePayment?: boolean;
  /** Received payment created date and time */
  createdTime?: Date;
  /** Received payment updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const receivablePaymentResponseDtoSchema: Schema<ReceivablePaymentResponseDto> =
  s.object<ReceivablePaymentResponseDto>(
    {
      id: s.optional(s.string()),
      customerId: s.optional(s.string()),
      invoicePayments: s.optional(s.array(s.lazy(() => invoicePaySchema))),
      description: s.optional(s.string()),
      paymentDate: s.optional(s.dateOnly()),
      fundingAccount: s.optional(s.lazy(() => fundingAccount3Schema)),
      receivablesAccount: s.optional(s.lazy(() => receivablesAccount1Schema)),
      amount: s.float64(),
      unappliedAmount: s.optional(s.float64()),
      convenienceFeeAmount: s.optional(s.float64()),
      receivablesType: s.optional(s.lazy(() => invoicePaymentTypeResponseSchema)),
      status: s.optional(s.lazy(() => recordInvoicePaymentStatusSchema)),
      referenceNumber: s.optional(s.string()),
      onlinePayment: s.optional(s.boolean()),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
