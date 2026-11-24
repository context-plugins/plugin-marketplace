import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobTitleSchema, type JobTitle } from "./job-title.js";
import { languageSchema, type Language } from "./language.js";

/** The updated user record. */
export type UpdatedUserBody = {
  /** The unique ID of the user. */
  id?: string;
  /** The user's display name. */
  displayName?: string;
  /** The user's first name. */
  firstName?: string;
  /** The user's last name. */
  lastName?: string;
  /** The user's email address. */
  email?: string;
  /** The user's job function. */
  jobTitle?: JobTitle;
  /** The user's country code (e.g., +44). */
  phone?: string;
  /** The user's phone extension. */
  phoneExtension?: string;
  /** The user's preferred language. */
  language?: Language;
  /** The ID of the user's role. */
  roleId?: string;
  /** The ID of the user's organization. */
  organizationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updatedUserBodyProperties: s.Shape<UpdatedUserBody> = {
  id: s.optional(s.string()),
  displayName: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  email: s.optional(s.string()),
  jobTitle: s.optional(s.lazy(() => jobTitleSchema)),
  phone: s.optional(s.string()),
  phoneExtension: s.optional(s.string()),
  language: s.optional(s.lazy(() => languageSchema)),
  roleId: s.optional(s.string()),
  organizationId: s.optional(s.string()),
};

export const updatedUserBodyInternalSchema: Schema<UpdatedUserBody> = s.object<UpdatedUserBody>(
  updatedUserBodyProperties,
  { additionalProperties: s.json() },
);

export const updatedUserBodySchema: Schema<UpdatedUserBody> = s.lazySchema(() =>
  s.object<UpdatedUserBody>(
    {
      ...updatedUserBodyProperties,
      phone: s.optional(s.string().check(s.pattern("^\\+[0-9]+$"))),
    },
    { additionalProperties: s.json() },
  ),
);
