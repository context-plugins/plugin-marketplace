import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConversationProperties = {
  Timestamp: "timestamp",
  AgentType: "agent_type",
  AgentId: "agent_id",
  AgentName: "agent_name",
  PromptId: "prompt_id",
  PromptName: "prompt_name",
  LlmProvider: "llm_provider",
  LlmModel: "llm_model",
  LlmVersion: "llm_version",
  IsLegacy: "is_legacy",
} as const;
export type ConversationProperties =
  | (typeof ConversationProperties)[keyof typeof ConversationProperties]
  | (string & {});

export const conversationPropertiesSchema: EnumSchema<ConversationProperties> =
  s.enumOf<ConversationProperties>(ConversationProperties);
