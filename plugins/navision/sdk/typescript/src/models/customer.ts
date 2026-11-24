import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { blockedSchema, type Blocked } from "./blocked.js";
import {
  typeDynamics365BusinessCentralApiV20CustomersApiSchema,
  type TypeDynamics365BusinessCentralApiV20CustomersApi,
} from "./type-dynamics365-business-central-api-v20-customers-api.js";

export type Customer = {
  /** ETag for concurrency control */
  odataEtag?: string;
  /** The unique identifier of the customer */
  id?: string;
  /** The customer number */
  number?: string;
  /** The customer display name */
  displayName?: string;
  /** The customer type */
  type?: TypeDynamics365BusinessCentralApiV20CustomersApi;
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
  /** The salesperson code */
  salespersonCode?: string;
  /** The balance due from the customer */
  balanceDue?: number;
  /** The credit limit */
  creditLimit?: number;
  /** Whether the customer is tax liable */
  taxLiable?: boolean;
  /** The tax area ID */
  taxAreaId?: string;
  /** The tax area display name */
  taxAreaDisplayName?: string;
  /** The tax registration number */
  taxRegistrationNumber?: string;
  /** The currency ID */
  currencyId?: string;
  /** The currency code */
  currencyCode?: string;
  /** The payment terms ID */
  paymentTermsId?: string;
  /** The shipment method ID */
  shipmentMethodId?: string;
  /** The payment method ID */
  paymentMethodId?: string;
  /** Whether the customer is blocked */
  blocked?: Blocked;
  /** The date and time when the customer was last modified */
  lastModifiedDateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerProperties: s.Shape<Customer> = {
  odataEtag: s.optional(s.string()),
  id: s.optional(s.string()),
  number: s.optional(s.string()),
  displayName: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeDynamics365BusinessCentralApiV20CustomersApiSchema)),
  addressLine1: s.optional(s.string()),
  addressLine2: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
  phoneNumber: s.optional(s.string()),
  email: s.optional(s.string()),
  website: s.optional(s.string()),
  salespersonCode: s.optional(s.string()),
  balanceDue: s.optional(s.float64()),
  creditLimit: s.optional(s.float64()),
  taxLiable: s.optional(s.boolean()),
  taxAreaId: s.optional(s.string()),
  taxAreaDisplayName: s.optional(s.string()),
  taxRegistrationNumber: s.optional(s.string()),
  currencyId: s.optional(s.string()),
  currencyCode: s.optional(s.string()),
  paymentTermsId: s.optional(s.string()),
  shipmentMethodId: s.optional(s.string()),
  paymentMethodId: s.optional(s.string()),
  blocked: s.optional(s.lazy(() => blockedSchema)),
  lastModifiedDateTime: s.optional(s.dateTime()),
  _keysMap: {
    odataEtag: "@odata.etag",
  },
};

export const customerInternalSchema: Schema<Customer> = s.object<Customer>(customerProperties, {
  additionalProperties: s.json(),
});

export const customerSchema: Schema<Customer> = s.lazySchema(() =>
  s.object<Customer>(
    {
      ...customerProperties,
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
      salespersonCode: s.optional(s.string().check(s.maxLength(20))),
      taxRegistrationNumber: s.optional(s.string().check(s.maxLength(20))),
      currencyCode: s.optional(s.string().check(s.maxLength(10))),
    },
    { additionalProperties: s.json() },
  ),
);
