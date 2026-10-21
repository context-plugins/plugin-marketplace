import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentCreateResponseKnowledgeSchema,
  type AgentCreateResponseKnowledge,
} from "./agent-create-response-knowledge.js";
import {
  agentCreateResponseMcpServerSchema,
  type AgentCreateResponseMcpServer,
} from "./agent-create-response-mcp-server.js";
import {
  agentCreateResponseSkillSchema,
  type AgentCreateResponseSkill,
} from "./agent-create-response-skill.js";
import {
  agentCreateResponseToolsetSchema,
  type AgentCreateResponseToolset,
} from "./agent-create-response-toolset.js";
import { defaultReasoningEffort1Schema, type DefaultReasoningEffort1 } from "./default-reasoning-effort1.js";
import { webSearch2Schema, type WebSearch2 } from "./web-search2.js";

export type AgentCreateResponseAgent = {
  key: string;
  name: string;
  description: string;
  startMessage: string;
  systemPrompt: string;
  instructions: string | null;
  models: string[];
  tags: string[];
  webSearch: WebSearch2 | null;
  /** Agent-level reasoning effort used when a chat request omits its own. Null when unset. */
  defaultReasoningEffort?: DefaultReasoningEffort1 | null;
  /** When false, this agent omits user name/email/org from its system prompt. */
  sendUserContext?: boolean;
  isActive: boolean;
  isServiceAccount: boolean;
  createdBy: string;
  updatedBy: string | null;
  createdAtTimestamp: number;
  updatedAtTimestamp: number;
  isDeleted: boolean;
  toolsets: AgentCreateResponseToolset[];
  mcpServers: AgentCreateResponseMcpServer[];
  knowledge: AgentCreateResponseKnowledge[];
  skills: AgentCreateResponseSkill[];
};

export const agentCreateResponseAgentSchema: Schema<AgentCreateResponseAgent> =
  s.object<AgentCreateResponseAgent>({
    key: s.string(),
    name: s.string(),
    description: s.string(),
    startMessage: s.string(),
    systemPrompt: s.string(),
    instructions: s.nullable(s.string()),
    models: s.array(s.string()),
    tags: s.array(s.string()),
    webSearch: s.nullable(s.lazy(() => webSearch2Schema)),
    defaultReasoningEffort: s.optionalNullable(s.lazy(() => defaultReasoningEffort1Schema)),
    sendUserContext: s.optional(s.boolean()),
    isActive: s.boolean(),
    isServiceAccount: s.boolean(),
    createdBy: s.string(),
    updatedBy: s.nullable(s.string()),
    createdAtTimestamp: s.int(),
    updatedAtTimestamp: s.int(),
    isDeleted: s.boolean(),
    toolsets: s.array(s.lazy(() => agentCreateResponseToolsetSchema)),
    mcpServers: s.array(s.lazy(() => agentCreateResponseMcpServerSchema)),
    knowledge: s.array(s.lazy(() => agentCreateResponseKnowledgeSchema)),
    skills: s.array(s.lazy(() => agentCreateResponseSkillSchema)),
    _keysMap: {
      key: "_key",
    },
  });
