import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current stage of the IPO */
export const Status1 = {
  Open: "open",
  Closed: "closed",
  Listed: "listed",
  Upcoming: "upcoming",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
