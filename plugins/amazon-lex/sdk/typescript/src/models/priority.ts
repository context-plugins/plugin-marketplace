import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The priority level of the recommendation. Valid Values: High | Medium | Low */
export const Priority = {
  High: "High",
  Medium: "Medium",
  Low: "Low",
} as const;
export type Priority = (typeof Priority)[keyof typeof Priority] | (string & {});

export const prioritySchema: EnumSchema<Priority> = s.enumOf<Priority>(Priority);
