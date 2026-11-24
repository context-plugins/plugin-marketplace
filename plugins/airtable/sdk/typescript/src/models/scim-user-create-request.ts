import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailInternalSchema, emailSchema, type Email } from "./email.js";
import { nameSchema, type Name } from "./name.js";

/** Request body for creating or replacing a SCIM user. */
export type ScimUserCreateRequest = {
  schemas: string[];
  /** The unique username for the user, typically an email address. */
  userName: string;
  name?: Name;
  emails?: Email[];
  /** Whether the user account should be active. @default true */
  active?: boolean;
  /** The user's job title. */
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const scimUserCreateRequestProperties: s.Shape<ScimUserCreateRequest> = {
  schemas: s.array(s.string()),
  userName: s.string(),
  name: s.optional(s.lazy(() => nameSchema)),
  emails: s.optional(s.array(s.lazy(() => emailInternalSchema))),
  active: s.defaulted(s.boolean(), true),
  title: s.optional(s.string()),
};

export const scimUserCreateRequestInternalSchema: Schema<ScimUserCreateRequest> =
  s.object<ScimUserCreateRequest>(scimUserCreateRequestProperties, { additionalProperties: s.json() });

export const scimUserCreateRequestSchema: Schema<ScimUserCreateRequest> = s.lazySchema(() =>
  s.object<ScimUserCreateRequest>(
    {
      ...scimUserCreateRequestProperties,
      emails: s.optional(s.array(s.lazy(() => emailSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
