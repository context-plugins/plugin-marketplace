import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { method12Schema, type Method12 } from "./method12.js";
import { Type52, type52Schema } from "./type52.js";
import { approvalTarget2Schema, type ApprovalTarget2 } from "./unions/approval-target2.js";
import { approvalUrl1Schema, type ApprovalUrl1 } from "./unions/approval-url1.js";
import { country6Schema, type Country6 } from "./unions/country6.js";
import { currency10Schema, type Currency10 } from "./unions/currency10.js";
import { details1Schema, type Details1 } from "./unions/details1.js";
import { expirationDate2Schema, type ExpirationDate2 } from "./unions/expiration-date2.js";
import { externalIdentifier26Schema, type ExternalIdentifier26 } from "./unions/external-identifier26.js";
import { fingerprint1Schema, type Fingerprint1 } from "./unions/fingerprint1.js";
import { id3Schema, type Id3 } from "./unions/id3.js";
import { label1Schema, type Label1 } from "./unions/label1.js";
import { lastReplacedAtSchema, type LastReplacedAt } from "./unions/last-replaced-at.js";
import { mode11Schema, type Mode11 } from "./unions/mode11.js";
import {
  paymentAccountReferenceSchema,
  type PaymentAccountReference,
} from "./unions/payment-account-reference.js";
import { scheme24Schema, type Scheme24 } from "./unions/scheme24.js";

/** The payment method used for this payout. */
export type TransactionPaymentMethod2 = {
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
  /** The ID of the payment method. */
  id?: Id3;
  /**
   * The browser target that an approval URL must be opened in. If any or null, then there is no
   * specific requirement.
   */
  approvalTarget?: ApprovalTarget2;
  /**
   * An external identifier that can be used to match the payment method against your own records.
   */
  externalIdentifier?: ExternalIdentifier26;
  /**
   * The payment account reference (PAR) returned by the card scheme. This is a unique reference to
   * the underlying account that has been used to fund this payment method.
   */
  paymentAccountReference?: PaymentAccountReference;
};

export const transactionPaymentMethod2Schema: Schema<TransactionPaymentMethod2> =
  s.object<TransactionPaymentMethod2>({
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
    id: s.optional(s.lazy(() => id3Schema)),
    approvalTarget: s.optional(s.lazy(() => approvalTarget2Schema)),
    externalIdentifier: s.optional(s.lazy(() => externalIdentifier26Schema)),
    paymentAccountReference: s.optional(s.lazy(() => paymentAccountReferenceSchema)),
    _keysMap: {
      approvalUrl: "approval_url",
      expirationDate: "expiration_date",
      lastReplacedAt: "last_replaced_at",
      approvalTarget: "approval_target",
      externalIdentifier: "external_identifier",
      paymentAccountReference: "payment_account_reference",
    },
  });
