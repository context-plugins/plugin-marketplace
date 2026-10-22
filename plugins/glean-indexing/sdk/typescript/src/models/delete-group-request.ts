import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /deletegroup API call */
export type DeleteGroupRequest = {
  /**
   * Version number for document for optimistic concurrency control. If absent or 0 then no version
   * checks are done.
   */
  version?: number;
  /** The datasource for which the group is removed */
  datasource: string;
  /** the name of the group to be deleted */
  groupName: string;
};

export const deleteGroupRequestSchema: Schema<DeleteGroupRequest> = s.object<DeleteGroupRequest>({
  version: s.optional(s.int()),
  datasource: s.string(),
  groupName: s.string(),
});
