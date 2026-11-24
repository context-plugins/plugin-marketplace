import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Priority of the alert. */
export const Priority = {
  P1: "P1",
  P2: "P2",
  P3: "P3",
  P4: "P4",
  P5: "P5",
} as const;
export type Priority = (typeof Priority)[keyof typeof Priority] | (string & {});

export const prioritySchema: EnumSchema<Priority> = s.enumOf<Priority>(Priority);
