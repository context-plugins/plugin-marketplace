import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a customer contact */
export type CreateCustomerContactRequestDto = {
  /** Customer first name */
  firstName: string;
  /** Customer last name */
  lastName?: string;
  /** Customer email address. The value must be unique in the organization. */
  email: string;
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

const createCustomerContactRequestDtoProperties: s.Shape<CreateCustomerContactRequestDto> = {
  firstName: s.string(),
  lastName: s.optional(s.string()),
  email: s.string(),
  phone: s.optional(s.string()),
  altPhone: s.optional(s.string()),
  alternateEmail: s.optional(s.string()),
};

export const createCustomerContactRequestDtoInternalSchema: Schema<CreateCustomerContactRequestDto> =
  s.object<CreateCustomerContactRequestDto>(createCustomerContactRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createCustomerContactRequestDtoSchema: Schema<CreateCustomerContactRequestDto> = s.lazySchema(
  () =>
    s.object<CreateCustomerContactRequestDto>(
      {
        ...createCustomerContactRequestDtoProperties,
        firstName: s.string().check(s.minLength(1), s.maxLength(100)),
        lastName: s.optional(s.string().check(s.maxLength(100))),
        email: s.string().check(s.minLength(1), s.email()),
        phone: s.optional(s.string().check(s.maxLength(40))),
        altPhone: s.optional(s.string().check(s.maxLength(40))),
        alternateEmail: s.optional(s.string().check(s.email())),
      },
      { additionalProperties: s.json() },
    ),
);
