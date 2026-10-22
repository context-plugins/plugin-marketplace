import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The customer's billing address details. We advise to provide these details to improve fraud
 * protection and conversion.
 *
 * Should include `email` or a valid postal address consisting of `streetAndNumber`, `postalCode`,
 * `city` and `country`.
 *
 * Required for payment method `in3`, `klarna`, `billie` and `riverty`.
 */
export type PaymentAddress3 = {
  /** The title of the person, for example *Mr.* or *Mrs.*. */
  title?: string;
  /**
   * The given name (first name) of the person should be at least two characters and cannot contain
   * only numbers.
   *
   * Required for payment methods `alma`, `billie`, `in3`, `klarna` and `riverty`.
   */
  givenName?: string;
  /**
   * The given family name (surname) of the person should be at least two characters and cannot
   * contain only numbers.
   *
   * Required for payment methods `alma`, `billie`, `in3`, `klarna` and `riverty`.
   */
  familyName?: string;
  /** The name of the organization, in case the addressee is an organization. */
  organizationName?: string;
  /**
   * A street and street number.
   *
   * Required for payment methods `alma`, `billie`, `in3`, `klarna` and `riverty`.
   */
  streetAndNumber?: string;
  /** Any additional addressing details, for example an apartment number. */
  streetAdditional?: string;
  /**
   * A postal code. This field may be required if the provided country has a postal code system.
   *
   * Required for payment methods `alma`, `billie`, `in3`, `klarna` and `riverty`.
   */
  postalCode?: string;
  /**
   * A valid e-mail address.
   *
   * If you provide the email address for a `banktransfer` payment, we will automatically send the
   * instructions email upon payment creation. The language of the email will follow the locale
   * parameter of the payment.
   *
   * Required for payment methods `alma`, `billie`, `in3`, `klarna` and `riverty`.
   *
   * If the domain contains non-ASCII characters, encode it as Punycode per [RFC
   * 3492](https://www.rfc-editor.org/rfc/rfc3492).
   */
  email?: string;
  /**
   * If provided, it must be in the [E.164](https://en.wikipedia.org/wiki/E.164) format. For
   * example: +31208202070.
   */
  phone?: string;
  /**
   * A city name.
   *
   * Required for payment methods `alma`, `billie`, `in3`, `klarna` and `riverty`.
   */
  city?: string;
  /** The top-level administrative subdivision of the country. For example: Noord-Holland. */
  region?: string;
  /**
   * A country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * format.
   *
   * Required for payment methods `alma`, `billie`, `in3`, `klarna` and `riverty`.
   */
  country?: string;
};

export const paymentAddress3Schema: Schema<PaymentAddress3> = s.object<PaymentAddress3>({
  title: s.optional(s.string()),
  givenName: s.optional(s.string()),
  familyName: s.optional(s.string()),
  organizationName: s.optional(s.string()),
  streetAndNumber: s.optional(s.string()),
  streetAdditional: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  city: s.optional(s.string()),
  region: s.optional(s.string()),
  country: s.optional(s.string()),
});
