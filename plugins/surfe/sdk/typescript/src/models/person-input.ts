import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonInput = {
  linkedinUrl?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  companyDomain?: string;
  externalId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personInputSchema: Schema<PersonInput> = s.object<PersonInput>(
  {
    linkedinUrl: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    companyName: s.optional(s.string()),
    companyDomain: s.optional(s.string()),
    externalId: s.optional(s.string()),
    _keysMap: {
      externalId: "externalID",
    },
  },
  { additionalProperties: s.json() },
);
