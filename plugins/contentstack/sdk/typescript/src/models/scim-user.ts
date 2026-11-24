import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailInternalSchema, emailSchema, type Email } from "./email.js";
import { nameSchema, type Name } from "./name.js";

/** A SCIM 2.0 User resource representing a Contentstack user account. */
export type ScimUser = {
  /** SCIM schema URNs for this resource. */
  schemas?: string[];
  /** SCIM-assigned unique identifier for the user. */
  id?: string;
  /** The user's email address used as the primary unique identifier. */
  userName?: string;
  /** The user's name components. */
  name?: Name;
  /** List of email addresses for the user. */
  emails?: Email[];
  /**
   * Indicates whether the user account is active. Set to false to deprovision (deactivate) the user
   * in Contentstack.
   */
  active?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scimUserProperties: s.Shape<ScimUser> = {
  schemas: s.optional(s.array(s.string())),
  id: s.optional(s.string()),
  userName: s.optional(s.string()),
  name: s.optional(s.lazy(() => nameSchema)),
  emails: s.optional(s.array(s.lazy(() => emailInternalSchema))),
  active: s.optional(s.boolean()),
};

export const scimUserInternalSchema: Schema<ScimUser> = s.object<ScimUser>(scimUserProperties, {
  additionalProperties: s.json(),
});

export const scimUserSchema: Schema<ScimUser> = s.lazySchema(() =>
  s.object<ScimUser>(
    {
      ...scimUserProperties,
      userName: s.optional(s.string().check(s.email())),
      emails: s.optional(s.array(s.lazy(() => emailSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
