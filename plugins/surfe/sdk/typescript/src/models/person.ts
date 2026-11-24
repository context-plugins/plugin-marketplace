import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Person = {
  firstName?: string;
  lastName?: string;
  jobTitle?: string;
  seniorities?: string[];
  departments?: string[];
  companyName?: string;
  companyDomain?: string;
  country?: string;
  linkedInUrl?: string;
  externalId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personSchema: Schema<Person> = s.object<Person>(
  {
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    jobTitle: s.optional(s.string()),
    seniorities: s.optional(s.array(s.string())),
    departments: s.optional(s.array(s.string())),
    companyName: s.optional(s.string()),
    companyDomain: s.optional(s.string()),
    country: s.optional(s.string()),
    linkedInUrl: s.optional(s.string()),
    externalId: s.optional(s.string()),
    _keysMap: {
      externalId: "externalID",
    },
  },
  { additionalProperties: s.json() },
);
