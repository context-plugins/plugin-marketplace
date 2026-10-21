import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Agent-level reasoning effort used when a chat request omits its own. Null when unset. */
export const DefaultReasoningEffort1 = {
  None: "none",
  Low: "low",
  Medium: "medium",
  High: "high",
  Max: "max",
} as const;
export type DefaultReasoningEffort1 =
  | (typeof DefaultReasoningEffort1)[keyof typeof DefaultReasoningEffort1]
  | (string & {});

export const defaultReasoningEffort1Schema: EnumSchema<DefaultReasoningEffort1> =
  s.enumOf<DefaultReasoningEffort1>(DefaultReasoningEffort1);
