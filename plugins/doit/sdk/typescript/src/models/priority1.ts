import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Priority1 = {
  Low: "Low",
  Medium: "Medium",
  High: "High",
} as const;
export type Priority1 = (typeof Priority1)[keyof typeof Priority1] | (string & {});

export const priority1Schema: EnumSchema<Priority1> = s.enumOf<Priority1>(Priority1);
