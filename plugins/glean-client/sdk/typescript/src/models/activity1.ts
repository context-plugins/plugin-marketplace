import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Activity e.g. search, home page visit or all. */
export const Activity1 = {
  All: "ALL",
  Search: "SEARCH",
} as const;
export type Activity1 = (typeof Activity1)[keyof typeof Activity1] | (string & {});

export const activity1Schema: EnumSchema<Activity1> = s.enumOf<Activity1>(Activity1);
