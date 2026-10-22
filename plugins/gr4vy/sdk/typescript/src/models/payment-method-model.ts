import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { method12Schema, type Method12 } from "./method12.js";
import { paymentMethodStatus3Schema, type PaymentMethodStatus3 } from "./payment-method-status3.js";
import { Type52, type52Schema } from "./type52.js";
import { additionalSchemes1Schema, type AdditionalSchemes1 } from "./unions/additional-schemes1.js";
import { approvalUrl1Schema, type ApprovalUrl1 } from "./unions/approval-url1.js";
import { buyer15Schema, type Buyer15 } from "./unions/buyer15.js";
import { citLastUsedAt2Schema, type CitLastUsedAt2 } from "./unions/cit-last-used-at2.js";
import { country6Schema, type Country6 } from "./unions/country6.js";
import { currency10Schema, type Currency10 } from "./unions/currency10.js";
import { details1Schema, type Details1 } from "./unions/details1.js";
import { expirationDate2Schema, type ExpirationDate2 } from "./unions/expiration-date2.js";
import { externalIdentifier11Schema, type ExternalIdentifier11 } from "./unions/external-identifier11.js";
import { fingerprint1Schema, type Fingerprint1 } from "./unions/fingerprint1.js";
import { label1Schema, type Label1 } from "./unions/label1.js";
import { lastReplacedAtSchema, type LastReplacedAt } from "./unions/last-replaced-at.js";
import { lastUsedAt3Schema, type LastUsedAt3 } from "./unions/last-used-at3.js";
import { mode11Schema, type Mode11 } from "./unions/mode11.js";
import {
  schemeTransactionIdSchemeSchema,
  type SchemeTransactionIdScheme,
} from "./unions/scheme-transaction-id-scheme.js";
import { schemeTransactionIdSchema, type SchemeTransactionId } from "./unions/scheme-transaction-id.js";
import { scheme24Schema, type Scheme24 } from "./unions/scheme24.js";
import { transactionLinkIdSchema, type TransactionLinkId } from "./unions/transaction-link-id.js";

/**
 * Payment Method
 *
 * A stored payment method.
 */
export type PaymentMethodModel = {
  /** Always `payment-method`. @default Type52.PaymentMethod */
  type?: Type52;
  /**
   * The optional URL that the buyer needs to be redirected to to further authorize their payment.
   */
  approvalUrl?: ApprovalUrl1;
  /**
   * The 2-letter ISO code of the country this payment method can be used for. If this value is null
   * the payment method may be used in multiple countries.
   */
  country?: Country6;
  /**
   * The ISO-4217 currency code that this payment method can be used for. If this value is null the
   * payment method may be used for multiple currencies.
   */
  currency?: Currency10;
  /** Details for credit or debit card payment method. */
  details?: Details1;
  /** The expiration date for the payment method. */
  expirationDate?: ExpirationDate2;
  /** The unique hash derived from the payment method identifier (e.g. card number). */
  fingerprint?: Fingerprint1;
  /**
   * A label for the card or the account. For a paypal payment method this is the user's email
   * address. For a card it is the last 4 digits of the card.
   */
  label?: Label1;
  /** The date and time when this card was last replaced by the account updater. */
  lastReplacedAt?: LastReplacedAt;
  /** The type of this payment method. */
  method: Method12;
  /** The mode to use with this payment method. */
  mode?: Mode11;
  /** The scheme of the card. Only applies to card payments. */
  scheme?: Scheme24;
  /** The ID for the payment method. */
  id: string;
  /** The ID of the merchant account this buyer belongs to. */
  merchantAccountId: string;
  /**
   * Additional schemes of the card besides the primary scheme. Only applies to card payment
   * methods.
   */
  additionalSchemes?: AdditionalSchemes1;
  /**
   * The timestamp when this payment method was last used in a transaction for client initiated
   * transactions.
   */
  citLastUsedAt?: CitLastUsedAt2;
  /**
   * The number of times this payment method has been used in transactions for client initiated
   * transactions.
   */
  citUsageCount: number;
  /** Whether this card has a pending replacement that hasn't been applied yet. */
  hasReplacement: boolean;
  /** The timestamp when this payment method was last used in a transaction. */
  lastUsedAt?: LastUsedAt3;
  /** The number of times this payment method has been used in transactions. */
  usageCount: number;
  /** The scheme transaction identifier stored against this payment method. */
  schemeTransactionId: SchemeTransactionId;
  /** The scheme associated with scheme_transaction_id. Only applies to card payments. */
  schemeTransactionIdScheme: SchemeTransactionIdScheme;
  /** The transaction link identifier stored against this payment method. */
  transactionLinkId?: TransactionLinkId;
  /** The optional buyer for which this payment method has been stored. */
  buyer?: Buyer15;
  /**
   * The merchant reference that can be used to match the payment method against your own records.
   */
  externalIdentifier?: ExternalIdentifier11;
  /** The state of the payment method. */
  status: PaymentMethodStatus3;
  /** The date and time when this payment method was first created in our system. */
  createdAt: Date;
  /** The date and time when this payment method was last updated in our system. */
  updatedAt: Date;
};

export const paymentMethodModelSchema: Schema<PaymentMethodModel> = s.object<PaymentMethodModel>({
  type: s.defaulted(type52Schema, Type52.PaymentMethod),
  approvalUrl: s.optional(s.lazy(() => approvalUrl1Schema)),
  country: s.optional(s.lazy(() => country6Schema)),
  currency: s.optional(s.lazy(() => currency10Schema)),
  details: s.optional(s.lazy(() => details1Schema)),
  expirationDate: s.optional(s.lazy(() => expirationDate2Schema)),
  fingerprint: s.optional(s.lazy(() => fingerprint1Schema)),
  label: s.optional(s.lazy(() => label1Schema)),
  lastReplacedAt: s.optional(s.lazy(() => lastReplacedAtSchema)),
  method: method12Schema,
  mode: s.optional(s.lazy(() => mode11Schema)),
  scheme: s.optional(s.lazy(() => scheme24Schema)),
  id: s.string(),
  merchantAccountId: s.string(),
  additionalSchemes: s.optional(s.lazy(() => additionalSchemes1Schema)),
  citLastUsedAt: s.optional(s.lazy(() => citLastUsedAt2Schema)),
  citUsageCount: s.int(),
  hasReplacement: s.boolean(),
  lastUsedAt: s.optional(s.lazy(() => lastUsedAt3Schema)),
  usageCount: s.int(),
  schemeTransactionId: schemeTransactionIdSchema,
  schemeTransactionIdScheme: schemeTransactionIdSchemeSchema,
  transactionLinkId: s.optional(s.lazy(() => transactionLinkIdSchema)),
  buyer: s.optional(s.lazy(() => buyer15Schema)),
  externalIdentifier: s.optional(s.lazy(() => externalIdentifier11Schema)),
  status: paymentMethodStatus3Schema,
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  _keysMap: {
    approvalUrl: "approval_url",
    expirationDate: "expiration_date",
    lastReplacedAt: "last_replaced_at",
    merchantAccountId: "merchant_account_id",
    additionalSchemes: "additional_schemes",
    citLastUsedAt: "cit_last_used_at",
    citUsageCount: "cit_usage_count",
    hasReplacement: "has_replacement",
    lastUsedAt: "last_used_at",
    usageCount: "usage_count",
    schemeTransactionId: "scheme_transaction_id",
    schemeTransactionIdScheme: "scheme_transaction_id_scheme",
    transactionLinkId: "transaction_link_id",
    externalIdentifier: "external_identifier",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
