import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleSchema, type Role } from "./role.js";

/** The token user's membership in the application's team. */
export type OAuthJoinResponse = {
  membershipId: number;
  teamId: string;
  role: Role;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oAuthJoinResponseSchema: Schema<OAuthJoinResponse> = s.object<OAuthJoinResponse>(
  {
    membershipId: s.int(),
    teamId: s.string(),
    role: roleSchema,
    _keysMap: {
      membershipId: "membership_id",
      teamId: "team_id",
    },
  },
  { additionalProperties: s.json() },
);
