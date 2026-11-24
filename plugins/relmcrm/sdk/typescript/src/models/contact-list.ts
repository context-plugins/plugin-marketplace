import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactSchema, type Contact } from "./contact.js";
import { object1Schema, type Object1 } from "./object1.js";

export type ContactList = {
  object?: Object1;
  hasMore?: boolean;
  nextCursor?: string | null;
  data?: Contact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactListSchema: Schema<ContactList> = s.object<ContactList>(
  {
    object: s.optional(s.lazy(() => object1Schema)),
    hasMore: s.optional(s.boolean()),
    nextCursor: s.optionalNullable(s.string()),
    data: s.optional(s.array(s.lazy(() => contactSchema))),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
    },
  },
  { additionalProperties: s.json() },
);
