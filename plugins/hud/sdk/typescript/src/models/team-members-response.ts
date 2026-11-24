import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamMemberItemSchema, type TeamMemberItem } from "./team-member-item.js";

export type TeamMembersResponse = {
  members: TeamMemberItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamMembersResponseSchema: Schema<TeamMembersResponse> = s.object<TeamMembersResponse>(
  {
    members: s.array(s.lazy(() => teamMemberItemSchema)),
  },
  { additionalProperties: s.json() },
);
