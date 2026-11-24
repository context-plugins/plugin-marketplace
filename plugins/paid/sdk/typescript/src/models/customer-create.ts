import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import {
  contactCreateForCustomerSchema,
  type ContactCreateForCustomer,
} from "./contact-create-for-customer.js";
import { creationSourceSchema, type CreationSource } from "./creation-source.js";
import { taxExemptStatusSchema, type TaxExemptStatus } from "./tax-exempt-status.js";

export type CustomerCreate = {
  name: string;
  externalId?: string;
  phone?: string;
  employeeCount?: number;
  annualRevenue?: number;
  taxExemptStatus?: TaxExemptStatus;
  creationSource?: CreationSource;
  website?: string;
  billingAddress?: Address;
  /** Flexible JSON field for storing custom metadata about the customer */
  metadata?: Record<string, unknown>;
  /** Array of contacts to create for this customer */
  contacts?: ContactCreateForCustomer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerCreateSchema: Schema<CustomerCreate> = s.object<CustomerCreate>(
  {
    name: s.string(),
    externalId: s.optional(s.string()),
    phone: s.optional(s.string()),
    employeeCount: s.optional(s.float64()),
    annualRevenue: s.optional(s.float64()),
    taxExemptStatus: s.optional(s.lazy(() => taxExemptStatusSchema)),
    creationSource: s.optional(s.lazy(() => creationSourceSchema)),
    website: s.optional(s.string()),
    billingAddress: s.optional(s.lazy(() => addressSchema)),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    contacts: s.optional(s.array(s.lazy(() => contactCreateForCustomerSchema))),
  },
  { additionalProperties: s.json() },
);
