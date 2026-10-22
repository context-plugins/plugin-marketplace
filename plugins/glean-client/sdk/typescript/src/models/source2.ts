import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Where the feedback of the workflow originated from */
export const Source2 = {
  ZeroState: "ZERO_STATE",
  Library: "LIBRARY",
  Homepage: "HOMEPAGE",
} as const;
export type Source2 = (typeof Source2)[keyof typeof Source2] | (string & {});

export const source2Schema: EnumSchema<Source2> = s.enumOf<Source2>(Source2);
