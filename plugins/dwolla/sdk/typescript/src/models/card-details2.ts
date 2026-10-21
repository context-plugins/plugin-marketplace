import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingAddress2Schema, type BillingAddress2 } from "./billing-address2.js";
import { identification1Schema, type Identification1 } from "./identification1.js";

/** Cardholder details to add or update. Provide only the fields you want to change. */
export type CardDetails2 = {
  /** Cardholder first name */
  firstName?: string;
  /** Cardholder last name */
  lastName?: string;
  /**
   * The billing address associated with the card. When you include `billingAddress`, `postalCode`
   * is required.
   */
  billingAddress?: BillingAddress2;
  /**
   * Cardholder date of birth in `YYYY-MM-DD` format. Supplying this value reduces the number of
   * sanctions screening alerts raised when the card is processed.
   */
  dateOfBirth?: string;
  /**
   * Cardholder country of birth as a two-letter country code (ISO 3166-1 alpha-2). Must be exactly
   * 2 characters. Supplying this value reduces the number of sanctions screening alerts raised when
   * the card is processed.
   */
  countryOfBirth?: string;
  /**
   * A government identification document for the cardholder. Supplying this value reduces the
   * number of sanctions screening alerts raised when the card is processed.
   */
  identification?: Identification1;
};

export const cardDetails2Schema: Schema<CardDetails2> = s.object<CardDetails2>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => billingAddress2Schema)),
  dateOfBirth: s.optional(s.dateOnly()),
  countryOfBirth: s.optional(s.string()),
  identification: s.optional(s.lazy(() => identification1Schema)),
});
