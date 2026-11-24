import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  customerContactInternalSchema,
  customerContactSchema,
  type CustomerContact,
} from "./customer-contact.js";
import { customerSettingsSchema, type CustomerSettings } from "./customer-settings.js";

/**
 * Partial update to a customer's general settings. Every field is optional; only fields present in
 * the request body are changed. Fields are nested exactly as the `getCustomer` response nests them.
 * See the operation description for `urlSlug`'s null-vs-absent semantics, which differ from every
 * other field.
 */
export type CustomerUpdate = {
  /**
   * The customer's URL display name. An explicit empty string removes the active slug; a non-empty
   * value must be 3-12 characters of lowercase letters, digits, or dashes, starting and ending with
   * a letter or digit, and must be unique across all customers.
   */
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

const customerUpdateProperties: s.Shape<CustomerUpdate> = {
  urlSlug: s.optional(s.string()),
  settings: s.optional(s.lazy(() => customerSettingsSchema)),
  contact: s.optional(s.lazy(() => customerContactInternalSchema)),
};

export const customerUpdateInternalSchema: Schema<CustomerUpdate> = s.object<CustomerUpdate>(
  customerUpdateProperties,
  { additionalProperties: s.json() },
);

export const customerUpdateSchema: Schema<CustomerUpdate> = s.lazySchema(() =>
  s.object<CustomerUpdate>(
    {
      ...customerUpdateProperties,
      contact: s.optional(s.lazy(() => customerContactSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
