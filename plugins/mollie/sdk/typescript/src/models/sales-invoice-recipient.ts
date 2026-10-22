import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  salesInvoiceRecipientLocaleSchema,
  type SalesInvoiceRecipientLocale,
} from "./sales-invoice-recipient-locale.js";
import {
  salesInvoiceRecipientTypeSchema,
  type SalesInvoiceRecipientType,
} from "./sales-invoice-recipient-type.js";

export type SalesInvoiceRecipient = {
  /**
   * The type of recipient, either `consumer` or `business`. This will determine what further fields
   * are required on the `recipient` object.
   */
  type: SalesInvoiceRecipientType;
  /** The title of the `consumer` type recipient, for example Mr. or Mrs.. */
  title?: string | null;
  /**
   * The given name (first name) of the `consumer` type recipient should be at least two characters
   * and cannot contain only numbers.
   */
  givenName?: string | null;
  /**
   * The given name (last name) of the `consumer` type recipient should be at least two characters
   * and cannot contain only numbers.
   */
  familyName?: string | null;
  /** The trading name of the `business` type recipient. */
  organizationName?: string | null;
  /**
   * The Chamber of Commerce number of the organization for a `business` type recipient. Either this
   * or `vatNumber` has to be provided.
   */
  organizationNumber?: string | null;
  /**
   * The VAT number of the organization for a `business` type recipient. Either this or
   * `organizationNumber` has to be provided.
   */
  vatNumber?: string | null;
  /**
   * The email address of the recipient.
   *
   * If the domain contains non-ASCII characters, encode it as Punycode per [RFC
   * 3492](https://www.rfc-editor.org/rfc/rfc3492).
   */
  email: string;
  /** The phone number of the recipient. */
  phone?: string | null;
  /** A street and street number. */
  streetAndNumber: string;
  /** Any additional addressing details, for example an apartment number. */
  streetAdditional?: string | null;
  /** A postal code. */
  postalCode: string;
  /** The recipient's city. */
  city: string;
  /** The recipient's region. */
  region?: string | null;
  /**
   * A country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * format.
   */
  country: string;
  locale: SalesInvoiceRecipientLocale;
};

export const salesInvoiceRecipientSchema: Schema<SalesInvoiceRecipient> = s.object<SalesInvoiceRecipient>({
  type: salesInvoiceRecipientTypeSchema,
  title: s.optionalNullable(s.string()),
  givenName: s.optionalNullable(s.string()),
  familyName: s.optionalNullable(s.string()),
  organizationName: s.optionalNullable(s.string()),
  organizationNumber: s.optionalNullable(s.string()),
  vatNumber: s.optionalNullable(s.string()),
  email: s.string(),
  phone: s.optionalNullable(s.string()),
  streetAndNumber: s.string(),
  streetAdditional: s.optionalNullable(s.string()),
  postalCode: s.string(),
  city: s.string(),
  region: s.optionalNullable(s.string()),
  country: s.string(),
  locale: salesInvoiceRecipientLocaleSchema,
});
