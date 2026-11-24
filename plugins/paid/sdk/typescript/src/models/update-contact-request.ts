import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactBillingAddressSchema, type ContactBillingAddress } from "./contact-billing-address.js";
import {
  updateContactRequestRolesItemsSchema,
  type UpdateContactRequestRolesItems,
} from "./update-contact-request-roles-items.js";

export type UpdateContactRequest = {
  customerId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string | null;
  billingAddress?: ContactBillingAddress;
  externalId?: string | null;
  roles?: UpdateContactRequestRolesItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateContactRequestProperties: s.Shape<UpdateContactRequest> = {
  customerId: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  phone: s.optionalNullable(s.string()),
  billingAddress: s.optional(s.lazy(() => contactBillingAddressSchema)),
  externalId: s.optionalNullable(s.string()),
  roles: s.optional(s.array(s.lazy(() => updateContactRequestRolesItemsSchema))),
};

export const updateContactRequestInternalSchema: Schema<UpdateContactRequest> =
  s.object<UpdateContactRequest>(updateContactRequestProperties, { additionalProperties: s.json() });

export const updateContactRequestSchema: Schema<UpdateContactRequest> = s.lazySchema(() =>
  s.object<UpdateContactRequest>(
    {
      ...updateContactRequestProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
