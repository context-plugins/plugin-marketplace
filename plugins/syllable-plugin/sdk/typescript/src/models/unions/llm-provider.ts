import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Provider for the LLM used in the conversation (see PromptResponse.llm_config.provider) */
export type LlmProvider = string;

export const llmProviderSchema: Schema<LlmProvider> = s.of<LlmProvider>(s.union([s.string()]));
