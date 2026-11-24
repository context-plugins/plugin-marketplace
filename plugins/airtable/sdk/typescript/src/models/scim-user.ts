import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { email1InternalSchema, email1Schema, type Email1 } from "./email1.js";
import { name1Schema, type Name1 } from "./name1.js";
import { scimMetaSchema, type ScimMeta } from "./scim-meta.js";

/** A SCIM 2.0 User resource representing a provisioned user. */
export type ScimUser = {
  /** The SCIM schema URIs for this resource. */
  schemas: string[];
  /** The unique identifier for the SCIM user resource. */
  id: string;
  /** The unique username for the user, typically an email address. */
  userName: string;
  /** The user's name components. */
  name?: Name1;
  /** The user's email addresses. */
  emails?: Email1[];
  /** Whether the user account is active. */
  active: boolean;
  /** The user's job title. */
  title?: string;
  /** SCIM resource metadata. */
  meta?: ScimMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scimUserProperties: s.Shape<ScimUser> = {
  schemas: s.array(s.string()),
  id: s.string(),
  userName: s.string(),
  name: s.optional(s.lazy(() => name1Schema)),
  emails: s.optional(s.array(s.lazy(() => email1InternalSchema))),
  active: s.boolean(),
  title: s.optional(s.string()),
  meta: s.optional(s.lazy(() => scimMetaSchema)),
};

export const scimUserInternalSchema: Schema<ScimUser> = s.object<ScimUser>(scimUserProperties, {
  additionalProperties: s.json(),
});

export const scimUserSchema: Schema<ScimUser> = s.lazySchema(() =>
  s.object<ScimUser>(
    {
      ...scimUserProperties,
      emails: s.optional(s.array(s.lazy(() => email1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
