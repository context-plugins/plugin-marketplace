import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Task IDs that have been added or removed from the Story. */
export type StoryHistoryChangeAddsRemovesInt = {
  /** The values that have been added. */
  adds?: number[];
  /** The values that have been removed */
  removes?: number[];
};

export const storyHistoryChangeAddsRemovesIntSchema: Schema<StoryHistoryChangeAddsRemovesInt> =
  s.object<StoryHistoryChangeAddsRemovesInt>({
    adds: s.optional(s.array(s.int())),
    removes: s.optional(s.array(s.int())),
  });
