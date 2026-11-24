import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Effort = {
  Low: "low",
  Medium: "medium",
  High: "high",
} as const;
export type Effort = (typeof Effort)[keyof typeof Effort] | (string & {});

export const effortSchema: EnumSchema<Effort> = s.enumOf<Effort>(Effort);
