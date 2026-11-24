import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The Team ID for the Story. */
export type StoryHistoryChangeOldNewUuid = {
  /** The old value. */
  old?: string;
  /** The new value. */
  new?: string;
};

export const storyHistoryChangeOldNewUuidSchema: Schema<StoryHistoryChangeOldNewUuid> =
  s.object<StoryHistoryChangeOldNewUuid>({
    old: s.optional(s.string()),
    new: s.optional(s.string()),
  });
