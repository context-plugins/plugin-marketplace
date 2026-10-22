import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountNullable8Schema, type AmountNullable8 } from "./amount-nullable8.js";
import { amount14Schema, type Amount14 } from "./amount14.js";
import {
  paymentDetailsCardAuditionSchema,
  type PaymentDetailsCardAudition,
} from "./payment-details-card-audition.js";
import {
  paymentDetailsCardFundingSchema,
  type PaymentDetailsCardFunding,
} from "./payment-details-card-funding.js";
import { paymentDetailsCardLabelSchema, type PaymentDetailsCardLabel } from "./payment-details-card-label.js";
import {
  paymentDetailsCardSecurityResponse2Schema,
  type PaymentDetailsCardSecurityResponse2,
} from "./payment-details-card-security-response2.js";
import {
  paymentDetailsFailureReasonSchema,
  type PaymentDetailsFailureReason,
} from "./payment-details-failure-reason.js";
import { paymentDetailsFeeRegionSchema, type PaymentDetailsFeeRegion } from "./payment-details-fee-region.js";
import {
  paymentDetailsSellerProtectionResponse2Schema,
  type PaymentDetailsSellerProtectionResponse2,
} from "./payment-details-seller-protection-response2.js";
import { paymentDetailsWalletSchema, type PaymentDetailsWallet } from "./payment-details-wallet.js";
import { qrCodeSchema, type QrCode } from "./qr-code.js";

/**
 * An object containing payment details collected during the payment process. For example, details
 * may include the customer's card or bank details and a payment reference. For the full list of
 * details, please refer to the [method-specific parameters](extra-payment-parameters) guide.
 */
export type PaymentDetails = {
  /**
   * The customer's name, if made available by the payment method. For card payments, refer to
   * `details.cardHolder`.
   */
  consumerName?: string | null;
  /**
   * The customer's account reference.
   *
   * For banking-based payment methods — such as iDEAL — this is normally either an IBAN or a
   * domestic bank account number.
   *
   * For PayPal, the account reference is an email address.
   *
   * For card and Bancontact payments, refer to `details.cardNumber`.
   */
  consumerAccount?: string | null;
  /** The BIC of the customer's bank account, if applicable. */
  consumerBic?: string | null;
  /**
   * For wallet payment methods — such as Apple Pay and PayPal — the shipping address is often
   * already known by the wallet provider. In these cases the shipping address may be available as a
   * payment detail.
   */
  shippingAddress?: Record<string, unknown> | null;
  /** The customer's masked card number. */
  cardNumber?: string | null;
  /** The name of the bank that the customer will need to make the bank transfer payment towards. */
  bankName?: string;
  /** The bank account number the customer will need to make the bank transfer payment towards. */
  bankAccount?: string;
  /** The BIC of the bank the customer will need to make the bank transfer payment towards. */
  bankBic?: string;
  /**
   * The Mollie-generated reference the customer needs to use when transfering the amount. Do not
   * apply any formatting here; show it to the customer as-is.
   */
  transferReference?: string | null;
  /** Bizum payment reference of the transaction. */
  bizumReference?: string | null;
  /** A unique fingerprint for this specific card. Can be used to identify returning customers. */
  cardFingerprint?: string | null;
  /** The customer's name as shown on their card. */
  cardHolder?: string | null;
  /** The card's target audience, if known. */
  cardAudience?: PaymentDetailsCardAudition | null;
  /** The card's label, if known. */
  cardLabel?: PaymentDetailsCardLabel | null;
  /** The ISO 3166-1 alpha-2 country code of the country the card was issued in. */
  cardCountryCode?: string | null;
  /** The expiry date (`MM/YY`) of the card as displayed on the card. */
  cardExpiryDate?: string | null;
  /** The card type. */
  cardFunding?: PaymentDetailsCardFunding | null;
  /**
   * The level of security applied during card processing.
   *
   * Possible values: `normal` `3dsecure`
   */
  cardSecurity?: PaymentDetailsCardSecurityResponse2 | null;
  /** The applicable card fee region. */
  feeRegion?: PaymentDetailsFeeRegion | null;
  /** The first6 and last4 digits of the card number. */
  cardMaskedNumber?: string | null;
  /**
   * The outcome of authentication attempted on transactions enforced by 3DS (ie valid only for
   * `oneoff` and `first`).
   */
  card3DsEci?: string | null;
  /** The first6 digit of the card bank identification number. */
  cardBin?: string | null;
  /** The issuer of the Card. */
  cardIssuer?: string | null;
  /** A failure code to help understand why the payment failed. */
  failureReason?: PaymentDetailsFailureReason | null;
  /**
   * A human-friendly failure message that can be shown to the customer. The message is translated
   * in accordance with the payment's locale setting.
   */
  failureMessage?: string | null;
  /** The wallet used when creating the payment. */
  wallet?: PaymentDetailsWallet | null;
  /** Multibanco payment reference of the transaction. */
  multibancoReference?: string | null;
  /** Multibanco entity reference of the transaction. */
  multibancoEntity?: string | null;
  /** PayPal's reference for the payment. */
  paypalReference?: string | null;
  /** ID of the customer's PayPal account. */
  paypalPayerId?: string | null;
  /**
   * Indicates to what extent the payment is eligible for PayPal's Seller Protection. Only available
   * for PayPal payments, if the information is made available by PayPal.
   *
   * Classic values: `Eligible` `Ineligible` `Partially Eligible - INR Only` `Partially Eligible -
   * Unauth Only` `PartiallyEligible` `None` `Active` `Fraud Control - Unauth Premium Eligible`
   *
   * Current values: `ELIGIBLE` `PARTIALLY_ELIGIBLE` `NOT_ELIGIBLE`
   *
   * _Note:_ Classic values are legacy and may still appear in older payments.
   */
  sellerProtection?: PaymentDetailsSellerProtectionResponse2 | null;
  /**
   * An amount object containing the fee PayPal will charge for this transaction. The field may be
   * omitted if PayPal will not charge a fee for this transaction.
   */
  paypalFee?: AmountNullable8 | null;
  /**
   * The paysafecard customer reference either provided via the API or otherwise auto-generated by
   * Mollie.
   */
  customerReference?: string;
  /** The ID of the terminal device where the payment took place on. */
  terminalId?: string;
  /** The first 6 digits & last 4 digits of the customer's masked card number. */
  maskedNumber?: string | null;
  /**
   * The creditor identifier indicates who is authorized to execute the payment. In this case, it is
   * a reference to Mollie.
   */
  creditorIdentifier?: string | null;
  /**
   * Estimated date the payment is debited from the customer's bank account, in `YYYY-MM-DD` format.
   */
  dueDate?: string | null;
  /**
   * Date the payment has been signed by the customer, in `YYYY-MM-DD` format. Only available if the
   * payment has been signed.
   */
  signatureDate?: string | null;
  /**
   * The official reason why this payment has failed. A detailed description of each reason is
   * available on the website of the European Payments Council.
   */
  bankReasonCode?: string | null;
  /** A human-friendly description of the failure reason. */
  bankReason?: string | null;
  /** The end-to-end identifier you provided in the batch file. */
  endToEndIdentifier?: string | null;
  /** The mandate reference you provided in the batch file. */
  mandateReference?: string | null;
  /** The batch reference you provided in the batch file. */
  batchReference?: string | null;
  /** The file reference you provided in the batch file. */
  fileReference?: string | null;
  /**
   * **Optional include.** If a QR code was requested during payment creation for a QR-compatible
   * payment method, the QR code details will be available in this object.
   *
   * The QR code can be scanned by the customer to complete the payment on their mobile device. For
   * example, Bancontact QR payments can be completed by the customer using the Bancontact app.
   *
   * * `height` _integer_
   * * `width` _integer_
   * * `src` _string_
   */
  qrCode?: QrCode;
  /**
   * For payments with gift cards: the masked gift card number of the first gift card applied to the
   * payment.
   */
  voucherNumber?: string;
  /** An array of detail objects for each gift card that was used on this payment, if any. */
  giftcards?: Record<string, unknown>[];
  /** For payments with vouchers: the brand name of the first voucher applied. */
  issuer?: string;
  /** An array of detail objects for each voucher that was used on this payment, if any. */
  vouchers?: Record<string, unknown>[];
  /**
   * An amount object for the amount that remained after all gift cards or vouchers were applied.
   */
  remainderAmount?: Amount14;
  /**
   * The payment method used to pay the remainder amount, after all gift cards or vouchers were
   * applied.
   */
  remainderMethod?: string;
  /** **Optional include.** The full payment method details of the remainder payment. */
  remainderDetails?: Record<string, unknown>;
};

export const paymentDetailsSchema: Schema<PaymentDetails> = s.object<PaymentDetails>({
  consumerName: s.optionalNullable(s.string()),
  consumerAccount: s.optionalNullable(s.string()),
  consumerBic: s.optionalNullable(s.string()),
  shippingAddress: s.optionalNullable(s.record(s.string(), s.unknown())),
  cardNumber: s.optionalNullable(s.string()),
  bankName: s.optional(s.string()),
  bankAccount: s.optional(s.string()),
  bankBic: s.optional(s.string()),
  transferReference: s.optionalNullable(s.string()),
  bizumReference: s.optionalNullable(s.string()),
  cardFingerprint: s.optionalNullable(s.string()),
  cardHolder: s.optionalNullable(s.string()),
  cardAudience: s.optionalNullable(s.lazy(() => paymentDetailsCardAuditionSchema)),
  cardLabel: s.optionalNullable(s.lazy(() => paymentDetailsCardLabelSchema)),
  cardCountryCode: s.optionalNullable(s.string()),
  cardExpiryDate: s.optionalNullable(s.string()),
  cardFunding: s.optionalNullable(s.lazy(() => paymentDetailsCardFundingSchema)),
  cardSecurity: s.optionalNullable(s.lazy(() => paymentDetailsCardSecurityResponse2Schema)),
  feeRegion: s.optionalNullable(s.lazy(() => paymentDetailsFeeRegionSchema)),
  cardMaskedNumber: s.optionalNullable(s.string()),
  card3DsEci: s.optionalNullable(s.string()),
  cardBin: s.optionalNullable(s.string()),
  cardIssuer: s.optionalNullable(s.string()),
  failureReason: s.optionalNullable(s.lazy(() => paymentDetailsFailureReasonSchema)),
  failureMessage: s.optionalNullable(s.string()),
  wallet: s.optionalNullable(s.lazy(() => paymentDetailsWalletSchema)),
  multibancoReference: s.optionalNullable(s.string()),
  multibancoEntity: s.optionalNullable(s.string()),
  paypalReference: s.optionalNullable(s.string()),
  paypalPayerId: s.optionalNullable(s.string()),
  sellerProtection: s.optionalNullable(s.lazy(() => paymentDetailsSellerProtectionResponse2Schema)),
  paypalFee: s.optionalNullable(s.lazy(() => amountNullable8Schema)),
  customerReference: s.optional(s.string()),
  terminalId: s.optional(s.string()),
  maskedNumber: s.optionalNullable(s.string()),
  creditorIdentifier: s.optionalNullable(s.string()),
  dueDate: s.optionalNullable(s.dateOnly()),
  signatureDate: s.optionalNullable(s.dateOnly()),
  bankReasonCode: s.optionalNullable(s.string()),
  bankReason: s.optionalNullable(s.string()),
  endToEndIdentifier: s.optionalNullable(s.string()),
  mandateReference: s.optionalNullable(s.string()),
  batchReference: s.optionalNullable(s.string()),
  fileReference: s.optionalNullable(s.string()),
  qrCode: s.optional(s.lazy(() => qrCodeSchema)),
  voucherNumber: s.optional(s.string()),
  giftcards: s.optional(s.array(s.record(s.string(), s.unknown()))),
  issuer: s.optional(s.string()),
  vouchers: s.optional(s.array(s.record(s.string(), s.unknown()))),
  remainderAmount: s.optional(s.lazy(() => amount14Schema)),
  remainderMethod: s.optional(s.string()),
  remainderDetails: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    card3DsEci: "card3dsEci",
  },
});
