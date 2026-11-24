import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactBillingAddressSchema, type ContactBillingAddress } from "./contact-billing-address.js";
import {
  createContactRequestRolesItemsSchema,
  type CreateContactRequestRolesItems,
} from "./create-contact-request-roles-items.js";

export type CreateContactRequest = {
  customerId: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string | null;
  billingAddress?: ContactBillingAddress;
  externalId?: string | null;
  roles?: CreateContactRequestRolesItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createContactRequestProperties: s.Shape<CreateContactRequest> = {
  customerId: s.string(),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.string(),
  phone: s.optionalNullable(s.string()),
  billingAddress: s.optional(s.lazy(() => contactBillingAddressSchema)),
  externalId: s.optionalNullable(s.string()),
  roles: s.optional(s.array(s.lazy(() => createContactRequestRolesItemsSchema))),
};

export const createContactRequestInternalSchema: Schema<CreateContactRequest> =
  s.object<CreateContactRequest>(createContactRequestProperties, { additionalProperties: s.json() });

export const createContactRequestSchema: Schema<CreateContactRequest> = s.lazySchema(() =>
  s.object<CreateContactRequest>(
    {
      ...createContactRequestProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
