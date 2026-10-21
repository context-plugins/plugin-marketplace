import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request model to create/update an insight tool configuration. */
export type InsightToolInput = {
  /** Human readable name of insight tool */
  name: string;
  /** Text description of insight tool configuration */
  description: string;
  /** Version number of insight tool configuration */
  version: number;
  /**
   * Arguments for calling the insight tool. LLM tools carry their configuration in llm_config. Its
   * optional integer seed is deprecated by Syllable and should be left unset for new
   * configurations. Seed does not guarantee identical responses; support depends on provider, model
   * and endpoint. OpenAI/Azure Responses and Anthropic sampling do not support seed. Configured
   * values (including zero) produce nonblocking llm-seed-deprecated findings at
   * $.tool_arguments.llm_config.seed in configuration responses. Unset/null values do not. Saved
   * values do not establish past request handling.
   */
  toolArguments: Record<string, unknown>;
  /** Internal ID for the definition used by the insight tool configuration */
  insightToolDefinitionId: number;
};

export const insightToolInputSchema: Schema<InsightToolInput> = s.object<InsightToolInput>({
  name: s.string(),
  description: s.string(),
  version: s.int(),
  toolArguments: s.record(s.string(), s.unknown()),
  insightToolDefinitionId: s.int(),
  _keysMap: {
    toolArguments: "tool_arguments",
    insightToolDefinitionId: "insight_tool_definition_id",
  },
});
