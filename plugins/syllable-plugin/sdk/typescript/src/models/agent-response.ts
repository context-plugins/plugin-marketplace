import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentToolDefaultsSchema, type AgentToolDefaults } from "./agent-tool-defaults.js";
import { bridgePhrasesIdSchema, type BridgePhrasesId } from "./unions/bridge-phrases-id.js";
import { channelTargetsSchema, type ChannelTargets } from "./unions/channel-targets.js";
import { customMessageIdSchema, type CustomMessageId } from "./unions/custom-message-id.js";
import { customMessageSchema, type CustomMessage } from "./unions/custom-message.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { labelSchema, type Label } from "./unions/label.js";
import { labelsSchema, type Labels } from "./unions/labels.js";
import { languageGroupIdSchema, type LanguageGroupId } from "./unions/language-group-id.js";
import { languageGroupSchema, type LanguageGroup } from "./unions/language-group.js";
import { lastUpdatedBySchema, type LastUpdatedBy } from "./unions/last-updated-by.js";
import { promptVersionNumberSchema, type PromptVersionNumber } from "./unions/prompt-version-number.js";
import { promptSchema, type Prompt } from "./unions/prompt.js";
import { sttProviderSchema, type SttProvider } from "./unions/stt-provider.js";
import { toolHeadersSchema, type ToolHeaders } from "./unions/tool-headers.js";
import { toolsSchema, type Tools } from "./unions/tools.js";
import { validationIssues3Schema, type ValidationIssues3 } from "./unions/validation-issues3.js";
import { waitSoundSchema, type WaitSound } from "./unions/wait-sound.js";

/**
 * Response model for agent operations. When a user interacts with the Syllable system, they do so
 * by communicating with an agent. An agent is linked to a prompt, a custom message, and one or more
 * channel targets to define its behavior and capabilities. For more information, see [Console
 * docs](https://docs.syllable.ai/workspaces/Agents).
 */
export type AgentResponse = {
  /** The agent name */
  name: string;
  /** The agent description */
  description?: Description;
  /**
   * The agent label (DEPRECATED - use labels instead.)
   *
   * @deprecated
   */
  label?: Label;
  /** The agent labels */
  labels?: Labels;
  /** The agent type. Must be "ca_v1" currently. */
  type: string;
  /** ID of the prompt associated with the agent */
  promptId: number;
  /**
   * Optional pin to a specific version of the prompt (prompt history version number). When omitted
   * or null, the agent tracks the latest/current version of the prompt. When set, the agent runs
   * that specific prompt version. Must reference an existing version of the agent's prompt.
   */
  promptVersionNumber?: PromptVersionNumber;
  /**
   * Internal ID of the custom message that should be delivered at the beginning of a conversation
   * with the agent
   */
  customMessageId?: CustomMessageId;
  /** Internal ID of the language group associated with the agent */
  languageGroupId?: LanguageGroupId;
  /** Internal ID of the bridge phrases config associated with the agent */
  bridgePhrasesId?: BridgePhrasesId;
  /** The time zone in which the agent operates */
  timezone: string;
  /**
   * Agent-level static parameter values for the agent's tools, overriding any tool-level defaults
   */
  promptToolDefaults?: AgentToolDefaults[];
  /**
   * BCP 47 codes of languages the agent supports. (DEPRECATED - pass an empty list here and use
   * language group ID to link agent to a language group instead.)
   *
   * @deprecated
   */
  languages?: string[];
  /**
   * Custom context variables for the conversation session. Keys should be prefixed with "vars.".
   */
  variables: Record<string, string>;
  /**
   * Optional headers to include in tool calls for agent. (It is discouraged to use this field for
   * "Authorization" headers, as values here are not encrypted. Instead, set up a service with
   * either basic, bearer, or custom header auth; attach the appropriate tools to that service, and
   * the attached tools will automatically use the auth configured on the service.)
   */
  toolHeaders: ToolHeaders;
  /**
   * Whether the agent initiates conversation with a user after the custom_message is delivered
   *
   * @default false
   */
  agentInitiated?: boolean;
  /** Speech-to-text provider for the agent. */
  sttProvider?: SttProvider;
  /** Sound to play while waiting for a response from the LLM. */
  waitSound?: WaitSound;
  /**
   * Enables Dynamic Language Switching - when true and a voice group is configured, callers may
   * switch among group languages by speaking at any point in the conversation (in addition to DTMF
   * in response to the language menu).
   *
   * @default false
   */
  enableVerbalLanguageChange?: boolean;
  /** Internal ID of the agent */
  id: number;
  /** Timestamp of most recent update */
  updatedAt: Date;
  /** Email of the user who last updated the agent */
  lastUpdatedBy: LastUpdatedBy;
  /** The prompt associated with the agent. */
  prompt?: Prompt;
  /**
   * The message associated with the agent. Will be delivered as a greeting at the beginning of a
   * conversation.
   */
  customMessage?: CustomMessage;
  /** Channel targets associated with the agent */
  channelTargets?: ChannelTargets;
  /** Tools associated with the agent */
  tools?: Tools;
  /** The language group associated with the agent */
  languageGroup?: LanguageGroup;
  /**
   * Non-blocking findings for the saved agent (e.g. a deprecated STT provider warning). Warnings
   * and infos are informational; errors block the save.
   */
  validationIssues?: ValidationIssues3;
};

export const agentResponseSchema: Schema<AgentResponse> = s.object<AgentResponse>({
  name: s.string(),
  description: s.optional(s.lazy(() => descriptionSchema)),
  label: s.optional(s.lazy(() => labelSchema)),
  labels: s.optional(s.lazy(() => labelsSchema)),
  type: s.string(),
  promptId: s.int(),
  promptVersionNumber: s.optional(s.lazy(() => promptVersionNumberSchema)),
  customMessageId: s.optional(s.lazy(() => customMessageIdSchema)),
  languageGroupId: s.optional(s.lazy(() => languageGroupIdSchema)),
  bridgePhrasesId: s.optional(s.lazy(() => bridgePhrasesIdSchema)),
  timezone: s.string(),
  promptToolDefaults: s.optional(s.array(s.lazy(() => agentToolDefaultsSchema))),
  languages: s.optional(s.array(s.string())),
  variables: s.record(s.string(), s.string()),
  toolHeaders: toolHeadersSchema,
  agentInitiated: s.defaulted(s.boolean(), false),
  sttProvider: s.optional(s.lazy(() => sttProviderSchema)),
  waitSound: s.optional(s.lazy(() => waitSoundSchema)),
  enableVerbalLanguageChange: s.defaulted(s.boolean(), false),
  id: s.int(),
  updatedAt: s.dateTime(),
  lastUpdatedBy: lastUpdatedBySchema,
  prompt: s.optional(s.lazy(() => promptSchema)),
  customMessage: s.optional(s.lazy(() => customMessageSchema)),
  channelTargets: s.optional(s.lazy(() => channelTargetsSchema)),
  tools: s.optional(s.lazy(() => toolsSchema)),
  languageGroup: s.optional(s.lazy(() => languageGroupSchema)),
  validationIssues: s.optional(s.lazy(() => validationIssues3Schema)),
  _keysMap: {
    promptId: "prompt_id",
    promptVersionNumber: "prompt_version_number",
    customMessageId: "custom_message_id",
    languageGroupId: "language_group_id",
    bridgePhrasesId: "bridge_phrases_id",
    promptToolDefaults: "prompt_tool_defaults",
    toolHeaders: "tool_headers",
    agentInitiated: "agent_initiated",
    sttProvider: "stt_provider",
    waitSound: "wait_sound",
    enableVerbalLanguageChange: "enable_verbal_language_change",
    updatedAt: "updated_at",
    lastUpdatedBy: "last_updated_by",
    customMessage: "custom_message",
    channelTargets: "channel_targets",
    languageGroup: "language_group",
    validationIssues: "validation_issues",
  },
});
