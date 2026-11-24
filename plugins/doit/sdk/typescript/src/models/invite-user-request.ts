import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobTitle2Schema, type JobTitle2 } from "./job-title2.js";

/** Request body to invite a new user to the organization. */
export type InviteUserRequest = {
  /** The email address of the user. */
  email: string;
  /** The first name of the user being invited. */
  firstName?: string;
  /** The last name of the user being invited. */
  lastName?: string;
  /** The job function of the user being invited. */
  jobTitle?: JobTitle2;
  /** The ID of the role to assign to the user. */
  roleId?: string;
  /** The ID of the organization to assign the user to. */
  organizationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const inviteUserRequestProperties: s.Shape<InviteUserRequest> = {
  email: s.string(),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  jobTitle: s.optional(s.lazy(() => jobTitle2Schema)),
  roleId: s.optional(s.string()),
  organizationId: s.optional(s.string()),
};

export const inviteUserRequestInternalSchema: Schema<InviteUserRequest> = s.object<InviteUserRequest>(
  inviteUserRequestProperties,
  { additionalProperties: s.json() },
);

export const inviteUserRequestSchema: Schema<InviteUserRequest> = s.lazySchema(() =>
  s.object<InviteUserRequest>(
    {
      ...inviteUserRequestProperties,
      email: s.string().check(s.email()),
    },
    { additionalProperties: s.json() },
  ),
);
