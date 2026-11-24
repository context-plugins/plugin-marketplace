import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Level1 = {
  High: "HIGH",
  Medium: "MEDIUM",
  Low: "LOW",
  VeryLow: "VERY LOW",
} as const;
export type Level1 = (typeof Level1)[keyof typeof Level1] | (string & {});

export const level1Schema: EnumSchema<Level1> = s.enumOf<Level1>(Level1);
