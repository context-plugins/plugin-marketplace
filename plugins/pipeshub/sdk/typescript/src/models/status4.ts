import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status4 = {
  None: "None",
  Inprogress: "Inprogress",
  Complete: "Complete",
  Failed: "Failed",
  Stopped: "Stopped",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
