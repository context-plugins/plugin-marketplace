import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of this report. */
export const Status4 = {
  Generating: "GENERATING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Incomplete: "INCOMPLETE",
  Deleting: "DELETING",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
