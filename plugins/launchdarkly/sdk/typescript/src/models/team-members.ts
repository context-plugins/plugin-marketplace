import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TeamMembers = {
  /** The total count of members that belong to the team */
  totalCount?: number;
};

export const teamMembersSchema: Schema<TeamMembers> = s.object<TeamMembers>({
  totalCount: s.optional(s.int()),
});
