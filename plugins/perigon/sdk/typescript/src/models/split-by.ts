import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SplitBy = {
  Hour: "hour",
  Day: "day",
  Week: "week",
  Month: "month",
} as const;
export type SplitBy = (typeof SplitBy)[keyof typeof SplitBy] | (string & {});

export const splitBySchema: EnumSchema<SplitBy> = s.enumOf<SplitBy>(SplitBy);
