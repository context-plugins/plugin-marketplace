import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billPayInternalSchema, billPaySchema, type BillPay } from "./bill-pay.js";
import { fundingAccountSchema, type FundingAccount } from "./funding-account.js";
import { processingOptions2Schema, type ProcessingOptions2 } from "./processing-options2.js";

/** Create a bulk payment */
export type BulkPaymentRequestDto = {
  /**
   * BILL-generated ID of the vendor to be paid. The value begins with `009`.
   * * If `vendorId` is set, it must match each bill’s vendor ID.
   * * Do not set `vendorId` when you are paying multiple vendors with one request.
   */
  vendorId?: string;
  /**
   * Bill payment description. This value is included in the check memo or in the bank descriptor
   * for electronic payments.
   */
  description?: string;
  /**
   * Payment process date in the `yyyy-MM-dd` format. On this date, BILL starts processing the
   * payment and starts withdrawing funds from the sender's funding account.
   *
   * When the vendor bill currency is not `USD` (For example, `EUR`), the payment `processDate` for
   * this vendor must be the next US business day.
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
   * /v3/payments/exchange-rate` or `POST /v3/payments/exchange-rate` (for multiple international
   * vendors).
   */
  exchangeRateBatchId?: number;
  fundingAccount: FundingAccount;
  payments?: BillPay[];
  processingOptions?: ProcessingOptions2;
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bulkPaymentRequestDtoProperties: s.Shape<BulkPaymentRequestDto> = {
  vendorId: s.optional(s.string()),
  description: s.optional(s.string()),
  processDate: s.optional(s.dateOnly()),
  exchangeRateBatchId: s.optional(s.int()),
  fundingAccount: fundingAccountSchema,
  payments: s.optional(s.array(s.lazy(() => billPayInternalSchema))),
  processingOptions: s.optional(s.lazy(() => processingOptions2Schema)),
  transactionNumber: s.optional(s.string()),
  cardFundingPurpose: s.optional(s.string()),
};

export const bulkPaymentRequestDtoInternalSchema: Schema<BulkPaymentRequestDto> =
  s.object<BulkPaymentRequestDto>(bulkPaymentRequestDtoProperties, { additionalProperties: s.json() });

export const bulkPaymentRequestDtoSchema: Schema<BulkPaymentRequestDto> = s.lazySchema(() =>
  s.object<BulkPaymentRequestDto>(
    {
      ...bulkPaymentRequestDtoProperties,
      description: s.optional(s.string().check(s.maxLength(70))),
      payments: s.optional(s.array(s.lazy(() => billPaySchema))),
      transactionNumber: s.optional(s.string().check(s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);
