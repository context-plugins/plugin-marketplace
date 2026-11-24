import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  storyHistoryChangeOldNewIntSchema,
  type StoryHistoryChangeOldNewInt,
} from "./story-history-change-old-new-int.js";
import {
  storyHistoryChangeOldNewStrSchema,
  type StoryHistoryChangeOldNewStr,
} from "./story-history-change-old-new-str.js";

/** The changes that have occurred as a result of the action. */
export type HistoryChangesStoryLink = {
  /** A timestamp that represents the Story's deadline. */
  verb?: StoryHistoryChangeOldNewStr;
  /** The estimate value for the Story */
  objectId?: StoryHistoryChangeOldNewInt;
  /** The estimate value for the Story */
  subjectId?: StoryHistoryChangeOldNewInt;
};

export const historyChangesStoryLinkSchema: Schema<HistoryChangesStoryLink> =
  s.object<HistoryChangesStoryLink>({
    verb: s.optional(s.lazy(() => storyHistoryChangeOldNewStrSchema)),
    objectId: s.optional(s.lazy(() => storyHistoryChangeOldNewIntSchema)),
    subjectId: s.optional(s.lazy(() => storyHistoryChangeOldNewIntSchema)),
    _keysMap: {
      objectId: "object_id",
      subjectId: "subject_id",
    },
  });
