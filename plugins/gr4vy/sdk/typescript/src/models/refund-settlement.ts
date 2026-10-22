import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type63, type63Schema } from "./type63.js";
import { exchangeRateSchema, type ExchangeRate } from "./unions/exchange-rate.js";
import { interchangeSchema, type Interchange } from "./unions/interchange.js";
import { markupSchema, type Markup } from "./unions/markup.js";
import { schemeFeeSchema, type SchemeFee } from "./unions/scheme-fee.js";

/** A settlement record for a refund on a transaction. */
export type RefundSettlement = {
  /** The unique identifier for the record. */
  id: string;
  /** The merchant account this record belongs to. */
  merchantAccountId: string;
  /** The date and time the record was created, in ISO 8601 format. */
  createdAt: Date;
  /** The date and time the record was last updated, in ISO 8601 format. */
  updatedAt: Date;
  /** The date and time the record was posted, in ISO 8601 format. */
  postedAt: Date;
  /** The date and time the record was ingested, in ISO 8601 format. */
  ingestedAt: Date;
  /** ISO 4217 currency code. */
  currency: string;
  /** The total amount in the smallest currency unit (e.g. cents). */
  amount: number;
  /** The exchange rate, if applicable. */
  exchangeRate?: ExchangeRate;
  /** The commission amount deducted in the smallest currency unit. */
  commission: number;
  /** The interchange fee, if applicable, in the smallest currency unit. */
  interchange?: Interchange;
  /** The markup fee, if applicable, in the smallest currency unit. */
  markup?: Markup;
  /** The scheme fee, if applicable, in the smallest currency unit. */
  schemeFee?: SchemeFee;
  /** The report ID from the payment service. */
  paymentServiceReportId: string;
  /** List of file IDs for the payment service report. */
  paymentServiceReportFileIds: string[];
  /** The transaction this record is associated with. */
  transactionId: string;
  /** Always `refund-settlement`. @default Type63.RefundSettlement */
  type?: Type63;
  /** The refund this settlement is associated with. */
  refundId: string;
};

export const refundSettlementSchema: Schema<RefundSettlement> = s.object<RefundSettlement>({
  id: s.string(),
  merchantAccountId: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  postedAt: s.dateTime(),
  ingestedAt: s.dateTime(),
  currency: s.string(),
  amount: s.int(),
  exchangeRate: s.optional(s.lazy(() => exchangeRateSchema)),
  commission: s.int(),
  interchange: s.optional(s.lazy(() => interchangeSchema)),
  markup: s.optional(s.lazy(() => markupSchema)),
  schemeFee: s.optional(s.lazy(() => schemeFeeSchema)),
  paymentServiceReportId: s.string(),
  paymentServiceReportFileIds: s.array(s.string()),
  transactionId: s.string(),
  type: s.defaulted(type63Schema, Type63.RefundSettlement),
  refundId: s.string(),
  _keysMap: {
    merchantAccountId: "merchant_account_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    postedAt: "posted_at",
    ingestedAt: "ingested_at",
    exchangeRate: "exchange_rate",
    schemeFee: "scheme_fee",
    paymentServiceReportId: "payment_service_report_id",
    paymentServiceReportFileIds: "payment_service_report_file_ids",
    transactionId: "transaction_id",
    refundId: "refund_id",
  },
});
