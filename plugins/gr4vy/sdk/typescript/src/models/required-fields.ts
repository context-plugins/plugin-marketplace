import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requiredAddressFields2Schema, type RequiredAddressFields2 } from "./required-address-fields2.js";

export type RequiredFields = {
  /** Defines if the `first_name` field for a buyer is required. @default false */
  firstName?: boolean;
  /** Defines if the `last_name` field for a buyer is required. @default false */
  lastName?: boolean;
  /** Defines if the `email_address` field for a buyer is required. @default false */
  emailAddress?: boolean;
  /** Defines if the `phone_number` field for a buyer is required. @default false */
  phoneNumber?: boolean;
  /** Defines if the `tax_id` field for a buyer is required. @default false */
  taxId?: boolean;
  /** Defines if the `address` fields required for the buyer. */
  address: RequiredAddressFields2;
};

export const requiredFieldsSchema: Schema<RequiredFields> = s.object<RequiredFields>({
  firstName: s.defaulted(s.boolean(), false),
  lastName: s.defaulted(s.boolean(), false),
  emailAddress: s.defaulted(s.boolean(), false),
  phoneNumber: s.defaulted(s.boolean(), false),
  taxId: s.defaulted(s.boolean(), false),
  address: requiredAddressFields2Schema,
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    taxId: "tax_id",
  },
});
