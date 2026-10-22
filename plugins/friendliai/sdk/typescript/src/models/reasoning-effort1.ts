import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReasoningEffort1 = {
  Minimal: "minimal",
  Low: "low",
  Medium: "medium",
  High: "high",
  Xhigh: "xhigh",
  Max: "max",
  Ultracode: "ultracode",
} as const;
export type ReasoningEffort1 = (typeof ReasoningEffort1)[keyof typeof ReasoningEffort1] | (string & {});

export const reasoningEffort1Schema: EnumSchema<ReasoningEffort1> =
  s.enumOf<ReasoningEffort1>(ReasoningEffort1);
