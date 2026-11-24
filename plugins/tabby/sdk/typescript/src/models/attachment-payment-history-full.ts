import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentOptionSchema, type PaymentOption } from "./payment-option.js";

export type AttachmentPaymentHistoryFull = {
  /** Unique name / number to identify the specific customer account */
  uniqueAccountIdentifier?: string;
  /** One of - card / direct banking / COD (cash) / other */
  paymentOption?: PaymentOption;
  numberPaidPurchases?: number;
  totalAmountPaidPurchases?: number;
  /** ISO 8601 date e.g. 2018-10-17 */
  dateOfLastPaidPurchase?: string;
  /** ISO 8601 date e.g. 2018-10-17 */
  dateOfFirstPaidPurchase?: string;
  countPaidPurchasesLastMonth?: number;
  amountPaidPurchasesLastMonth?: number;
  maxPaidAmountFor1Purchase?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentPaymentHistoryFullSchema: Schema<AttachmentPaymentHistoryFull> =
  s.object<AttachmentPaymentHistoryFull>(
    {
      uniqueAccountIdentifier: s.optional(s.string()),
      paymentOption: s.optional(s.lazy(() => paymentOptionSchema)),
      numberPaidPurchases: s.optional(s.float64()),
      totalAmountPaidPurchases: s.optional(s.float64()),
      dateOfLastPaidPurchase: s.optional(s.dateOnly()),
      dateOfFirstPaidPurchase: s.optional(s.dateOnly()),
      countPaidPurchasesLastMonth: s.optional(s.float64()),
      amountPaidPurchasesLastMonth: s.optional(s.float64()),
      maxPaidAmountFor1Purchase: s.optional(s.float64()),
      _keysMap: {
        uniqueAccountIdentifier: "unique_account_identifier",
        paymentOption: "payment_option",
        numberPaidPurchases: "number_paid_purchases",
        totalAmountPaidPurchases: "total_amount_paid_purchases",
        dateOfLastPaidPurchase: "date_of_last_paid_purchase",
        dateOfFirstPaidPurchase: "date_of_first_paid_purchase",
        countPaidPurchasesLastMonth: "count_paid_purchases_last_month",
        amountPaidPurchasesLastMonth: "amount_paid_purchases_last_month",
        maxPaidAmountFor1Purchase: "max_paid_amount_for_1purchase",
      },
    },
    { additionalProperties: s.json() },
  );
