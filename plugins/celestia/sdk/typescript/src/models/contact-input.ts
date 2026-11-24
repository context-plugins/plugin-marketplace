import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactInput = {
  /** Full name; must contain non-whitespace characters. */
  fullName: string;
  /** Company name; must contain non-whitespace characters. */
  companyName: string;
  /** Email address to receive a reply. */
  email: string;
  /** Area of interest; must contain non-whitespace characters. */
  interestedIn: string;
  /** Optional Telegram handle. */
  telegram?: string;
  /** Optional website. */
  website?: string;
  /** Optional project or inquiry details. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactInputProperties: s.Shape<ContactInput> = {
  fullName: s.string(),
  companyName: s.string(),
  email: s.string(),
  interestedIn: s.string(),
  telegram: s.optional(s.string()),
  website: s.optional(s.string()),
  message: s.optional(s.string()),
};

export const contactInputInternalSchema: Schema<ContactInput> = s.object<ContactInput>(
  contactInputProperties,
  { additionalProperties: s.json() },
);

export const contactInputSchema: Schema<ContactInput> = s.lazySchema(() =>
  s.object<ContactInput>(
    {
      ...contactInputProperties,
      email: s.string().check(s.minLength(3), s.maxLength(320), s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
