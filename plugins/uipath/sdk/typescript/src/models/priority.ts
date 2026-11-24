import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Priority level for queue processing */
export const Priority = {
  Low: "Low",
  Normal: "Normal",
  High: "High",
} as const;
export type Priority = (typeof Priority)[keyof typeof Priority] | (string & {});

export const prioritySchema: EnumSchema<Priority> = s.enumOf<Priority>(Priority);
