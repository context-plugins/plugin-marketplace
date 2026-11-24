import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobTitleSchema, type JobTitle } from "./job-title.js";
import { languageSchema, type Language } from "./language.js";
import { statusDoiTUsersApiSchema, type StatusDoiTUsersApi } from "./status-doi-tusers-api.js";

/** Summary information of a user. */
export type UserListItem = {
  /** The unique ID of the user. */
  id?: string;
  /** The email address of the user. */
  email?: string;
  /** The user's display name. */
  displayName?: string;
  /** The user's first name. */
  firstName?: string;
  /** The user's last name. */
  lastName?: string;
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
  /** The status of the user (active or invited). */
  status?: StatusDoiTUsersApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userListItemProperties: s.Shape<UserListItem> = {
  id: s.optional(s.string()),
  email: s.optional(s.string()),
  displayName: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  jobTitle: s.optional(s.lazy(() => jobTitleSchema)),
  phone: s.optional(s.string()),
  phoneExtension: s.optional(s.string()),
  language: s.optional(s.lazy(() => languageSchema)),
  roleId: s.optional(s.string()),
  organizationId: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusDoiTUsersApiSchema)),
};

export const userListItemInternalSchema: Schema<UserListItem> = s.object<UserListItem>(
  userListItemProperties,
  { additionalProperties: s.json() },
);

export const userListItemSchema: Schema<UserListItem> = s.lazySchema(() =>
  s.object<UserListItem>(
    {
      ...userListItemProperties,
      phone: s.optional(s.string().check(s.pattern("^\\+[0-9]+$"))),
    },
    { additionalProperties: s.json() },
  ),
);
