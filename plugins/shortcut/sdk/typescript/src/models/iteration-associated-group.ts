import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IterationAssociatedGroup = {
  /** The Group ID of the associated group. */
  groupId: string;
  /** The number of stories this Group owns in the Iteration. */
  associatedStoriesCount?: number;
};

export const iterationAssociatedGroupSchema: Schema<IterationAssociatedGroup> =
  s.object<IterationAssociatedGroup>({
    groupId: s.string(),
    associatedStoriesCount: s.optional(s.int()),
    _keysMap: {
      groupId: "group_id",
      associatedStoriesCount: "associated_stories_count",
    },
  });
