import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Contact = {
  /** First name */
  firstName?: string;
  /** Last name */
  lastName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactProperties: s.Shape<Contact> = {
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
};

export const contactInternalSchema: Schema<Contact> = s.object<Contact>(contactProperties, {
  additionalProperties: s.json(),
});

export const contactSchema: Schema<Contact> = s.lazySchema(() =>
  s.object<Contact>(
    {
      ...contactProperties,
      firstName: s.optional(s.string().check(s.maxLength(100))),
      lastName: s.optional(s.string().check(s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);
