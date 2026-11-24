import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of Story; either feature, bug, or chore. */
export const StoryType1 = {
  Feature: "feature",
  Chore: "chore",
  Bug: "bug",
} as const;
export type StoryType1 = (typeof StoryType1)[keyof typeof StoryType1] | (string & {});

export const storyType1Schema: EnumSchema<StoryType1> = s.enumOf<StoryType1>(StoryType1);
