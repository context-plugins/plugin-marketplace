import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billPaymentSchema, type BillPayment } from "./bill-payment.js";
import { disbursementInfo1Schema, type DisbursementInfo1 } from "./disbursement-info1.js";
import { disbursementStatusSchema, type DisbursementStatus } from "./disbursement-status.js";
import { disbursementTypeSchema, type DisbursementType } from "./disbursement-type.js";
import { fundingAccount1Schema, type FundingAccount1 } from "./funding-account1.js";
import { paymentPurpose1Schema, type PaymentPurpose1 } from "./payment-purpose1.js";
import {
  paymentSingleStatus2BillV3PaymentsApiSchema,
  type PaymentSingleStatus2BillV3PaymentsApi,
} from "./payment-single-status2-bill-v3-payments-api.js";
import { paymentStatusSchema, type PaymentStatus } from "./payment-status.js";
import { processingOptions1Schema, type ProcessingOptions1 } from "./processing-options1.js";
import { voidInfoSchema, type VoidInfo } from "./void-info.js";

/** Payments response. */
export type PaymentResponseDto = {
  /** BILL-generated ID of the payment. The value begins with `stp`. */
  id?: string;
  /** BILL-generated ID of the vendor to be paid. The value begins with `009`. */
  vendorId?: string;
  /** Vendor name */
  vendorName?: string;
  /** BILL-generated ID of the bill to be paid. The value begins with `00n`. */
  billId?: string;
  /**
   * List of bill payments. When a payment is applied to a bill, the bill payment is identified by a
   * bill payment `id`. The value begins with `blp`.
   */
  billPayments?: BillPayment[];
  /**
   * Bill payment description. This value is included in the check memo or in the bank descriptor
   * for electronic payments.
   */
  description?: string;
  /**
   * Payment process date in the `yyyy-MM-dd` format. On this date, BILL starts processing the
   * payment and starts withdrawing funds from the sender's funding account.
   */
  processDate?: string;
  fundingAccount?: FundingAccount1;
  /**
   * Payment amount. For a payment in an international currency (not USD), this value is in the
   * local currency.
   */
  amount: number;
  processingOptions?: ProcessingOptions1;
  /**
   * Payment transaction reference used as an external identifier.
   *
   * You can set this field as a unique alphanumeric value for your system to track the payment
   * transaction. The value must be 50 characters or fewer. If you do not set `transactionNumber`,
   * BILL sets this field as a unique alphanumeric payment identification value.
   */
  transactionNumber?: string;
  /** BILL-generated bill payment confirmation value */
  confirmationNumber?: string;
  status?: PaymentStatus;
  /** Exchange rate for the payment in an international currency (not USD) */
  exchangeRate?: number;
  /** Payment amount in USD */
  fundingAmount?: number;
  /**
   * Payment source.
   * * `true`: Payment is made with BILL (online)
   * * `false`: Payment is made outside BILL and then recorded in BILL (offline)
   */
  onlinePayment?: boolean;
  disbursementType?: DisbursementType;
  /** Remittance email address set for the vendor */
  remittanceEmail?: string;
  /** Payment created date and time */
  createdTime?: Date;
  /** Payment updated date and time */
  updatedTime?: Date;
  /** BILL-generated ID of the user that created the payment. The value begins with `006`. */
  createdBy?: string;
  /** Void request information */
  voidInfo?: VoidInfo[];
  disbursementStatus?: DisbursementStatus;
  disbursementInfo?: DisbursementInfo1;
  paymentPurpose?: PaymentPurpose1;
  /** Card funding purpose */
  cardFundingPurpose?: string;
  /**
   * This field is set as `true` if a cancel payment request is submitted.
   *
   * **Note**: If the payment is cancelled, the payment `status` is set as `CANCELLED`.
   */
  cancelRequestSubmitted?: boolean;
  singleStatus?: PaymentSingleStatus2BillV3PaymentsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentResponseDtoSchema: Schema<PaymentResponseDto> = s.object<PaymentResponseDto>(
  {
    id: s.optional(s.string()),
    vendorId: s.optional(s.string()),
    vendorName: s.optional(s.string()),
    billId: s.optional(s.string()),
    billPayments: s.optional(s.array(s.lazy(() => billPaymentSchema))),
    description: s.optional(s.string()),
    processDate: s.optional(s.dateOnly()),
    fundingAccount: s.optional(s.lazy(() => fundingAccount1Schema)),
    amount: s.float64(),
    processingOptions: s.optional(s.lazy(() => processingOptions1Schema)),
    transactionNumber: s.optional(s.string()),
    confirmationNumber: s.optional(s.string()),
    status: s.optional(s.lazy(() => paymentStatusSchema)),
    exchangeRate: s.optional(s.float64()),
    fundingAmount: s.optional(s.float64()),
    onlinePayment: s.optional(s.boolean()),
    disbursementType: s.optional(s.lazy(() => disbursementTypeSchema)),
    remittanceEmail: s.optional(s.string()),
    createdTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    createdBy: s.optional(s.string()),
    voidInfo: s.optional(s.array(s.lazy(() => voidInfoSchema))),
    disbursementStatus: s.optional(s.lazy(() => disbursementStatusSchema)),
    disbursementInfo: s.optional(s.lazy(() => disbursementInfo1Schema)),
    paymentPurpose: s.optional(s.lazy(() => paymentPurpose1Schema)),
    cardFundingPurpose: s.optional(s.string()),
    cancelRequestSubmitted: s.optional(s.boolean()),
    singleStatus: s.optional(s.lazy(() => paymentSingleStatus2BillV3PaymentsApiSchema)),
  },
  { additionalProperties: s.json() },
);
