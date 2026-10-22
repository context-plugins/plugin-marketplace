import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Temperature for the LLM used in the conversation (see PromptResponse.llm_config.temperature) */
export type LlmTemperature = number;

export const llmTemperatureSchema: Schema<LlmTemperature> = s.of<LlmTemperature>(s.union([s.float64()]));
