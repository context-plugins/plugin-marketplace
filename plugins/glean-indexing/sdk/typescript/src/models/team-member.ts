import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about a team's member */
export type TeamMember = {
  /** The member's email */
  email: string;
  /**
   * The member's relationship to the team, an enum of `MEMBER`, `MANAGER`, `LEAD`,
   * `POINT_OF_CONTACT`, `OTHER`
   *
   * @default "MEMBER"
   */
  relationship?: string;
  /** The member's start date */
  joinDate?: string;
};

export const teamMemberSchema: Schema<TeamMember> = s.object<TeamMember>({
  email: s.string(),
  relationship: s.defaulted(s.string(), "MEMBER"),
  joinDate: s.optional(s.dateOnly()),
  _keysMap: {
    joinDate: "join_date",
  },
});
