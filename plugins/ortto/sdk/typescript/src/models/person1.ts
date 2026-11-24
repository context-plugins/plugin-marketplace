import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Person1 = {
  contactId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const person1Schema: Schema<Person1> = s.object<Person1>(
  {
    contactId: s.optional(s.string()),
    _keysMap: {
      contactId: "contact_id",
    },
  },
  { additionalProperties: s.json() },
);
