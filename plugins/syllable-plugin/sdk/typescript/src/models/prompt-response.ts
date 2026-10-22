import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promptLlmConfig1Schema, type PromptLlmConfig1 } from "./prompt-llm-config1.js";
import { agentCountSchema, type AgentCount } from "./unions/agent-count.js";
import { context1Schema, type Context1 } from "./unions/context1.js";
import { description2Schema, type Description2 } from "./unions/description2.js";
import { editCommentsSchema, type EditComments } from "./unions/edit-comments.js";
import { lastUpdatedBy1Schema, type LastUpdatedBy1 } from "./unions/last-updated-by1.js";
import { lastUpdatedSchema, type LastUpdated } from "./unions/last-updated.js";
import { sessionEndToolIdSchema, type SessionEndToolId } from "./unions/session-end-tool-id.js";
import { sessionEndToolSchema, type SessionEndTool } from "./unions/session-end-tool.js";
import { toolsFullSchema, type ToolsFull } from "./unions/tools-full.js";
import { validationIssues1Schema, type ValidationIssues1 } from "./unions/validation-issues1.js";
import { versionNumberSchema, type VersionNumber } from "./unions/version-number.js";

/**
 * Response model for prompt operations. A prompt defines the behavior of an agent by delivering
 * instructions to the LLM about how the agent should behave. A prompt can be linked to one or more
 * agents. A prompt can also be linked to tools to allow an agent using it to use those tools. For
 * more information, see [Console docs](https://docs.syllable.ai/Resources/Prompts).
 */
export type PromptResponse = {
  /** The prompt name */
  name: string;
  /** The description of the prompt */
  description?: Description2;
  /** The type of the prompt */
  type: string;
  /** The prompt text that will be sent to the LLM at the beginning of the conversation */
  context?: Context1;
  /**
   * Names of the tools to which the prompt has access (DEPRECATED - use information from full tools
   * field instead)
   *
   * @deprecated
   */
  tools?: string[];
  /** The configuration for the LLM that the prompt uses */
  llmConfig: PromptLlmConfig1;
  /** Whether session end functionality is enabled for this prompt @default false */
  sessionEndEnabled?: boolean;
  /** ID of the optional session end tool associated with the prompt */
  sessionEndToolId?: SessionEndToolId;
  /** The comments for the most recent edit to the prompt */
  editComments?: EditComments;
  /** The internal ID of the prompt */
  id: number;
  /** The last updated date of the prompt */
  lastUpdated: LastUpdated;
  /** Email address of the user who most recently updated the prompt */
  lastUpdatedBy?: LastUpdatedBy1;
  /** The session end tool associated with the prompt */
  sessionEndTool?: SessionEndTool;
  /** The number of agents using the prompt */
  agentCount?: AgentCount;
  /** The version number of the current version of the prompt */
  versionNumber?: VersionNumber;
  /** Full definitions of tools to which the prompt has access */
  toolsFull?: ToolsFull;
  /**
   * Current findings for the saved prompt. Configured seed (including zero) returns
   * llm-seed-deprecated at $.llm_config.seed; unset/null seed does not. Seed warnings do not block
   * saves or establish past request handling. Saved Anthropic seed values also return
   * llm-seed-unsupported; existing save restrictions still apply. Model lifecycle findings are also
   * included; retired models block saves but can appear on reads. Findings are populated by
   * standalone Prompt saves and full list/detail reads. Explicitly projected lists and prompts
   * embedded in Agent or Channel responses can omit findings; their absence does not establish that
   * seed is unset or supported.
   */
  validationIssues?: ValidationIssues1;
};

export const promptResponseSchema: Schema<PromptResponse> = s.object<PromptResponse>({
  name: s.string(),
  description: s.optional(s.lazy(() => description2Schema)),
  type: s.string(),
  context: s.optional(s.lazy(() => context1Schema)),
  tools: s.optional(s.array(s.string())),
  llmConfig: promptLlmConfig1Schema,
  sessionEndEnabled: s.defaulted(s.boolean(), false),
  sessionEndToolId: s.optional(s.lazy(() => sessionEndToolIdSchema)),
  editComments: s.optional(s.lazy(() => editCommentsSchema)),
  id: s.int(),
  lastUpdated: lastUpdatedSchema,
  lastUpdatedBy: s.optional(s.lazy(() => lastUpdatedBy1Schema)),
  sessionEndTool: s.optional(s.lazy(() => sessionEndToolSchema)),
  agentCount: s.optional(s.lazy(() => agentCountSchema)),
  versionNumber: s.optional(s.lazy(() => versionNumberSchema)),
  toolsFull: s.optional(s.lazy(() => toolsFullSchema)),
  validationIssues: s.optional(s.lazy(() => validationIssues1Schema)),
  _keysMap: {
    llmConfig: "llm_config",
    sessionEndEnabled: "session_end_enabled",
    sessionEndToolId: "session_end_tool_id",
    editComments: "edit_comments",
    lastUpdated: "last_updated",
    lastUpdatedBy: "last_updated_by",
    sessionEndTool: "session_end_tool",
    agentCount: "agent_count",
    versionNumber: "version_number",
    toolsFull: "tools_full",
    validationIssues: "validation_issues",
  },
});
