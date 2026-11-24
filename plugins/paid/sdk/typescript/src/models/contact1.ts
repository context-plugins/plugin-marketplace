import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactBillingAddressSchema, type ContactBillingAddress } from "./contact-billing-address.js";
import { contactRolesItemsSchema, type ContactRolesItems } from "./contact-roles-items.js";

export type Contact1 = {
  id: string;
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
  billingAddress?: ContactBillingAddress;
  externalId: string | null;
  roles: ContactRolesItems[];
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contact1Schema: Schema<Contact1> = s.object<Contact1>(
  {
    id: s.string(),
    customerId: s.string(),
    firstName: s.string(),
    lastName: s.string(),
    email: s.string(),
    phone: s.nullable(s.string()),
    billingAddress: s.optional(s.lazy(() => contactBillingAddressSchema)),
    externalId: s.nullable(s.string()),
    roles: s.array(s.lazy(() => contactRolesItemsSchema)),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
