import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** CustomerContact response Dto. */
export type CustomerContactResponseDto = {
  /** BILL-generated ID of the customer contact. The value begins with `cpu`. */
  id?: string;
  /** Set as `true` if the customer contact is archived. */
  archived?: boolean;
  /** BILL-generated ID of the customer. The value begins with `0cu`. */
  customerId?: string;
  /** Customer first name */
  firstName?: string;
  /** Customer last name */
  lastName?: string;
  /** Customer email address */
  email?: string;
  /** Customer phone number */
  phone?: string;
  /** Customer alternate phone number */
  altPhone?: string;
  /** Customer alternate email address */
  alternateEmail?: string;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customerContactResponseDtoSchema: Schema<CustomerContactResponseDto> =
  s.object<CustomerContactResponseDto>(
    {
      id: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      customerId: s.optional(s.string()),
      firstName: s.optional(s.string()),
      lastName: s.optional(s.string()),
      email: s.optional(s.string()),
      phone: s.optional(s.string()),
      altPhone: s.optional(s.string()),
      alternateEmail: s.optional(s.string()),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
