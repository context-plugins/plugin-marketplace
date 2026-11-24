import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Upcoming = {
  All: "all",
  Only: "only",
  Without: "without",
} as const;
export type Upcoming = (typeof Upcoming)[keyof typeof Upcoming] | (string & {});

export const upcomingSchema: EnumSchema<Upcoming> = s.enumOf<Upcoming>(Upcoming);
