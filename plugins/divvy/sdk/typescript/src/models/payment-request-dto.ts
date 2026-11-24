import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fundingAccountSchema, type FundingAccount } from "./funding-account.js";
import {
  paymentPurposeInternalSchema,
  paymentPurposeSchema,
  type PaymentPurpose,
} from "./payment-purpose.js";
import {
  paymentVendorCreditRequestDtoInternalSchema,
  paymentVendorCreditRequestDtoSchema,
  type PaymentVendorCreditRequestDto,
} from "./payment-vendor-credit-request-dto.js";
import {
  processingOptionsBillV3PaymentsApiSchema,
  type ProcessingOptionsBillV3PaymentsApi,
} from "./processing-options-bill-v3-payments-api.js";

/** Create a payment */
export type PaymentRequestDto = {
  /**
   * BILL-generated ID of the vendor to be paid. The value begins with `009`.
   * * If `vendorId` is set, it must match your bill’s vendor ID.
   * * If `vendorId` is not set, the bill’s `vendorId` is automatically set.
   */
  vendorId?: string;
  /**
   * BILL-generated ID of the bill to be paid. The value begins with `00n`. If `createBill` is
   * `true`, do not set `billId` in your payment request.
   */
  billId?: string;
  /**
   * Bill payment description. This value is included in the check memo or in the bank descriptor
   * for electronic payments.
   */
  description?: string;
  /**
   * Payment process date in the `yyyy-MM-dd` format. On this date, BILL starts processing the
   * payment and starts withdrawing funds from the sender's funding account.
   *
   * If the funding account `type` is set as `WALLET` or `AP_CARD`, `processDate` is required. For
   * other funding account types, if `processDate` is not set, the date is automatically set as the
   * next US business day.
   *
   * **Note**: When you add a vendor bank account in the production environment, BILL requires 2
   * business days to complete a one-time verification of the bank account. To pay such a vendor,
   * you must set a `processDate` that is 2 business days from the current date.
   */
  processDate?: string;
  /**
   * Exchange rate batch ID. This field is required for paying international vendors when the vendor
   * bill currency is not `USD`.
   *
   * Get the current BILL exchange rate and exchange rate batch ID with `GET
   * /v3/payments/exchange-rate`.
   */
  exchangeRateBatchId?: number;
  fundingAccount: FundingAccount;
  /**
   * Payment amount. For a payment in an international currency (not USD), this value is in the
   * local currency.
   *
   * **Note**: You cannot overpay a bill.
   */
  amount: number;
  processingOptions: ProcessingOptionsBillV3PaymentsApi;
  paymentPurpose?: PaymentPurpose;
  /**
   * Payment transaction reference used as an external identifier.
   *
   * You can set this field as a unique alphanumeric value for your system to track the payment
   * transaction. The value must be 50 characters or fewer. If you do not set `transactionNumber`,
   * BILL sets this field as a unique alphanumeric payment identification value.
   */
  transactionNumber?: string;
  /**
   * Card funding purpose. This field is required for the `CARD_ACCOUNT` funding account `type` if
   * BILL cannot identify the vendor industry.
   *
   * See [Get card funding purpose](https://developer.bill.com/reference/listcardfundingpurposes)
   * for more information.
   */
  cardFundingPurpose?: string;
  /**
   * Vendor credits applied to the bill payment. To edit the vendor credit amount applied to the
   * bill, set the same vendor credit `id` in your payment request. To apply an additional vendor
   * credit to the bill, set the new vendor credit `id` in your payment request.
   */
  vendorCredits?: PaymentVendorCreditRequestDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentRequestDtoProperties: s.Shape<PaymentRequestDto> = {
  vendorId: s.optional(s.string()),
  billId: s.optional(s.string()),
  description: s.optional(s.string()),
  processDate: s.optional(s.dateOnly()),
  exchangeRateBatchId: s.optional(s.int()),
  fundingAccount: fundingAccountSchema,
  amount: s.float64(),
  processingOptions: processingOptionsBillV3PaymentsApiSchema,
  paymentPurpose: s.optional(s.lazy(() => paymentPurposeInternalSchema)),
  transactionNumber: s.optional(s.string()),
  cardFundingPurpose: s.optional(s.string()),
  vendorCredits: s.optional(s.array(s.lazy(() => paymentVendorCreditRequestDtoInternalSchema))),
};

export const paymentRequestDtoInternalSchema: Schema<PaymentRequestDto> = s.object<PaymentRequestDto>(
  paymentRequestDtoProperties,
  { additionalProperties: s.json() },
);

export const paymentRequestDtoSchema: Schema<PaymentRequestDto> = s.lazySchema(() =>
  s.object<PaymentRequestDto>(
    {
      ...paymentRequestDtoProperties,
      description: s.optional(s.string().check(s.maxLength(70))),
      paymentPurpose: s.optional(s.lazy(() => paymentPurposeSchema)),
      transactionNumber: s.optional(s.string().check(s.maxLength(50))),
      vendorCredits: s.optional(s.array(s.lazy(() => paymentVendorCreditRequestDtoSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
