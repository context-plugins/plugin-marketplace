import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { promptLlmConfigSchema, type PromptLlmConfig } from "../prompt-llm-config.js";

/** Saved LLM configuration for the prompt at this version */
export type LlmConfig = PromptLlmConfig;

export const llmConfigSchema: Schema<LlmConfig> = s.of<LlmConfig>(
  s.union([s.lazy(() => promptLlmConfigSchema)]),
);
