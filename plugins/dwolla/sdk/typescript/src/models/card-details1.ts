import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingAddress1Schema, type BillingAddress1 } from "./billing-address1.js";
import { identificationSchema, type Identification } from "./identification.js";

export type CardDetails1 = {
  /** Cardholder first name */
  firstName: string;
  /** Cardholder last name */
  lastName: string;
  /** The billing address associated with the card */
  billingAddress: BillingAddress1;
  /**
   * Optional. Cardholder date of birth in `YYYY-MM-DD` format. Supplying this value reduces the
   * number of sanctions screening alerts raised when the card is registered and processed.
   */
  dateOfBirth?: string;
  /**
   * Optional. Cardholder country of birth as a two-letter country code (ISO 3166-1 alpha-2). Must
   * be exactly 2 characters. Supplying this value reduces the number of sanctions screening alerts
   * raised when the card is registered and processed.
   */
  countryOfBirth?: string;
  /**
   * Optional. A government identification document for the cardholder. Supplying this value reduces
   * the number of sanctions screening alerts raised when the card is registered and processed.
   */
  identification?: Identification;
};

export const cardDetails1Schema: Schema<CardDetails1> = s.object<CardDetails1>({
  firstName: s.string(),
  lastName: s.string(),
  billingAddress: billingAddress1Schema,
  dateOfBirth: s.optional(s.dateOnly()),
  countryOfBirth: s.optional(s.string()),
  identification: s.optional(s.lazy(() => identificationSchema)),
});
