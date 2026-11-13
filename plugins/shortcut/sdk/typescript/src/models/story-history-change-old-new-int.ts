import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The estimate value for the Story */
export type StoryHistoryChangeOldNewInt = {
  /** The old value. */
  old?: number;
  /** The new value. */
  new?: number;
};

export const storyHistoryChangeOldNewIntSchema: Schema<StoryHistoryChangeOldNewInt> =
  s.object<StoryHistoryChangeOldNewInt>({
    old: s.optional(s.int()),
    new: s.optional(s.int()),
  });
