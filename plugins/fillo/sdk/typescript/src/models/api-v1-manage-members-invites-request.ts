import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type ApiV1ManageMembersInvitesRequest = {
  email: string;
  /** Defaults to member. */
  role?: Role;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageMembersInvitesRequestProperties: s.Shape<ApiV1ManageMembersInvitesRequest> = {
  email: s.string(),
  role: s.optional(s.lazy(() => roleSchema)),
};

export const apiV1ManageMembersInvitesRequestInternalSchema: Schema<ApiV1ManageMembersInvitesRequest> =
  s.object<ApiV1ManageMembersInvitesRequest>(apiV1ManageMembersInvitesRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1ManageMembersInvitesRequestSchema: Schema<ApiV1ManageMembersInvitesRequest> = s.lazySchema(
  () =>
    s.object<ApiV1ManageMembersInvitesRequest>(
      {
        ...apiV1ManageMembersInvitesRequestProperties,
        email: s.string().check(s.email()),
      },
      { additionalProperties: s.json() },
    ),
);
