import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailTypeSchema, type EmailType } from "./email-type.js";

export type EmailAddress = {
  /** The email address (alternative to 'address') */
  email?: string;
  /** The email address (alternative to 'email') */
  address?: string;
  /** The type of email address (alternative to 'type') */
  emailType?: EmailType;
  /** The confidence level of the email address */
  emailConfidence?: string;
  /** The update date of the email address */
  updateDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const emailAddressSchema: Schema<EmailAddress> = s.object<EmailAddress>(
  {
    email: s.optional(s.string()),
    address: s.optional(s.string()),
    emailType: s.optional(s.lazy(() => emailTypeSchema)),
    emailConfidence: s.optional(s.string()),
    updateDate: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
