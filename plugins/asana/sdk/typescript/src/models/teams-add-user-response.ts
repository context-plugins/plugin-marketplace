import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamMembershipResponseSchema, type TeamMembershipResponse } from "./team-membership-response.js";

export type TeamsAddUserResponse = {
  data?: TeamMembershipResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamsAddUserResponseSchema: Schema<TeamsAddUserResponse> = s.object<TeamsAddUserResponse>(
  {
    data: s.optional(s.lazy(() => teamMembershipResponseSchema)),
  },
  { additionalProperties: s.json() },
);
