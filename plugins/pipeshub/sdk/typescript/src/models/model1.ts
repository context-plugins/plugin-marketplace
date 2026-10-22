import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defaultReasoningEffort6Schema, type DefaultReasoningEffort6 } from "./default-reasoning-effort6.js";
import { modelTypeSchema, type ModelType } from "./model-type.js";

export type Model1 = {
  /** Model category — always matches the `{modelType}` path parameter. */
  modelType: ModelType;
  /**
   * Provider identifier as stored in configuration (e.g. `openAI`, `azureOpenAI`, `anthropic`,
   * `gemini`, `ollama`).
   */
  provider: string;
  /** Specific model name/identifier forwarded to the provider API when making inference calls. */
  modelName: string;
  /**
   * UUID that uniquely identifies the provider configuration entry this model was expanded from.
   * Use this key when calling update/delete endpoints.
   */
  modelKey: string;
  /**
   * `true` when this model accepts multi-modal inputs (text + images). Always present; defaults to
   * `false` when not explicitly set.
   */
  isMultimodal: boolean;
  /**
   * `true` when this is a reasoning / chain-of-thought model. Always present; defaults to `false`
   * when not explicitly set.
   */
  isReasoning: boolean;
  /**
   * `true` for the first model in the provider entry that was marked as default. At most one entry
   * per `modelType` will have this set to `true`.
   */
  isDefault: boolean;
  /**
   * Optional human-readable display name. Only present when the provider configuration entry
   * contains exactly one model name (not a comma-separated list) **and** a friendly name was added
   * during configuration.
   */
  modelFriendlyName?: string;
  /**
   * The model's own reasoning effort. It applies only when the chat request sets no
   * `reasoningEffort` and the agent has no `defaultReasoningEffort`; a level the user picks always
   * wins. Read from `configuration.defaultReasoningEffort`, falling back to a top-level
   * `defaultReasoningEffort`. Present on every model expanded from the entry, and left out when no
   * default is stored. `none` is a legacy value that runs as `low`.
   */
  defaultReasoningEffort?: DefaultReasoningEffort6;
};

export const model1Schema: Schema<Model1> = s.object<Model1>({
  modelType: modelTypeSchema,
  provider: s.string(),
  modelName: s.string(),
  modelKey: s.string(),
  isMultimodal: s.boolean(),
  isReasoning: s.boolean(),
  isDefault: s.boolean(),
  modelFriendlyName: s.optional(s.string()),
  defaultReasoningEffort: s.optional(s.lazy(() => defaultReasoningEffort6Schema)),
});
