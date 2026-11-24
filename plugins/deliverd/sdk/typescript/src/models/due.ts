import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Return only schedules waiting on a publish */
export const Due = {
  _1: "1",
} as const;
export type Due = (typeof Due)[keyof typeof Due] | (string & {});

export const dueSchema: EnumSchema<Due> = s.enumOf<Due>(Due);
