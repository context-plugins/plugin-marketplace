import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Model for the LLM used in the conversation (see PromptResponse.llm_config.model) */
export type LlmModel = string;

export const llmModelSchema: Schema<LlmModel> = s.of<LlmModel>(s.union([s.string()]));
