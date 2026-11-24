import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamMembershipCompactSchema, type TeamMembershipCompact } from "./team-membership-compact.js";

export type TeamMembershipsResponse1 = {
  data?: TeamMembershipCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamMembershipsResponse1Schema: Schema<TeamMembershipsResponse1> =
  s.object<TeamMembershipsResponse1>(
    {
      data: s.optional(s.array(s.lazy(() => teamMembershipCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
