import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

export type TeamMemberRoleUpdateRequest = {
  membershipIds: number[];
  role: Role;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const teamMemberRoleUpdateRequestProperties: s.Shape<TeamMemberRoleUpdateRequest> = {
  membershipIds: s.array(s.int()),
  role: roleSchema,
  _keysMap: {
    membershipIds: "membership_ids",
  },
};

export const teamMemberRoleUpdateRequestInternalSchema: Schema<TeamMemberRoleUpdateRequest> =
  s.object<TeamMemberRoleUpdateRequest>(teamMemberRoleUpdateRequestProperties, {
    additionalProperties: s.json(),
  });

export const teamMemberRoleUpdateRequestSchema: Schema<TeamMemberRoleUpdateRequest> = s.lazySchema(() =>
  s.object<TeamMemberRoleUpdateRequest>(
    {
      ...teamMemberRoleUpdateRequestProperties,
      membershipIds: s.array(s.int()).check(s.minLength(1), s.maxLength(30)),
    },
    { additionalProperties: s.json() },
  ),
);
