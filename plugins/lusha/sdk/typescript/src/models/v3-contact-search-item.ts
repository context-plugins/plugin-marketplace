import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3ContactSearchItem = {
  clientReferenceId?: string;
  id?: string;
  linkedinUrl?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  companyDomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3ContactSearchItemProperties: s.Shape<V3ContactSearchItem> = {
  clientReferenceId: s.optional(s.string()),
  id: s.optional(s.string()),
  linkedinUrl: s.optional(s.string()),
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  companyName: s.optional(s.string()),
  companyDomain: s.optional(s.string()),
};

export const v3ContactSearchItemInternalSchema: Schema<V3ContactSearchItem> = s.object<V3ContactSearchItem>(
  v3ContactSearchItemProperties,
  { additionalProperties: s.json() },
);

export const v3ContactSearchItemSchema: Schema<V3ContactSearchItem> = s.lazySchema(() =>
  s.object<V3ContactSearchItem>(
    {
      ...v3ContactSearchItemProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
