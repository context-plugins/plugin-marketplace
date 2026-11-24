import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update a customer contact */
export type UpdateCustomerContactRequestDto = {
  /** Customer first name */
  firstName?: string;
  /** Customer last name */
  lastName?: string;
  /** Customer email address. The value must be unique in the organization. */
  email?: string;
  /** Customer phone number */
  phone?: string;
  /** Customer alternate phone number. Use this field to sync with your accounting system. */
  altPhone?: string;
  /**
   * Customer alternate email address. The customer cannot use this email address to sign in to the
   * BILL web app.
   */
  alternateEmail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateCustomerContactRequestDtoProperties: s.Shape<UpdateCustomerContactRequestDto> = {
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  phone: s.optional(s.string()),
  altPhone: s.optional(s.string()),
  alternateEmail: s.optional(s.string()),
};

export const updateCustomerContactRequestDtoInternalSchema: Schema<UpdateCustomerContactRequestDto> =
  s.object<UpdateCustomerContactRequestDto>(updateCustomerContactRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const updateCustomerContactRequestDtoSchema: Schema<UpdateCustomerContactRequestDto> = s.lazySchema(
  () =>
    s.object<UpdateCustomerContactRequestDto>(
      {
        ...updateCustomerContactRequestDtoProperties,
        firstName: s.optional(s.string().check(s.maxLength(100))),
        lastName: s.optional(s.string().check(s.maxLength(100))),
        email: s.optional(s.string().check(s.email())),
        phone: s.optional(s.string().check(s.maxLength(40))),
        altPhone: s.optional(s.string().check(s.maxLength(40))),
        alternateEmail: s.optional(s.string().check(s.email())),
      },
      { additionalProperties: s.json() },
    ),
);
