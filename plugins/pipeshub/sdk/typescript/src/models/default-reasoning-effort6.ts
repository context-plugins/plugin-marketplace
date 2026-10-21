import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The model's own reasoning effort. It applies only when the chat request sets no `reasoningEffort`
 * and the agent has no `defaultReasoningEffort`; a level the user picks always wins. Read from
 * `configuration.defaultReasoningEffort`, falling back to a top-level `defaultReasoningEffort`.
 * Present on every model expanded from the entry, and left out when no default is stored. `none` is
 * a legacy value that runs as `low`.
 */
export const DefaultReasoningEffort6 = {
  None: "none",
  Low: "low",
  Medium: "medium",
  High: "high",
  Max: "max",
} as const;
export type DefaultReasoningEffort6 =
  | (typeof DefaultReasoningEffort6)[keyof typeof DefaultReasoningEffort6]
  | (string & {});

export const defaultReasoningEffort6Schema: EnumSchema<DefaultReasoningEffort6> =
  s.enumOf<DefaultReasoningEffort6>(DefaultReasoningEffort6);
