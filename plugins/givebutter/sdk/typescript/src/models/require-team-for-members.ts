import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type RequireTeamForMembers = {
  /** @default "require_team_for_members" */
  name?: "require_team_for_members";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requireTeamForMembersSchema: Schema<RequireTeamForMembers> = s.object<RequireTeamForMembers>(
  {
    name: s.defaulted(s.literal("require_team_for_members"), "require_team_for_members"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
