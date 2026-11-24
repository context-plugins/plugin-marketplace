import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Contact = {
  id: string;
  accountId: string;
  companyName: string;
  firstName: string;
  firstNameDisplay: string;
  lastName: string;
  lastNameDisplay: string;
  middleName: string;
  nameDisplay: string;
  pronouns: string;
  primaryEmail: string;
  primaryPhone: string;
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSchema: Schema<Contact> = s.object<Contact>(
  {
    id: s.string(),
    accountId: s.string(),
    companyName: s.string(),
    firstName: s.string(),
    firstNameDisplay: s.string(),
    lastName: s.string(),
    lastNameDisplay: s.string(),
    middleName: s.string(),
    nameDisplay: s.string(),
    pronouns: s.string(),
    primaryEmail: s.string(),
    primaryPhone: s.string(),
    type: s.string(),
    _keysMap: {
      accountId: "account_id",
      companyName: "company_name",
      firstName: "first_name",
      firstNameDisplay: "first_name_display",
      lastName: "last_name",
      lastNameDisplay: "last_name_display",
      middleName: "middle_name",
      nameDisplay: "name_display",
      primaryEmail: "primary_email",
      primaryPhone: "primary_phone",
    },
  },
  { additionalProperties: s.json() },
);
