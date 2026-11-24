import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Contact block (registrant/administrative/technical/billing). */
export type PersonalInformation = {
  id?: string;
  idType?: string;
  handle?: string;
  name?: string;
  company?: string;
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  countryName?: string;
  countryCode?: string;
  emailAddress?: string;
  phone?: string;
  fax?: string;
  mailingAddress?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personalInformationSchema: Schema<PersonalInformation> = s.object<PersonalInformation>(
  {
    id: s.optional(s.string()),
    idType: s.optional(s.string()),
    handle: s.optional(s.string()),
    name: s.optional(s.string()),
    company: s.optional(s.string()),
    street: s.optional(s.string()),
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    zipCode: s.optional(s.string()),
    countryName: s.optional(s.string()),
    countryCode: s.optional(s.string()),
    emailAddress: s.optional(s.string()),
    phone: s.optional(s.string()),
    fax: s.optional(s.string()),
    mailingAddress: s.optional(s.string()),
    _keysMap: {
      idType: "id_type",
      zipCode: "zip_code",
      countryName: "country_name",
      countryCode: "country_code",
      emailAddress: "email_address",
      mailingAddress: "mailing_address",
    },
  },
  { additionalProperties: s.json() },
);
