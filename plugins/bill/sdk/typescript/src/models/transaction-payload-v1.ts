import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { currencyDataSchema, type CurrencyData } from "./currency-data.js";
import { customFieldSchema, type CustomField } from "./custom-field.js";
import { receiptStatusTypeSchema, type ReceiptStatusType } from "./receipt-status-type.js";
import { transactionTypeSchema, type TransactionType } from "./transaction-type.js";

/** Spend Transaction transformed payload. */
export type TransactionPayloadV1 = {
  uuid?: string;
  fees?: number;
  foreignExchangeFee?: number;
  /** TransactionType. */
  transactionType?: TransactionType;
  parentTransactionUuid?: string;
  userUuid?: string;
  rawMerchantName?: string;
  merchantName?: string;
  budgetUuid?: string;
  originalAuthTransactionUuid?: string;
  occurredTime?: Date;
  updatedTime?: Date;
  authorizedTime?: Date;
  complete?: boolean;
  customFields?: CustomField[];
  /** CurrencyData class for Spend \& Expense Transactions. */
  currencyData?: CurrencyData;
  amount?: number;
  /** ReceiptStatusType enum for Spend \& Expense Transactions. */
  receiptStatus?: ReceiptStatusType;
  cardUuid?: string;
  companyUuid?: string;
  merchantCategoryCode?: string;
  declineReason?: string;
  declineInternalReasonCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transactionPayloadV1Schema: Schema<TransactionPayloadV1> = s.object<TransactionPayloadV1>(
  {
    uuid: s.optional(s.string()),
    fees: s.optional(s.float64()),
    foreignExchangeFee: s.optional(s.float64()),
    transactionType: s.optional(s.lazy(() => transactionTypeSchema)),
    parentTransactionUuid: s.optional(s.string()),
    userUuid: s.optional(s.string()),
    rawMerchantName: s.optional(s.string()),
    merchantName: s.optional(s.string()),
    budgetUuid: s.optional(s.string()),
    originalAuthTransactionUuid: s.optional(s.string()),
    occurredTime: s.optional(s.dateTime()),
    updatedTime: s.optional(s.dateTime()),
    authorizedTime: s.optional(s.dateTime()),
    complete: s.optional(s.boolean()),
    customFields: s.optional(s.array(s.lazy(() => customFieldSchema))),
    currencyData: s.optional(s.lazy(() => currencyDataSchema)),
    amount: s.optional(s.float64()),
    receiptStatus: s.optional(s.lazy(() => receiptStatusTypeSchema)),
    cardUuid: s.optional(s.string()),
    companyUuid: s.optional(s.string()),
    merchantCategoryCode: s.optional(s.string()),
    declineReason: s.optional(s.string()),
    declineInternalReasonCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
