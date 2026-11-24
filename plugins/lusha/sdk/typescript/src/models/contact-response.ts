import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactErrorSchema, type ContactError } from "./contact-error.js";
import { contactSchema, type Contact } from "./contact.js";

export type ContactResponse = {
  error: ContactError;
  isCreditCharged: boolean;
  data?: Contact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactResponseSchema: Schema<ContactResponse> = s.object<ContactResponse>(
  {
    error: contactErrorSchema,
    isCreditCharged: s.boolean(),
    data: s.optional(s.lazy(() => contactSchema)),
  },
  { additionalProperties: s.json() },
);
