import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of source to evict: `task`, `monitor`, or `findall`. */
export const Kind3 = {
  Task: "task",
  Monitor: "monitor",
  Findall: "findall",
} as const;
export type Kind3 = (typeof Kind3)[keyof typeof Kind3] | (string & {});

export const kind3Schema: EnumSchema<Kind3> = s.enumOf<Kind3>(Kind3);
