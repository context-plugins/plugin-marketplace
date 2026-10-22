import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentIdSchema, type AgentId } from "./unions/agent-id.js";
import { agentNameSchema, type AgentName } from "./unions/agent-name.js";
import { agentTypeSchema, type AgentType } from "./unions/agent-type.js";
import { isLegacySchema, type IsLegacy } from "./unions/is-legacy.js";
import { llmModelSchema, type LlmModel } from "./unions/llm-model.js";
import { llmProviderSchema, type LlmProvider } from "./unions/llm-provider.js";
import { llmSeedSchema, type LlmSeed } from "./unions/llm-seed.js";
import { llmTemperatureSchema, type LlmTemperature } from "./unions/llm-temperature.js";
import { llmVersionSchema, type LlmVersion } from "./unions/llm-version.js";
import { promptIdSchema, type PromptId } from "./unions/prompt-id.js";
import { promptNameSchema, type PromptName } from "./unions/prompt-name.js";
import { promptVersionSchema, type PromptVersion } from "./unions/prompt-version.js";

/**
 * A conversation is a record of messages between a user and an agent, and is composed of one or
 * more sessions.
 */
export type Conversation = {
  /** Timestamp of the conversation */
  timestamp: Date;
  /** ID of the conversation */
  conversationId: string;
  /** ID of the agent with which the conversation occurred */
  agentId?: AgentId;
  /** Name of the agent with which the conversation occurred */
  agentName?: AgentName;
  /** Value of the "type" field of the agent with which the conversation occurred */
  agentType?: AgentType;
  /** ID of the prompt used in the conversation */
  promptId?: PromptId;
  /** Name of the prompt used in the conversation */
  promptName?: PromptName;
  /** Version of the prompt used in the conversation */
  promptVersion?: PromptVersion;
  /** Provider for the LLM used in the conversation (see PromptResponse.llm_config.provider) */
  llmProvider?: LlmProvider;
  /** Model for the LLM used in the conversation (see PromptResponse.llm_config.model) */
  llmModel?: LlmModel;
  /** Version for the LLM used in the conversation (see PromptResponse.llm_config.version) */
  llmVersion?: LlmVersion;
  /**
   * Temperature for the LLM used in the conversation (see PromptResponse.llm_config.temperature)
   */
  llmTemperature?: LlmTemperature;
  /**
   * Configured seed recorded for the conversation (see PromptResponse.llm_config.seed). Deprecated
   * by Syllable. This saved value does not establish the actual provider endpoint, whether seed was
   * sent or omitted on any attempt, or whether a provider honored it.
   */
  llmSeed?: LlmSeed;
  /** Whether the conversation occurred on the legacy Syllable system */
  isLegacy?: IsLegacy;
};

export const conversationSchema: Schema<Conversation> = s.object<Conversation>({
  timestamp: s.dateTime(),
  conversationId: s.string(),
  agentId: s.optional(s.lazy(() => agentIdSchema)),
  agentName: s.optional(s.lazy(() => agentNameSchema)),
  agentType: s.optional(s.lazy(() => agentTypeSchema)),
  promptId: s.optional(s.lazy(() => promptIdSchema)),
  promptName: s.optional(s.lazy(() => promptNameSchema)),
  promptVersion: s.optional(s.lazy(() => promptVersionSchema)),
  llmProvider: s.optional(s.lazy(() => llmProviderSchema)),
  llmModel: s.optional(s.lazy(() => llmModelSchema)),
  llmVersion: s.optional(s.lazy(() => llmVersionSchema)),
  llmTemperature: s.optional(s.lazy(() => llmTemperatureSchema)),
  llmSeed: s.optional(s.lazy(() => llmSeedSchema)),
  isLegacy: s.optional(s.lazy(() => isLegacySchema)),
  _keysMap: {
    conversationId: "conversation_id",
    agentId: "agent_id",
    agentName: "agent_name",
    agentType: "agent_type",
    promptId: "prompt_id",
    promptName: "prompt_name",
    promptVersion: "prompt_version",
    llmProvider: "llm_provider",
    llmModel: "llm_model",
    llmVersion: "llm_version",
    llmTemperature: "llm_temperature",
    llmSeed: "llm_seed",
    isLegacy: "is_legacy",
  },
});
