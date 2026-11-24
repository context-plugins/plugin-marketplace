import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** If the referenced entity is a Story, either "bug", "chore", or "feature". */
export const StoryType4 = {
  Feature: "feature",
  Chore: "chore",
  Bug: "bug",
} as const;
export type StoryType4 = (typeof StoryType4)[keyof typeof StoryType4] | (string & {});

export const storyType4Schema: EnumSchema<StoryType4> = s.enumOf<StoryType4>(StoryType4);
