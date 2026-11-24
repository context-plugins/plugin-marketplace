import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerContactInternalSchema,
  customerContactSchema,
  type CustomerContact,
} from "./customer-contact.js";
import { customerSettingsSchema, type CustomerSettings } from "./customer-settings.js";

/** Customer scoped to the authenticated tenant, including its settings and contact info. */
export type Customer = {
  /** Customer ID. */
  id: string;
  /** Customer name. */
  name?: string;
  /** Customer's primary domain. */
  primaryDomain?: string;
  /** Domains associated with the customer. */
  domains?: string[];
  /** The customer's active URL display name, used in Console URLs. */
  urlSlug?: string;
  /**
   * Customer settings. Shared by the `getCustomer` response and the `updateCustomer` request body
   * so a value is always read and written at the same path.
   *
   * `currency` accepts only the listed codes; any other value is rejected with `400`. Unlike
   * `urlSlug` and `allowedInviteDomains` it cannot be cleared - no value unsets it.
   */
  settings?: CustomerSettings;
  /**
   * Customer point-of-contact details. Shared by the `getCustomer` response and the
   * `updateCustomer` request body so a value is always read and written at the same path.
   */
  contact?: CustomerContact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerProperties: s.Shape<Customer> = {
  id: s.string(),
  name: s.optional(s.string()),
  primaryDomain: s.optional(s.string()),
  domains: s.optional(s.array(s.string())),
  urlSlug: s.optional(s.string()),
  settings: s.optional(s.lazy(() => customerSettingsSchema)),
  contact: s.optional(s.lazy(() => customerContactInternalSchema)),
};

export const customerInternalSchema: Schema<Customer> = s.object<Customer>(customerProperties, {
  additionalProperties: s.json(),
});

export const customerSchema: Schema<Customer> = s.lazySchema(() =>
  s.object<Customer>(
    {
      ...customerProperties,
      contact: s.optional(s.lazy(() => customerContactSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
