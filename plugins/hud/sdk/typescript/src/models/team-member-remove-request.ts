import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TeamMemberRemoveRequest = {
  membershipIds: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const teamMemberRemoveRequestProperties: s.Shape<TeamMemberRemoveRequest> = {
  membershipIds: s.array(s.int()),
  _keysMap: {
    membershipIds: "membership_ids",
  },
};

export const teamMemberRemoveRequestInternalSchema: Schema<TeamMemberRemoveRequest> =
  s.object<TeamMemberRemoveRequest>(teamMemberRemoveRequestProperties, { additionalProperties: s.json() });

export const teamMemberRemoveRequestSchema: Schema<TeamMemberRemoveRequest> = s.lazySchema(() =>
  s.object<TeamMemberRemoveRequest>(
    {
      ...teamMemberRemoveRequestProperties,
      membershipIds: s.array(s.int()).check(s.minLength(1), s.maxLength(30)),
    },
    { additionalProperties: s.json() },
  ),
);
