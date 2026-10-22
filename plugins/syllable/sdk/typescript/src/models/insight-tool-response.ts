import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  insightToolDefinition1Schema,
  type InsightToolDefinition1,
} from "./unions/insight-tool-definition1.js";
import { validationIssues4Schema, type ValidationIssues4 } from "./unions/validation-issues4.js";

/** Response model for insight tool saves, carrying any non-blocking findings. */
export type InsightToolResponse = {
  /** Human readable name of insight tool */
  name: string;
  /** Text description of insight tool configuration */
  description: string;
  /** Version of insight tool */
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
  /** Unique ID for insight tool definition used by this tool configuration */
  insightToolDefinitionId: number;
  /** Unique ID for insight tool */
  id: number;
  /** Insight Tool Definition */
  insightToolDefinition?: InsightToolDefinition1;
  /** Timestamp of at which insight tool configuration was created */
  createdAt?: Date;
  /** Timestamp at which insight tool configuration was last updated */
  updatedAt?: Date;
  /** Email of user who last updated insight tool configuration */
  lastUpdatedBy: string;
  /**
   * Current findings for the saved insight tool. Configured seed (including zero) returns
   * llm-seed-deprecated at $.tool_arguments.llm_config.seed; unset/null seed does not. Known
   * Anthropic seed restrictions are reported separately as llm-seed-unsupported. Seed warnings do
   * not block saves or establish past request handling. Model lifecycle findings are also included;
   * retired models block saves but can appear on reads. Explicitly projected lists can omit
   * findings; their absence does not establish that seed is unset or supported.
   */
  validationIssues?: ValidationIssues4;
};

export const insightToolResponseSchema: Schema<InsightToolResponse> = s.object<InsightToolResponse>({
  name: s.string(),
  description: s.string(),
  version: s.int(),
  toolArguments: s.record(s.string(), s.unknown()),
  insightToolDefinitionId: s.int(),
  id: s.int(),
  insightToolDefinition: s.optional(s.lazy(() => insightToolDefinition1Schema)),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  lastUpdatedBy: s.string(),
  validationIssues: s.optional(s.lazy(() => validationIssues4Schema)),
  _keysMap: {
    toolArguments: "tool_arguments",
    insightToolDefinitionId: "insight_tool_definition_id",
    insightToolDefinition: "insight_tool_definition",
    createdAt: "created_at",
    updatedAt: "updated_at",
    lastUpdatedBy: "last_updated_by",
    validationIssues: "validation_issues",
  },
});
