import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the message. One of `in_progress`, `completed`, or `incomplete`. */
export const Status4 = {
  InProgress: "in_progress",
  Completed: "completed",
  Incomplete: "incomplete",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
