import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the Map Run. */
export const Status1 = {
  Running: "RUNNING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Aborted: "ABORTED",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
