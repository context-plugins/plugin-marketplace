import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StoryDuration = {
  OneDay: "ONE_DAY",
  TwoDays: "TWO_DAYS",
  ThreeDays: "THREE_DAYS",
  OneWeek: "ONE_WEEK",
} as const;
export type StoryDuration = (typeof StoryDuration)[keyof typeof StoryDuration] | (string & {});

export const storyDurationSchema: EnumSchema<StoryDuration> = s.enumOf<StoryDuration>(StoryDuration);
