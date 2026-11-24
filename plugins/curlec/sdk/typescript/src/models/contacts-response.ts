import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { xContactInternalSchema, xContactSchema, type XContact } from "./xcontact.js";

export type ContactsResponse = {
  entity?: string;
  count?: number;
  items?: XContact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactsResponseProperties: s.Shape<ContactsResponse> = {
  entity: s.optional(s.string()),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => xContactInternalSchema))),
};

export const contactsResponseInternalSchema: Schema<ContactsResponse> = s.object<ContactsResponse>(
  contactsResponseProperties,
  { additionalProperties: s.json() },
);

export const contactsResponseSchema: Schema<ContactsResponse> = s.lazySchema(() =>
  s.object<ContactsResponse>(
    {
      ...contactsResponseProperties,
      items: s.optional(s.array(s.lazy(() => xContactSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
