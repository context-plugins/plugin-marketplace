import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingAddressSchema, type BillingAddress } from "./billing-address.js";

/** Card-specific details. Only present when type is 'card'. */
export type CardDetails = {
  /** The card brand/network (e.g., Visa, Mastercard, American Express) */
  brand?: string;
  /** The last four digits of the card number */
  lastFour?: string;
  /** The card expiration month (1-12) */
  expirationMonth?: number;
  /** The card expiration year (4-digit year) */
  expirationYear?: number;
  /** The cardholder name as it appears on the card */
  nameOnCard?: string;
  /** Bank Identification Number (BIN) - the first 6-8 digits of the card number */
  bin?: string;
  /** The billing address associated with the card */
  billingAddress?: BillingAddress;
  /**
   * Cardholder date of birth in `YYYY-MM-DD` format. Only present if it was supplied when the card
   * funding source was created or updated.
   */
  dateOfBirth?: string;
  /**
   * Cardholder country of birth as a two-letter country code (ISO 3166-1 alpha-2). Only present if
   * it was supplied when the card funding source was created or updated.
   */
  countryOfBirth?: string;
};

export const cardDetailsSchema: Schema<CardDetails> = s.object<CardDetails>({
  brand: s.optional(s.string()),
  lastFour: s.optional(s.string()),
  expirationMonth: s.optional(s.int()),
  expirationYear: s.optional(s.int()),
  nameOnCard: s.optional(s.string()),
  bin: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => billingAddressSchema)),
  dateOfBirth: s.optional(s.string()),
  countryOfBirth: s.optional(s.string()),
});
