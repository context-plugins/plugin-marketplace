import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactErrorSchema, type ContactError } from "./contact-error.js";
import { contactWithCompanySchema, type ContactWithCompany } from "./contact-with-company.js";

export type ContactSingleResponse = {
  error: ContactError;
  isCreditCharged: boolean;
  data?: ContactWithCompany;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSingleResponseSchema: Schema<ContactSingleResponse> = s.object<ContactSingleResponse>(
  {
    error: contactErrorSchema,
    isCreditCharged: s.boolean(),
    data: s.optional(s.lazy(() => contactWithCompanySchema)),
  },
  { additionalProperties: s.json() },
);
