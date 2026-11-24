import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactsRequest1 = {
  name?: string;
  email?: string;
  contact?: string;
  type?: string;
  referenceId?: string;
  notes?: Record<string, unknown>;
  active?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactsRequest1Schema: Schema<ContactsRequest1> = s.object<ContactsRequest1>(
  {
    name: s.optional(s.string()),
    email: s.optional(s.string()),
    contact: s.optional(s.string()),
    type: s.optional(s.string()),
    referenceId: s.optional(s.string()),
    notes: s.optional(s.record(s.string(), s.unknown())),
    active: s.optional(s.boolean()),
    _keysMap: {
      referenceId: "reference_id",
    },
  },
  { additionalProperties: s.json() },
);
