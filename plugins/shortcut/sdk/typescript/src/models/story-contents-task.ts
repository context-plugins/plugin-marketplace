import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type StoryContentsTask = {
  /** Full text of the Task. */
  description: string;
  /** The number corresponding to the Task's position within a list of Tasks on a Story. */
  position?: number;
  /** True/false boolean indicating whether the Task has been completed. */
  complete?: boolean;
  /** An array of UUIDs of the Owners of this Task. */
  ownerIds?: string[];
  /**
   * This field can be set to another unique ID. In the case that the Task has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string | null;
};

export const storyContentsTaskSchema: Schema<StoryContentsTask> = s.object<StoryContentsTask>({
  description: s.string(),
  position: s.optional(s.int()),
  complete: s.optional(s.boolean()),
  ownerIds: s.optional(s.array(s.string())),
  externalId: s.optionalNullable(s.string()),
  _keysMap: {
    ownerIds: "owner_ids",
    externalId: "external_id",
  },
});
