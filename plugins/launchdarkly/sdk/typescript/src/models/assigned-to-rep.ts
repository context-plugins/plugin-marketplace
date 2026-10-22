import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AssignedToRep = {
  /** The number of individual members this role is assigned to */
  membersCount?: number;
  /** The number of teams this role is assigned to */
  teamsCount?: number;
};

export const assignedToRepSchema: Schema<AssignedToRep> = s.object<AssignedToRep>({
  membersCount: s.optional(s.int()),
  teamsCount: s.optional(s.int()),
});
