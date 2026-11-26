import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Customer contact. */
export type CustomerContact = {
  /** First name */
  firstName?: string;
  /** Last name */
  lastName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const customerContactProperties: s.Shape<CustomerContact> = {
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
};

export const customerContactInternalSchema: Schema<CustomerContact> = s.object<CustomerContact>(
  customerContactProperties,
  { additionalProperties: s.json() },
);

export const customerContactSchema: Schema<CustomerContact> = s.lazySchema(() =>
  s.object<CustomerContact>(
    {
      ...customerContactProperties,
      firstName: s.optional(s.string().check(s.maxLength(100))),
      lastName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
