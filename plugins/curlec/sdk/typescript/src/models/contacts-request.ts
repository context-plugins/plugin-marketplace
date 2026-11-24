import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1RazorpayXContactsApiSchema,
  type Type1RazorpayXContactsApi,
} from "./type1-razorpay-xcontacts-api.js";

export type ContactsRequest = {
  name: string;
  email?: string;
  contact?: string;
  type?: Type1RazorpayXContactsApi;
  referenceId?: string;
  notes?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactsRequestProperties: s.Shape<ContactsRequest> = {
  name: s.string(),
  email: s.optional(s.string()),
  contact: s.optional(s.string()),
  type: s.optional(s.lazy(() => type1RazorpayXContactsApiSchema)),
  referenceId: s.optional(s.string()),
  notes: s.optional(s.record(s.string(), s.unknown())),
  _keysMap: {
    referenceId: "reference_id",
  },
};

export const contactsRequestInternalSchema: Schema<ContactsRequest> = s.object<ContactsRequest>(
  contactsRequestProperties,
  { additionalProperties: s.json() },
);

export const contactsRequestSchema: Schema<ContactsRequest> = s.lazySchema(() =>
  s.object<ContactsRequest>(
    {
      ...contactsRequestProperties,
      name: s.string().check(s.minLength(3), s.maxLength(50)),
      email: s.optional(s.string().check(s.email())),
      referenceId: s.optional(s.string().check(s.maxLength(40))),
    },
    { additionalProperties: s.json() },
  ),
);
