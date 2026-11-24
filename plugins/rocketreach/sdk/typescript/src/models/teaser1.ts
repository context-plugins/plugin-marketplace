import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { phoneSchema, type Phone } from "./phone.js";

export type Teaser1 = {
  emails?: string[];
  phones?: Phone[];
  officePhones?: string[];
  preview?: string[];
  isPremiumPhoneAvailable?: boolean;
  personalEmails?: string[];
  professionalEmails?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teaser1Schema: Schema<Teaser1> = s.object<Teaser1>(
  {
    emails: s.optional(s.array(s.string())),
    phones: s.optional(s.array(s.lazy(() => phoneSchema))),
    officePhones: s.optional(s.array(s.string())),
    preview: s.optional(s.array(s.string())),
    isPremiumPhoneAvailable: s.optional(s.boolean()),
    personalEmails: s.optional(s.array(s.string())),
    professionalEmails: s.optional(s.array(s.string())),
    _keysMap: {
      officePhones: "office_phones",
      isPremiumPhoneAvailable: "is_premium_phone_available",
      personalEmails: "personal_emails",
      professionalEmails: "professional_emails",
    },
  },
  { additionalProperties: s.json() },
);
