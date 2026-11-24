import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Contact = {
  name?: string;
  email?: string;
  contact?: string;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSchema: Schema<Contact> = s.object<Contact>(
  {
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    contact: s.optional(s.string()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
