import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Target audience: "plain" (plain-language style for a general audience, the default), "elementary"
 * (~US grade 3-5), "middle_school" (~grade 6-8) or "high_school" (~grade 9-10).
 */
export const ReadingLevel = {
  Plain: "plain",
  Elementary: "elementary",
  MiddleSchool: "middle_school",
  HighSchool: "high_school",
} as const;
export type ReadingLevel = (typeof ReadingLevel)[keyof typeof ReadingLevel] | (string & {});

export const readingLevelSchema: EnumSchema<ReadingLevel> = s.enumOf<ReadingLevel>(ReadingLevel);
