import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonInput = {
  firstName?: string;
  lastName?: string;
  email?: string;
  title?: string;
  personPhone?: string;
  personCountry?: string;
  linkedinUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personInputSchema: Schema<PersonInput> = s.object<PersonInput>(
  {
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    email: s.optional(s.string()),
    title: s.optional(s.string()),
    personPhone: s.optional(s.string()),
    personCountry: s.optional(s.string()),
    linkedinUrl: s.optional(s.string()),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      personPhone: "person_phone",
      personCountry: "person_country",
    },
  },
  { additionalProperties: s.json() },
);
