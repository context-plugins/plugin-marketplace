import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EpicAssociatedGroup = {
  /** The Group ID of the associated group. */
  groupId: string;
  /** The number of stories this Group owns in the Epic. */
  associatedStoriesCount?: number;
};

export const epicAssociatedGroupSchema: Schema<EpicAssociatedGroup> = s.object<EpicAssociatedGroup>({
  groupId: s.string(),
  associatedStoriesCount: s.optional(s.int()),
  _keysMap: {
    groupId: "group_id",
    associatedStoriesCount: "associated_stories_count",
  },
});
