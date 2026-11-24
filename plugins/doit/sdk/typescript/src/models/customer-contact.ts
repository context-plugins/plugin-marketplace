import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Customer point-of-contact details. Shared by the `getCustomer` response and the `updateCustomer`
 * request body so a value is always read and written at the same path.
 */
export type CustomerContact = {
  /** Point-of-contact email addresses for the customer. */
  emails?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerContactProperties: s.Shape<CustomerContact> = {
  emails: s.optional(s.array(s.string())),
};

export const customerContactInternalSchema: Schema<CustomerContact> = s.object<CustomerContact>(
  customerContactProperties,
  { additionalProperties: s.json() },
);

export const customerContactSchema: Schema<CustomerContact> = s.lazySchema(() =>
  s.object<CustomerContact>(
    {
      ...customerContactProperties,
      emails: s.optional(s.array(s.string().check(s.email()))),
    },
    { additionalProperties: s.json() },
  ),
);
