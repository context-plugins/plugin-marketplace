import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blocked2Schema, type Blocked2 } from "./blocked2.js";

export type Vendor = {
  odataEtag?: string;
  /** The unique identifier of the vendor */
  id?: string;
  /** The vendor number */
  number?: string;
  /** The vendor display name */
  displayName?: string;
  /** First line of the address */
  addressLine1?: string;
  /** Second line of the address */
  addressLine2?: string;
  /** The city */
  city?: string;
  /** The state or province code */
  state?: string;
  /** The country/region code */
  country?: string;
  /** The postal code */
  postalCode?: string;
  /** The phone number */
  phoneNumber?: string;
  /** The email address */
  email?: string;
  /** The website URL */
  website?: string;
  /** The tax registration number */
  taxRegistrationNumber?: string;
  /** The currency ID */
  currencyId?: string;
  /** The currency code */
  currencyCode?: string;
  /** The payment terms ID */
  paymentTermsId?: string;
  /** The payment method ID */
  paymentMethodId?: string;
  /** Whether the vendor is tax liable */
  taxLiable?: boolean;
  /** Whether the vendor is blocked */
  blocked?: Blocked2;
  /** The vendor balance */
  balance?: number;
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vendorProperties: s.Shape<Vendor> = {
  odataEtag: s.optional(s.string()),
  id: s.optional(s.string()),
  number: s.optional(s.string()),
  displayName: s.optional(s.string()),
  addressLine1: s.optional(s.string()),
  addressLine2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  email: s.optional(s.string()),
  website: s.optional(s.string()),
  taxRegistrationNumber: s.optional(s.string()),
  currencyId: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  paymentTermsId: s.optional(s.string()),
  paymentMethodId: s.optional(s.string()),
  taxLiable: s.optional(s.boolean()),
  blocked: s.optional(s.lazy(() => blocked2Schema)),
  balance: s.optional(s.float64()),
  lastModifiedDateTime: s.optional(s.dateTime()),
  _keysMap: {
    odataEtag: "@odata.etag",
  },
};

export const vendorInternalSchema: Schema<Vendor> = s.object<Vendor>(vendorProperties, {
  additionalProperties: s.json(),
});

export const vendorSchema: Schema<Vendor> = s.lazySchema(() =>
  s.object<Vendor>(
    {
      ...vendorProperties,
      number: s.optional(s.string().check(s.maxLength(20))),
      displayName: s.optional(s.string().check(s.maxLength(100))),
      addressLine1: s.optional(s.string().check(s.maxLength(100))),
      addressLine2: s.optional(s.string().check(s.maxLength(50))),
      city: s.optional(s.string().check(s.maxLength(30))),
      state: s.optional(s.string().check(s.maxLength(20))),
      country: s.optional(s.string().check(s.maxLength(10))),
      postalCode: s.optional(s.string().check(s.maxLength(20))),
      phoneNumber: s.optional(s.string().check(s.maxLength(30))),
      email: s.optional(s.string().check(s.maxLength(80))),
      website: s.optional(s.string().check(s.maxLength(80))),
      taxRegistrationNumber: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
