import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of session fields supported for filtering/sorting on list endpoint. */
export const SessionProperties = {
  Timestamp: "timestamp",
  SessionId: "session_id",
  ConversationId: "conversation_id",
  ChannelManagerService: "channel_manager_service",
  ChannelManagerType: "channel_manager_type",
  ChannelManagerSid: "channel_manager_sid",
  AgentType: "agent_type",
  AgentId: "agent_id",
  AgentName: "agent_name",
  PromptId: "prompt_id",
  PromptName: "prompt_name",
  ExperimentId: "experiment_id",
  ExperimentVariantId: "experiment_variant_id",
  Source: "source",
  Target: "target",
  Duration: "duration",
  IsOutbound: "is_outbound",
  IsLegacy: "is_legacy",
  IsTest: "is_test",
} as const;
export type SessionProperties = (typeof SessionProperties)[keyof typeof SessionProperties] | (string & {});

export const sessionPropertiesSchema: EnumSchema<SessionProperties> =
  s.enumOf<SessionProperties>(SessionProperties);
