import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The model's own reasoning effort, read from its stored configuration. It applies only when the
 * chat request sets no `reasoningEffort` and the agent has no `defaultReasoningEffort`. Omitted
 * when nothing valid is stored; `none` is a legacy value that runs as `low`.
 */
export const DefaultReasoningEffort = {
  None: "none",
  Low: "low",
  Medium: "medium",
  High: "high",
  Max: "max",
} as const;
export type DefaultReasoningEffort =
  | (typeof DefaultReasoningEffort)[keyof typeof DefaultReasoningEffort]
  | (string & {});

export const defaultReasoningEffortSchema: EnumSchema<DefaultReasoningEffort> =
  s.enumOf<DefaultReasoningEffort>(DefaultReasoningEffort);
