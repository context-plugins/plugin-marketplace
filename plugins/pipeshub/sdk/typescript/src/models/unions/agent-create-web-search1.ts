import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { agentCreateWebSearchSchema, type AgentCreateWebSearch } from "../agent-create-web-search.js";

/**
 * Web-search attachment for an agent. Accepts a provider string, an object with at least a
 * `provider` field, or `null`.
 */
export type AgentCreateWebSearch1 = string | AgentCreateWebSearch | null;

export const agentCreateWebSearch1Schema: Schema<AgentCreateWebSearch1> = s.of<AgentCreateWebSearch1>(
  s.nullable(s.union([s.string(), s.lazy(() => agentCreateWebSearchSchema)])),
);
