import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defaultReasoningEffortSchema, type DefaultReasoningEffort } from "./default-reasoning-effort.js";

export type Model = {
  modelKey?: string;
  modelName?: string;
  provider?: string;
  isReasoning?: boolean;
  isMultimodal?: boolean;
  isDefault?: boolean;
  /**
   * Model category. Must be `llm` for agent model entries (same value as `ModelType` for LLMs;
   * string only — enum is not used here).
   */
  modelType?: string;
  modelFriendlyName?: string;
  /**
   * The model's own reasoning effort, read from its stored configuration. It applies only when the
   * chat request sets no `reasoningEffort` and the agent has no `defaultReasoningEffort`. Omitted
   * when nothing valid is stored; `none` is a legacy value that runs as `low`.
   */
  defaultReasoningEffort?: DefaultReasoningEffort;
};

export const modelSchema: Schema<Model> = s.object<Model>({
  modelKey: s.optional(s.string()),
  modelName: s.optional(s.string()),
  provider: s.optional(s.string()),
  isReasoning: s.optional(s.boolean()),
  isMultimodal: s.optional(s.boolean()),
  isDefault: s.optional(s.boolean()),
  modelType: s.optional(s.string()),
  modelFriendlyName: s.optional(s.string()),
  defaultReasoningEffort: s.optional(s.lazy(() => defaultReasoningEffortSchema)),
});
