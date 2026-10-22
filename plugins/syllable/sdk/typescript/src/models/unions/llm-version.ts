import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Version for the LLM used in the conversation (see PromptResponse.llm_config.version) */
export type LlmVersion = string;

export const llmVersionSchema: Schema<LlmVersion> = s.of<LlmVersion>(s.union([s.string()]));
