import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of Story; either feature, bug, or chore. */
export const StoryType3 = {
  Feature: "feature",
  Chore: "chore",
  Bug: "bug",
} as const;
export type StoryType3 = (typeof StoryType3)[keyof typeof StoryType3] | (string & {});

export const storyType3Schema: EnumSchema<StoryType3> = s.enumOf<StoryType3>(StoryType3);
