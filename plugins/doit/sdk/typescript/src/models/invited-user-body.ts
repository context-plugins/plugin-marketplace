import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1DoiTUsersApiSchema, type Status1DoiTUsersApi } from "./status1-doi-tusers-api.js";

export type InvitedUserBody = {
  /** The unique ID of the invited user. */
  id?: string;
  /** The email address of the invited user. */
  email?: string;
  /** The first name of the invited user, if provided during invitation. */
  firstName?: string;
  /** The last name of the invited user, if provided during invitation. */
  lastName?: string;
  /** The display name of the invited user, if provided during invitation. */
  displayName?: string;
  /** The job function of the invited user, if provided during invitation. */
  jobTitle?: string;
  /** The ID of the role assigned to the user. */
  roleId?: string;
  /** The ID of the organization assigned to the user. */
  organizationId?: string;
  /** The status of the user (invited) */
  status?: Status1DoiTUsersApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invitedUserBodySchema: Schema<InvitedUserBody> = s.object<InvitedUserBody>(
  {
    id: s.optional(s.string()),
    email: s.optional(s.string()),
    firstName: s.optional(s.string()),
    lastName: s.optional(s.string()),
    displayName: s.optional(s.string()),
    jobTitle: s.optional(s.string()),
    roleId: s.optional(s.string()),
    organizationId: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1DoiTUsersApiSchema)),
  },
  { additionalProperties: s.json() },
);
