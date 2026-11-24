import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { classificationsSchema, type Classifications } from "./classifications.js";
import { disbursementStatusSchema, type DisbursementStatus } from "./disbursement-status.js";
import { disbursementTypeSchema, type DisbursementType } from "./disbursement-type.js";
import { paymentSingleStatus2Schema, type PaymentSingleStatus2 } from "./payment-single-status2.js";
import { paymentStatusSchema, type PaymentStatus } from "./payment-status.js";
import {
  recordBillPayResponseDtoSchema,
  type RecordBillPayResponseDto,
} from "./record-bill-pay-response-dto.js";

/** Record offline payment response dto. */
export type RecordPaymentResponseDto = {
  /** BILL-generated ID of the payment. The value begins with `stp`. */
  id?: string;
  /** BILL-generated ID of the vendor. The value begins with `009`. */
  vendorId?: string;
  /** BILL-generated ID of the bill. The value begins with `00n`. */
  billId?: string;
  /** List of bill payments */
  billPayments?: RecordBillPayResponseDto[];
  /** Payment description */
  description?: string;
  /** Payment process date. The value is in the `yyyy-MM-dd` format. */
  processDate?: string;
  /**
   * Payment amount. For a payment in an international currency (not USD), this value is in the
   * local currency.
   */
  amount?: number;
  /** BILL-generated alphanumeric payment identification value */
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
   *
   * This field is set as `false` for the Record AP payment operation.
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
  disbursementStatus?: DisbursementStatus;
  singleStatus?: PaymentSingleStatus2;
  /**
   * Set as `true` to set the payment check as printable in your accounting system. Use this field
   * only for check payments.
   */
  toPrintCheck?: boolean;
  classifications?: Classifications;
  /**
   * Payment reference ID in your accounting system. Set this field with payment information, such
   * as check number.
   */
  syncReference?: string;
  /** Set as `true` to sync the bill payment with your accounting system */
  allowExport?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordPaymentResponseDtoSchema: Schema<RecordPaymentResponseDto> =
  s.object<RecordPaymentResponseDto>(
    {
      id: s.optional(s.string()),
      vendorId: s.optional(s.string()),
      billId: s.optional(s.string()),
      billPayments: s.optional(s.array(s.lazy(() => recordBillPayResponseDtoSchema))),
      description: s.optional(s.string()),
      processDate: s.optional(s.dateOnly()),
      amount: s.optional(s.float64()),
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
      disbursementStatus: s.optional(s.lazy(() => disbursementStatusSchema)),
      singleStatus: s.optional(s.lazy(() => paymentSingleStatus2Schema)),
      toPrintCheck: s.optional(s.boolean()),
      classifications: s.optional(s.lazy(() => classificationsSchema)),
      syncReference: s.optional(s.string()),
      allowExport: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
