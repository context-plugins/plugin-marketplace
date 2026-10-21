import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentCreateKnowledgeSchema, type AgentCreateKnowledge } from "./agent-create-knowledge.js";
import { agentCreateToolsetSchema, type AgentCreateToolset } from "./agent-create-toolset.js";
import { agentSkillAssignmentSchema, type AgentSkillAssignment } from "./agent-skill-assignment.js";
import { defaultReasoningEffort3Schema, type DefaultReasoningEffort3 } from "./default-reasoning-effort3.js";
import {
  agentCreateModelEntry1Schema,
  type AgentCreateModelEntry1,
} from "./unions/agent-create-model-entry1.js";
import {
  agentCreateWebSearch1Schema,
  type AgentCreateWebSearch1,
} from "./unions/agent-create-web-search1.js";

/**
 * Partial update payload for `PUT /agents/{agentKey}`.
 *
 * Every field is optional — only the fields present in the request body are updated. `models` may
 * be omitted, set to an empty array to clear the agent's models (reverting it to the organization's
 * default LLM at chat time), or set to a non-empty array. When a non-empty array is provided, the
 * gateway Zod middleware (mirroring the Python backend) requires at least one object entry with
 * `isReasoning: true`.
 */
export type AgentUpdateRequest = {
  /** Agent display name */
  name?: string;
  /** What the agent does */
  description?: string;
  /** Initial greeting shown when conversation starts */
  startMessage?: string;
  /** System instructions for the agent */
  systemPrompt?: string;
  /** Additional agent execution instructions */
  instructions?: string;
  /**
   * Agent model configuration entries. Optional. An empty array clears the agent's models so it
   * falls back to the organization's default LLM. When a non-empty array is present, the Zod
   * middleware requires at least one object entry with `isReasoning: true`. String-only arrays are
   * schema-valid but rejected at runtime with HTTP 400 unless empty.
   */
  models?: AgentCreateModelEntry1[];
  tags?: string[];
  /** Share agent with the organization @default false */
  shareWithOrg?: boolean;
  /** Mark agent as a service account @default false */
  isServiceAccount?: boolean;
  /** Toolsets attached to the agent (instance-aware) */
  toolsets?: AgentCreateToolset[];
  /** Knowledge sources connected to the agent */
  knowledge?: AgentCreateKnowledge[];
  /**
   * Complete replacement set of skills assigned to the agent. Send an empty array to clear all
   * skill assignments.
   */
  skills?: AgentSkillAssignment[];
  /**
   * Web-search attachment for an agent. Accepts a provider string, an object with at least a
   * `provider` field, or `null`.
   */
  webSearch?: AgentCreateWebSearch1;
  /** Agent-level reasoning effort used when a chat request omits its own. */
  defaultReasoningEffort?: DefaultReasoningEffort3 | null;
  /**
   * When true (default), include the current user's name, email, and organization in this agent's
   * system prompt. When false, omit that profile data.
   */
  sendUserContext?: boolean;
};

export const agentUpdateRequestSchema: Schema<AgentUpdateRequest> = s.object<AgentUpdateRequest>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  startMessage: s.optional(s.string()),
  systemPrompt: s.optional(s.string()),
  instructions: s.optional(s.string()),
  models: s.optional(s.array(s.lazy(() => agentCreateModelEntry1Schema))),
  tags: s.optional(s.array(s.string())),
  shareWithOrg: s.defaulted(s.boolean(), false),
  isServiceAccount: s.defaulted(s.boolean(), false),
  toolsets: s.optional(s.array(s.lazy(() => agentCreateToolsetSchema))),
  knowledge: s.optional(s.array(s.lazy(() => agentCreateKnowledgeSchema))),
  skills: s.optional(s.array(s.lazy(() => agentSkillAssignmentSchema))),
  webSearch: s.optional(s.lazy(() => agentCreateWebSearch1Schema)),
  defaultReasoningEffort: s.optionalNullable(s.lazy(() => defaultReasoningEffort3Schema)),
  sendUserContext: s.optional(s.boolean()),
});
