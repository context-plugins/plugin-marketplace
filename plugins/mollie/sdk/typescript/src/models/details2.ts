import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mandateDetailsCardLabelSchema, type MandateDetailsCardLabel } from "./mandate-details-card-label.js";

export type Details2 = {
  /** The customer's name. Available for SEPA Direct Debit and PayPal mandates. */
  consumerName?: string | null;
  /** The customer's IBAN or email address. Available for SEPA Direct Debit and PayPal mandates. */
  consumerAccount?: string | null;
  /** The BIC of the customer's bank. Available for SEPA Direct Debit mandates. */
  consumerBic?: string | null;
  /** The card holder's name. Available for card mandates. */
  cardHolder?: string | null;
  /** The last four digits of the card number. Available for card mandates. */
  cardNumber?: string | null;
  /** The card's expiry date in `YYYY-MM-DD` format. Available for card mandates. */
  cardExpiryDate?: string | null;
  /** The card's label. Available for card mandates, if the card label could be detected. */
  cardLabel?: MandateDetailsCardLabel | null;
  /**
   * Unique alphanumeric representation of this specific card. Available for card mandates. Can be
   * used to identify returning customers.
   */
  cardFingerprint?: string | null;
};

export const details2Schema: Schema<Details2> = s.object<Details2>({
  consumerName: s.optionalNullable(s.string()),
  consumerAccount: s.optionalNullable(s.string()),
  consumerBic: s.optionalNullable(s.string()),
  cardHolder: s.optionalNullable(s.string()),
  cardNumber: s.optionalNullable(s.string()),
  cardExpiryDate: s.optionalNullable(s.string()),
  cardLabel: s.optionalNullable(s.lazy(() => mandateDetailsCardLabelSchema)),
  cardFingerprint: s.optionalNullable(s.string()),
});
