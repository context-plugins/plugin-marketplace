import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** If the referenced entity is a Story, either "bug", "chore", or "feature". */
export const StoryType2 = {
  Feature: "feature",
  Chore: "chore",
  Bug: "bug",
} as const;
export type StoryType2 = (typeof StoryType2)[keyof typeof StoryType2] | (string & {});

export const storyType2Schema: EnumSchema<StoryType2> = s.enumOf<StoryType2>(StoryType2);
