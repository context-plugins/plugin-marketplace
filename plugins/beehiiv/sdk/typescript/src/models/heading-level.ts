import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The level of the header. */
export const HeadingLevel = {
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
  _5: "5",
  _6: "6",
} as const;
export type HeadingLevel = (typeof HeadingLevel)[keyof typeof HeadingLevel] | (string & {});

export const headingLevelSchema: EnumSchema<HeadingLevel> = s.enumOf<HeadingLevel>(HeadingLevel);
