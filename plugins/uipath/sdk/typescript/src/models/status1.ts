import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Initial status of the asynchronous job */
export const Status1 = {
  NotStarted: "NotStarted",
  Running: "Running",
  Failed: "Failed",
  Succeeded: "Succeeded",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
