import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobFunctionSchema, type JobFunction } from "./job-function.js";
import { jobTitleSchema, type JobTitle } from "./job-title.js";
import { languageSchema, type Language } from "./language.js";

/** Fields allowed when updating an existing user. */
export type UpdateUserRequest = {
  /** The user's first name. */
  firstName?: string;
  /** The user's last name. */
  lastName?: string;
  /** The user's job function. */
  jobTitle?: JobTitle;
  /**
   * Deprecated: use 'jobTitle' instead. If both are provided, 'jobTitle' takes precedence.
   *
   * @deprecated
   */
  jobFunction?: JobFunction;
  /** The user's country code (e.g., +44). */
  phone?: string;
  /** The user's phone extension (8-15 digits). */
  phoneExtension?: string;
  /** The user's preferred language. */
  language?: Language;
  /** The ID of the role to assign to the user. */
  roleId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateUserRequestProperties: s.Shape<UpdateUserRequest> = {
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  jobTitle: s.optional(s.lazy(() => jobTitleSchema)),
  jobFunction: s.optional(s.lazy(() => jobFunctionSchema)),
  phone: s.optional(s.string()),
  phoneExtension: s.optional(s.string()),
  language: s.optional(s.lazy(() => languageSchema)),
  roleId: s.optional(s.string()),
};

export const updateUserRequestInternalSchema: Schema<UpdateUserRequest> = s.object<UpdateUserRequest>(
  updateUserRequestProperties,
  { additionalProperties: s.json() },
);

export const updateUserRequestSchema: Schema<UpdateUserRequest> = s.lazySchema(() =>
  s.object<UpdateUserRequest>(
    {
      ...updateUserRequestProperties,
      phone: s.optional(s.string().check(s.pattern("^\\+[0-9]+$"))),
      phoneExtension: s.optional(s.string().check(s.pattern("^[0-9]{8,15}$"))),
    },
    { additionalProperties: s.json() },
  ),
);
