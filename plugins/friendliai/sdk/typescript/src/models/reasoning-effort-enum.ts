import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Sets how much reasoning the model does before answering.
 *
 * This affects reasoning models only, and the available options depend on the model.
 */
export const ReasoningEffortEnum = {
  Minimal: "minimal",
  Low: "low",
  Medium: "medium",
  High: "high",
  Xhigh: "xhigh",
  Max: "max",
  Ultracode: "ultracode",
} as const;
export type ReasoningEffortEnum =
  | (typeof ReasoningEffortEnum)[keyof typeof ReasoningEffortEnum]
  | (string & {});

export const reasoningEffortEnumSchema: EnumSchema<ReasoningEffortEnum> =
  s.enumOf<ReasoningEffortEnum>(ReasoningEffortEnum);
