import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of story (feature, bug, chore). */
export const StoryType = {
  Feature: "feature",
  Chore: "chore",
  Bug: "bug",
} as const;
export type StoryType = (typeof StoryType)[keyof typeof StoryType] | (string & {});

export const storyTypeSchema: EnumSchema<StoryType> = s.enumOf<StoryType>(StoryType);
