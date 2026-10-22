import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BulkEditMembersRep = {
  /** A list of members IDs of the members who were successfully updated. */
  members?: string[];
  /** A list of member IDs and errors for the members whose updates failed. */
  errors?: string[];
};

export const bulkEditMembersRepSchema: Schema<BulkEditMembersRep> = s.object<BulkEditMembersRep>({
  members: s.optional(s.array(s.string())),
  errors: s.optional(s.array(s.string())),
});
