import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkEditTeamsRep = {
  /** A list of member IDs of the members who were added to the teams. */
  memberIDs?: string[];
  /** A list of team keys of the teams that were successfully updated. */
  teamKeys?: string[];
  /** A list of team keys and errors for the teams whose updates failed. */
  errors?: string[];
};

export const bulkEditTeamsRepSchema: Schema<BulkEditTeamsRep> = s.object<BulkEditTeamsRep>({
  memberIDs: s.optional(s.array(s.string())),
  teamKeys: s.optional(s.array(s.string())),
  errors: s.optional(s.array(s.string())),
});
