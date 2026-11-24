import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  objectRelmCrmContactsApiSchema,
  type ObjectRelmCrmContactsApi,
} from "./object-relm-crm-contacts-api.js";

export type Contact = {
  id?: string;
  object?: ObjectRelmCrmContactsApi;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  linkedinUrl?: string | null;
  type?: string | null;
  companyId?: string | null;
  customFields?: Record<string, unknown>;
  version?: number;
  mode?: string;
  createdAt?: string;
  updatedAt?: string;
  deleted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSchema: Schema<Contact> = s.object<Contact>(
  {
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => objectRelmCrmContactsApiSchema)),
    firstName: s.optionalNullable(s.string()),
    lastName: s.optionalNullable(s.string()),
    email: s.optionalNullable(s.string()),
    phone: s.optionalNullable(s.string()),
    linkedinUrl: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    companyId: s.optionalNullable(s.string()),
    customFields: s.optional(s.record(s.string(), s.unknown())),
    version: s.optional(s.int()),
    mode: s.optional(s.string()),
    createdAt: s.optional(s.string()),
    updatedAt: s.optional(s.string()),
    deleted: s.optional(s.boolean()),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      linkedinUrl: "linkedin_url",
      companyId: "company_id",
      customFields: "custom_fields",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
