import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Effort = {
  Minimal: "minimal",
  Low: "low",
  Medium: "medium",
  High: "high",
  Xhigh: "xhigh",
  Max: "max",
  Ultracode: "ultracode",
} as const;
export type Effort = (typeof Effort)[keyof typeof Effort] | (string & {});

export const effortSchema: EnumSchema<Effort> = s.enumOf<Effort>(Effort);
