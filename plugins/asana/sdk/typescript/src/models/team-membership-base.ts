import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { teamCompactSchema, type TeamCompact } from "./team-compact.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

export type TeamMembershipBase = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  user?: UserCompact;
  team?: TeamCompact;
  /** Describes if the user is a guest in the team. */
  isGuest?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamMembershipBaseSchema: Schema<TeamMembershipBase> = s.object<TeamMembershipBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    user: s.optional(s.lazy(() => userCompactSchema)),
    team: s.optional(s.lazy(() => teamCompactSchema)),
    isGuest: s.optional(s.boolean()),
    _keysMap: {
      resourceType: "resource_type",
      isGuest: "is_guest",
    },
  },
  { additionalProperties: s.json() },
);
