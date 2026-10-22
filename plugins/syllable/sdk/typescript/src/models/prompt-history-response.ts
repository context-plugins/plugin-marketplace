import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { promptHistoryLinkedToolSchema, type PromptHistoryLinkedTool } from "./prompt-history-linked-tool.js";
import { comments6Schema, type Comments6 } from "./unions/comments6.js";
import { llmConfigSchema, type LlmConfig } from "./unions/llm-config.js";
import { promptDescriptionSchema, type PromptDescription } from "./unions/prompt-description.js";
import { sessionEndTool1Schema, type SessionEndTool1 } from "./unions/session-end-tool1.js";
import { validationIssues6Schema, type ValidationIssues6 } from "./unions/validation-issues6.js";

/**
 * A historical prompt version, with the lifecycle of the model it was pinned to.
 *
 * Agents pinned to an old version run that version's model, so a retired model in the history is as
 * much of a problem as one on the current version.
 */
export type PromptHistoryResponse = {
  /** Timestamp of the change resulting in this version */
  timestamp: Date;
  /** ID of the prompt */
  promptId: string;
  /**
   * Version number of this version. Starts at 1 when prompt is created, and incremented on each
   * change.
   */
  versionNumber: number;
  /** Text of the prompt at this version */
  promptText: string;
  /** Description of the prompt at this version */
  promptDescription?: PromptDescription;
  /** Name of the prompt at this version */
  promptName: string;
  /** Saved LLM configuration for the prompt at this version */
  llmConfig?: LlmConfig;
  /** Comments describing the change that resulted in this version */
  comments?: Comments6;
  /** Email address of the user who made the change that resulted in this version */
  userEmail: string;
  /** Tools that were linked to this version of the prompt */
  linkedTools?: PromptHistoryLinkedTool[];
  /** Session end tool that was configured on this version of the prompt, if any */
  sessionEndTool?: SessionEndTool1;
  /**
   * Whether this version of the prompt was created before history of tool-prompt linking was
   * tracked
   */
  isPreEnhancements: boolean;
  /**
   * Current model lifecycle and seed policy findings for this historical version.
   * llm-seed-deprecated points to $.llm_config.seed when configured, including zero; unset/null
   * seed does not produce a warning. Saved Anthropic seed values also return llm-seed-unsupported.
   * These findings do not establish the endpoint or seed handling of historical requests.
   */
  validationIssues?: ValidationIssues6;
};

export const promptHistoryResponseSchema: Schema<PromptHistoryResponse> = s.object<PromptHistoryResponse>({
  timestamp: s.dateTime(),
  promptId: s.string(),
  versionNumber: s.int(),
  promptText: s.string(),
  promptDescription: s.optional(s.lazy(() => promptDescriptionSchema)),
  promptName: s.string(),
  llmConfig: s.optional(s.lazy(() => llmConfigSchema)),
  comments: s.optional(s.lazy(() => comments6Schema)),
  userEmail: s.string(),
  linkedTools: s.optional(s.array(s.lazy(() => promptHistoryLinkedToolSchema))),
  sessionEndTool: s.optional(s.lazy(() => sessionEndTool1Schema)),
  isPreEnhancements: s.boolean(),
  validationIssues: s.optional(s.lazy(() => validationIssues6Schema)),
  _keysMap: {
    promptId: "prompt_id",
    versionNumber: "version_number",
    promptText: "prompt_text",
    promptDescription: "prompt_description",
    promptName: "prompt_name",
    llmConfig: "llm_config",
    userEmail: "user_email",
    linkedTools: "linked_tools",
    sessionEndTool: "session_end_tool",
    isPreEnhancements: "is_pre_enhancements",
    validationIssues: "validation_issues",
  },
});
