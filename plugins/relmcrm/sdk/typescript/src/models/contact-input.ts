import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** At least one of name / email / phone / linkedin_url / company_id / a custom field. */
export type ContactInput = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  type?: string;
  companyId?: string;
  customFields?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactInputSchema: Schema<ContactInput> = s.object<ContactInput>(
  {
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    email: s.optional(s.string()),
    phone: s.optional(s.string()),
    linkedinUrl: s.optional(s.string()),
    type: s.optional(s.string()),
    companyId: s.optional(s.string()),
    customFields: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      linkedinUrl: "linkedin_url",
      companyId: "company_id",
      customFields: "custom_fields",
    },
  },
  { additionalProperties: s.json() },
);
