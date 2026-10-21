import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  agentKnowledgeFiltersParsedSchema,
  type AgentKnowledgeFiltersParsed,
} from "../agent-knowledge-filters-parsed.js";

/**
 * Knowledge scope filter as stored on the graph edge. The Node `getAgent` handler proxies this
 * field unchanged from the AI service (only `agent.id` is stripped). May be a JSON string (typical
 * graph storage) or an object. Prefer `filtersParsed` on GET for a guaranteed parsed object with
 * the same keys as the object branch below.
 */
export type AgentFilters = AgentKnowledgeFiltersParsed | string;

export const agentFiltersSchema: Schema<AgentFilters> = s.of<AgentFilters>(
  s.union([s.lazy(() => agentKnowledgeFiltersParsedSchema), s.string()]),
);
