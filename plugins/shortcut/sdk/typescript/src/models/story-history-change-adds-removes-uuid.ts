import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Custom Field Enum Value IDs that have been added or removed from the Story. */
export type StoryHistoryChangeAddsRemovesUuid = {
  /** The values that have been added. */
  adds?: string[];
  /** The values that have been removed */
  removes?: string[];
};

export const storyHistoryChangeAddsRemovesUuidSchema: Schema<StoryHistoryChangeAddsRemovesUuid> =
  s.object<StoryHistoryChangeAddsRemovesUuid>({
    adds: s.optional(s.array(s.string())),
    removes: s.optional(s.array(s.string())),
  });
