import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A timestamp that represents the Story's deadline. */
export type StoryHistoryChangeOldNewStr = {
  /** The old value. */
  old?: string | null;
  /** The new value. */
  new?: string;
};

export const storyHistoryChangeOldNewStrSchema: Schema<StoryHistoryChangeOldNewStr> =
  s.object<StoryHistoryChangeOldNewStr>({
    old: s.optionalNullable(s.string()),
    new: s.optional(s.string()),
  });
