import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Agent-level reasoning effort used when a chat request omits its own. */
export const DefaultReasoningEffort3 = {
  None: "none",
  Low: "low",
  Medium: "medium",
  High: "high",
  Max: "max",
} as const;
export type DefaultReasoningEffort3 =
  | (typeof DefaultReasoningEffort3)[keyof typeof DefaultReasoningEffort3]
  | (string & {});

export const defaultReasoningEffort3Schema: EnumSchema<DefaultReasoningEffort3> =
  s.enumOf<DefaultReasoningEffort3>(DefaultReasoningEffort3);
