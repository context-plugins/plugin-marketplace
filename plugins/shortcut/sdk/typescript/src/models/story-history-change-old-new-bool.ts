import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** True if the Story has archived, otherwise false. */
export type StoryHistoryChangeOldNewBool = {
  /** The old value. */
  old?: boolean;
  /** The new value. */
  new?: boolean;
};

export const storyHistoryChangeOldNewBoolSchema: Schema<StoryHistoryChangeOldNewBool> =
  s.object<StoryHistoryChangeOldNewBool>({
    old: s.optional(s.boolean()),
    new: s.optional(s.boolean()),
  });
