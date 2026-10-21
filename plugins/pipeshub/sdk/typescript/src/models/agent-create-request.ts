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

export type AgentCreateRequest = {
  /** Agent display name */
  name: string;
  /** What the agent does */
  description?: string;
  /** Initial greeting shown when conversation starts */
  startMessage?: string;
  /** System instructions for the agent */
  systemPrompt?: string;
  /** Additional agent execution instructions */
  instructions?: string;
  /**
   * Agent model configuration entries. Optional — an agent created without any models (an empty
   * array or an omitted field) uses the organization's default LLM at chat time. When at least one
   * model entry IS provided, the gateway requires at least one object entry with `isReasoning:
   * true`. String-only arrays are schema-valid but rejected at runtime with HTTP 400 unless the
   * array is empty.
   */
  models?: AgentCreateModelEntry1[];
  tags?: string[];
  /** Share agent with the organization @default false */
  shareWithOrg?: boolean;
  /** Create the agent as a service-account agent @default false */
  isServiceAccount?: boolean;
  /** Toolsets attached to the agent (instance-aware) */
  toolsets?: AgentCreateToolset[];
  /** Knowledge sources connected to the agent */
  knowledge?: AgentCreateKnowledge[];
  /** Existing skills to assign to the agent */
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
   *
   * @default true
   */
  sendUserContext?: boolean;
};

export const agentCreateRequestSchema: Schema<AgentCreateRequest> = s.object<AgentCreateRequest>({
  name: s.string(),
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
  sendUserContext: s.defaulted(s.boolean(), true),
});
