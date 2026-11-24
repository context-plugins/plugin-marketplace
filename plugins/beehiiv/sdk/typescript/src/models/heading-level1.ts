import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The level of the header (e.g., 1, 2, 3, etc.). */
export const HeadingLevel1 = {
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
  _5: "5",
  _6: "6",
} as const;
export type HeadingLevel1 = (typeof HeadingLevel1)[keyof typeof HeadingLevel1] | (string & {});

export const headingLevel1Schema: EnumSchema<HeadingLevel1> = s.enumOf<HeadingLevel1>(HeadingLevel1);
