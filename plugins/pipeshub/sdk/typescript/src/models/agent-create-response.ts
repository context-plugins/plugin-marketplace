import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentCreateResponseAgentSchema,
  type AgentCreateResponseAgent,
} from "./agent-create-response-agent.js";
import { agentCreateWarningSchema, type AgentCreateWarning } from "./agent-create-warning.js";
import { status5Schema, type Status5 } from "./status5.js";

export type AgentCreateResponse = {
  status: Status5;
  message: string;
  agent: AgentCreateResponseAgent;
  warnings?: AgentCreateWarning[] | null;
};

export const agentCreateResponseSchema: Schema<AgentCreateResponse> = s.object<AgentCreateResponse>({
  status: status5Schema,
  message: s.string(),
  agent: agentCreateResponseAgentSchema,
  warnings: s.optionalNullable(s.array(s.lazy(() => agentCreateWarningSchema))),
});
