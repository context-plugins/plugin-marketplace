import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promptLlmConfig1Schema, type PromptLlmConfig1 } from "./prompt-llm-config1.js";
import { context1Schema, type Context1 } from "./unions/context1.js";
import { description2Schema, type Description2 } from "./unions/description2.js";
import { editCommentsSchema, type EditComments } from "./unions/edit-comments.js";
import { sessionEndToolIdSchema, type SessionEndToolId } from "./unions/session-end-tool-id.js";

/** Request model to update an existing prompt. */
export type PromptUpdateRequest = {
  /** The prompt name */
  name: string;
  /** The description of the prompt */
  description?: Description2;
  /** The type of the prompt */
  type: string;
  /** The prompt text that will be sent to the LLM at the beginning of the conversation */
  context?: Context1;
  /** Names of tools to which the prompt has access */
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
  /**
   * Whether to include the default tools (`hangup`) in the list of tools for the prompt (also
   * includes set_current_language if any of the agents assigned to the prompt have Dynamic Language
   * Switching enabled). If you remove one of the default tools from your prompt, you might want to
   * disable this option so that the tool is not added again when updated.
   *
   * @default true
   */
  includeDefaultTools?: boolean;
};

export const promptUpdateRequestSchema: Schema<PromptUpdateRequest> = s.object<PromptUpdateRequest>({
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
  includeDefaultTools: s.defaulted(s.boolean(), true),
  _keysMap: {
    llmConfig: "llm_config",
    sessionEndEnabled: "session_end_enabled",
    sessionEndToolId: "session_end_tool_id",
    editComments: "edit_comments",
    includeDefaultTools: "include_default_tools",
  },
});
