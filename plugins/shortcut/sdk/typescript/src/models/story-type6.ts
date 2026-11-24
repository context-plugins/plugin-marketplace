import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of Stories that you want returned. */
export const StoryType6 = {
  Feature: "feature",
  Chore: "chore",
  Bug: "bug",
} as const;
export type StoryType6 = (typeof StoryType6)[keyof typeof StoryType6] | (string & {});

export const storyType6Schema: EnumSchema<StoryType6> = s.enumOf<StoryType6>(StoryType6);
