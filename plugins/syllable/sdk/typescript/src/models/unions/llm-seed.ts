import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Configured seed recorded for the conversation (see PromptResponse.llm_config.seed). Deprecated by
 * Syllable. This saved value does not establish the actual provider endpoint, whether seed was sent
 * or omitted on any attempt, or whether a provider honored it.
 */
export type LlmSeed = number;

export const llmSeedSchema: Schema<LlmSeed> = s.of<LlmSeed>(s.union([s.int()]));
