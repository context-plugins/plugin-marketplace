import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { salutationSchema, type Salutation } from "./salutation.js";

export type Contact = {
  id?: string;
  externalId?: string;
  organizationId?: string;
  customerId?: string;
  customerExternalId?: string;
  salutation?: Salutation;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  billingStreet?: string;
  billingCity?: string;
  billingStateProvince?: string;
  billingCountry?: string;
  billingPostalCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSchema: Schema<Contact> = s.object<Contact>(
  {
    id: s.optional(s.string()),
    externalId: s.optional(s.string()),
    organizationId: s.optional(s.string()),
    customerId: s.optional(s.string()),
    customerExternalId: s.optional(s.string()),
    salutation: s.optional(s.lazy(() => salutationSchema)),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    email: s.optional(s.string()),
    phone: s.optional(s.string()),
    billingStreet: s.optional(s.string()),
    billingCity: s.optional(s.string()),
    billingStateProvince: s.optional(s.string()),
    billingCountry: s.optional(s.string()),
    billingPostalCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
