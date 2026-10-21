import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentSkillSchema, type AgentSkill } from "./agent-skill.js";
import { defaultReasoningEffort1Schema, type DefaultReasoningEffort1 } from "./default-reasoning-effort1.js";
import { knowledgeSchema, type Knowledge } from "./knowledge.js";
import { mcpServerSchema, type McpServer } from "./mcp-server.js";
import { toolsetSchema, type Toolset } from "./toolset.js";
import { model2Schema, type Model2 } from "./unions/model2.js";
import { webSearchSchema, type WebSearch } from "./web-search.js";

/**
 * Detailed agent projection returned by agent detail-style endpoints such as `GET
 * /agents/{agentKey}`.
 */
export type Agent = {
  /** Full document id in the backing graph store. */
  id: string;
  /** Stable agent key used in route params. */
  key: string;
  /** Backend document revision token. */
  rev?: string;
  /** Display name of the agent */
  name: string;
  /** What this agent is designed to do */
  description?: string;
  /** System instructions that define agent behavior */
  systemPrompt?: string;
  /** MongoDB user ID of the agent creator */
  createdBy: string;
  /** Initial greeting shown when a conversation with this agent starts */
  startMessage?: string;
  /** Additional agent execution instructions */
  instructions?: string | null;
  /** Configured model entries for this agent. */
  models: Model2[];
  /**
   * True when this agent has no models configured and will use the organization's default LLM
   * (marked `isDefault: true` in the AI models configuration) at chat time. Derived from `models`
   * being empty — not persisted separately.
   */
  usesOrgDefault?: boolean;
  /**
   * Toolset instances linked to the agent (GET /agents/{agentKey} graph projection). Multiple
   * instances of the same integration type are distinguished by `instanceId` and optional
   * `instanceName`.
   */
  toolsets: Toolset[];
  /**
   * MCP server instances linked to the agent (GET /agents/{agentKey} graph projection). Same
   * shape/semantics as `toolsets`, keyed by `instanceId`.
   */
  mcpServers: McpServer[];
  /** Knowledge connectors and indexed scopes linked to the agent */
  knowledge: Knowledge[];
  /** Skills linked to the agent via `agentHasSkill` edges */
  skills: AgentSkill[];
  /** Whether the agent is shared with the whole organization */
  shareWithOrg: boolean;
  /** Web search provider attached to this agent. Null when none is configured. */
  webSearch?: WebSearch | null;
  /** Agent-level reasoning effort used when a chat request omits its own. Null when unset. */
  defaultReasoningEffort?: DefaultReasoningEffort1 | null;
  /**
   * When true (default), the agent's system prompt includes the current user's name, email, and
   * organization. When false, the agent relies on tools, actions, and knowledge sources without
   * that profile data.
   */
  sendUserContext?: boolean;
  /** Free-form agent tags. */
  tags: string[];
  /** Unix epoch timestamp in milliseconds when the agent was created. */
  createdAtTimestamp: number;
  /** Unix epoch timestamp in milliseconds when the agent was last updated. */
  updatedAtTimestamp: number;
  /** User id of the last updater, if present. */
  updatedBy?: string | null;
  /** Whether the agent is active. */
  isActive: boolean;
  /** Whether the agent has been soft-deleted. */
  isDeleted: boolean;
  /** Whether this agent is a service-account agent. */
  isServiceAccount: boolean;
  /** How the user can access this agent. */
  accessType: string;
  /** Effective role of the current user on this agent. */
  userRole: string;
  /** Effective permission to view the agent. */
  canView: boolean;
  /** Effective permission to share the agent. */
  canShare: boolean;
  /** Effective permission to edit the agent. */
  canEdit: boolean;
  /** Effective permission to delete the agent. */
  canDelete: boolean;
};

export const agentSchema: Schema<Agent> = s.object<Agent>({
  id: s.string(),
  key: s.string(),
  rev: s.optional(s.string()),
  name: s.string(),
  description: s.optional(s.string()),
  systemPrompt: s.optional(s.string()),
  createdBy: s.string(),
  startMessage: s.optional(s.string()),
  instructions: s.optionalNullable(s.string()),
  models: s.array(s.lazy(() => model2Schema)),
  usesOrgDefault: s.optional(s.boolean()),
  toolsets: s.array(s.lazy(() => toolsetSchema)),
  mcpServers: s.array(s.lazy(() => mcpServerSchema)),
  knowledge: s.array(s.lazy(() => knowledgeSchema)),
  skills: s.array(s.lazy(() => agentSkillSchema)),
  shareWithOrg: s.boolean(),
  webSearch: s.optionalNullable(s.lazy(() => webSearchSchema)),
  defaultReasoningEffort: s.optionalNullable(s.lazy(() => defaultReasoningEffort1Schema)),
  sendUserContext: s.optional(s.boolean()),
  tags: s.array(s.string()),
  createdAtTimestamp: s.int(),
  updatedAtTimestamp: s.int(),
  updatedBy: s.optionalNullable(s.string()),
  isActive: s.boolean(),
  isDeleted: s.boolean(),
  isServiceAccount: s.boolean(),
  accessType: s.string(),
  userRole: s.string(),
  canView: s.boolean(),
  canShare: s.boolean(),
  canEdit: s.boolean(),
  canDelete: s.boolean(),
  _keysMap: {
    id: "_id",
    key: "_key",
    rev: "_rev",
    accessType: "access_type",
    userRole: "user_role",
    canView: "can_view",
    canShare: "can_share",
    canEdit: "can_edit",
    canDelete: "can_delete",
  },
});
