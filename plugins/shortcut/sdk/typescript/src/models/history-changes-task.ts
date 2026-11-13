import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  storyHistoryChangeAddsRemovesUuidSchema,
  type StoryHistoryChangeAddsRemovesUuid,
} from "./story-history-change-adds-removes-uuid.js";
import {
  storyHistoryChangeOldNewBoolSchema,
  type StoryHistoryChangeOldNewBool,
} from "./story-history-change-old-new-bool.js";
import {
  storyHistoryChangeOldNewStrSchema,
  type StoryHistoryChangeOldNewStr,
} from "./story-history-change-old-new-str.js";

/** The changes that have occurred as a result of the action. */
export type HistoryChangesTask = {
  /** True if the Story has archived, otherwise false. */
  complete?: StoryHistoryChangeOldNewBool;
  /** A timestamp that represents the Story's deadline. */
  description?: StoryHistoryChangeOldNewStr;
  /** Custom Field Enum Value IDs that have been added or removed from the Story. */
  mentionIds?: StoryHistoryChangeAddsRemovesUuid;
  /** Custom Field Enum Value IDs that have been added or removed from the Story. */
  ownerIds?: StoryHistoryChangeAddsRemovesUuid;
};

export const historyChangesTaskSchema: Schema<HistoryChangesTask> = s.object<HistoryChangesTask>({
  complete: s.optional(s.lazy(() => storyHistoryChangeOldNewBoolSchema)),
  description: s.optional(s.lazy(() => storyHistoryChangeOldNewStrSchema)),
  mentionIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesUuidSchema)),
  ownerIds: s.optional(s.lazy(() => storyHistoryChangeAddsRemovesUuidSchema)),
  _keysMap: {
    mentionIds: "mention_ids",
    ownerIds: "owner_ids",
  },
});
