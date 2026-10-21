import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { defaultReasoningEffort1Schema, type DefaultReasoningEffort1 } from "./default-reasoning-effort1.js";
import { knowledgeSchema, type Knowledge } from "./knowledge.js";
import { mcpServerSchema, type McpServer } from "./mcp-server.js";
import { toolsetSchema, type Toolset } from "./toolset.js";
import { webSearch1Schema, type WebSearch1 } from "./web-search1.js";

/**
 * Agent projection returned by `GET /agents`.
 *
 * This is the list-view envelope item emitted by the Python backend and forwarded by the Node
 * gateway. It is not the full detail projection used by `GET /agents/{agentKey}`.
 */
export type AgentListItem = {
  /** Full document id in the backing graph store. */
  id: string;
  /** Stable agent key used in route params. */
  key: string;
  /** Backend document revision token. */
  rev?: string;
  /** Unix epoch timestamp in milliseconds when the agent was created. */
  createdAtTimestamp: number;
  /** MongoDB user ID of the agent creator */
  createdBy: string;
  /** Short human-readable description of the agent. */
  description?: string | null;
  /** Additional execution instructions stored on the agent. */
  instructions?: string | null;
  /** Whether the agent is active. */
  isActive: boolean;
  /** Whether the agent has been soft-deleted. */
  isDeleted: boolean;
  /** Whether this agent is a service-account agent. */
  isServiceAccount: boolean;
  /**
   * Model entries configured on the agent.
   *
   * For `GET /agents`, the backend returns the stored normalized string representation, typically
   * `modelKey_modelName`.
   */
  models: string[];
  /** Display name of the agent. */
  name: string;
  /** Greeting shown at conversation start. */
  startMessage?: string | null;
  /** System prompt stored on the agent. */
  systemPrompt?: string | null;
  /** Free-form agent tags. */
  tags: string[];
  /** Unix epoch timestamp in milliseconds when the agent was last updated. */
  updatedAtTimestamp: number;
  /** User id of the last updater, if present. */
  updatedBy?: string | null;
  /**
   * True when this agent has no models configured and will use the organization's default LLM
   * (marked `isDefault: true` in the AI models configuration) at chat time. Derived from `models`
   * being empty — not persisted separately.
   */
  usesOrgDefault?: boolean;
  /**
   * Web-search provider attachment for this agent, or `null` when none is attached.
   *
   * For `GET /agents`, the response formatter always emits `provider`. It may also emit
   * `providerKey` and `providerLabel` when those values were present on the stored attachment. It
   * does not emit `iconPath` on this response path.
   */
  webSearch?: WebSearch1 | null;
  /** Agent-level reasoning effort used when a chat request omits its own. Null when unset. */
  defaultReasoningEffort?: DefaultReasoningEffort1 | null;
  /** When false, this agent omits user name/email/org from its system prompt. */
  sendUserContext?: boolean;
  /** Whether the agent is shared with the organization. */
  shareWithOrg: boolean;
  /**
   * Toolset instances linked to the agent. Same projection as `GET /agents/{agentKey}`; the backend
   * builds it from the graph edges for each agent on the returned page.
   */
  toolsets: Toolset[];
  /**
   * MCP server instances linked to the agent. Same projection as `GET /agents/{agentKey}`; the
   * backend builds it from the graph edges for each agent on the returned page.
   */
  mcpServers: McpServer[];
  /**
   * Knowledge connectors and indexed scopes linked to the agent. Same projection as `GET
   * /agents/{agentKey}`; the backend builds it from the graph edges for each agent on the returned
   * page.
   */
  knowledge: Knowledge[];
  /** Effective permission to view the agent. */
  canView: boolean;
  /** Effective permission to share the agent. */
  canShare: boolean;
  /** Effective permission to edit the agent. */
  canEdit: boolean;
  /** Effective permission to delete the agent. */
  canDelete: boolean;
  /** Effective role of the current user on this agent. */
  userRole: string;
  /** How the user can access this agent. */
  accessType: string;
};

export const agentListItemSchema: Schema<AgentListItem> = s.object<AgentListItem>({
  id: s.string(),
  key: s.string(),
  rev: s.optional(s.string()),
  createdAtTimestamp: s.int(),
  createdBy: s.string(),
  description: s.optionalNullable(s.string()),
  instructions: s.optionalNullable(s.string()),
  isActive: s.boolean(),
  isDeleted: s.boolean(),
  isServiceAccount: s.boolean(),
  models: s.array(s.string()),
  name: s.string(),
  startMessage: s.optionalNullable(s.string()),
  systemPrompt: s.optionalNullable(s.string()),
  tags: s.array(s.string()),
  updatedAtTimestamp: s.int(),
  updatedBy: s.optionalNullable(s.string()),
  usesOrgDefault: s.optional(s.boolean()),
  webSearch: s.optionalNullable(s.lazy(() => webSearch1Schema)),
  defaultReasoningEffort: s.optionalNullable(s.lazy(() => defaultReasoningEffort1Schema)),
  sendUserContext: s.optional(s.boolean()),
  shareWithOrg: s.boolean(),
  toolsets: s.array(s.lazy(() => toolsetSchema)),
  mcpServers: s.array(s.lazy(() => mcpServerSchema)),
  knowledge: s.array(s.lazy(() => knowledgeSchema)),
  canView: s.boolean(),
  canShare: s.boolean(),
  canEdit: s.boolean(),
  canDelete: s.boolean(),
  userRole: s.string(),
  accessType: s.string(),
  _keysMap: {
    id: "_id",
    key: "_key",
    rev: "_rev",
    canView: "can_view",
    canShare: "can_share",
    canEdit: "can_edit",
    canDelete: "can_delete",
    userRole: "user_role",
    accessType: "access_type",
  },
});
