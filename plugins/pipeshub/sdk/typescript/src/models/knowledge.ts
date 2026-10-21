import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentKnowledgeFiltersParsedSchema,
  type AgentKnowledgeFiltersParsed,
} from "./agent-knowledge-filters-parsed.js";
import { agentFiltersSchema, type AgentFilters } from "./unions/agent-filters.js";

/**
 * Knowledge connector / indexed scope linked to an agent, as projected by the graph store on `GET
 * /agents/{agentKey}` and `GET /agents`.
 */
export type Knowledge = {
  key?: string;
  connectorId?: string;
  name?: string;
  type?: string;
  displayName?: string;
  /**
   * Knowledge scope filter as stored on the graph edge. The Node `getAgent` handler proxies this
   * field unchanged from the AI service (only `agent.id` is stripped). May be a JSON string
   * (typical graph storage) or an object. Prefer `filtersParsed` on GET for a guaranteed parsed
   * object with the same keys as the object branch below.
   */
  filters?: AgentFilters;
  /**
   * Server-derived read-only object parsed from the stored `filters` JSON by the graph provider on
   * GET (Neo4j / Arango). Empty object when `filters` is missing or invalid JSON.
   */
  filtersParsed?: AgentKnowledgeFiltersParsed;
};

export const knowledgeSchema: Schema<Knowledge> = s.object<Knowledge>({
  key: s.optional(s.string()),
  connectorId: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  displayName: s.optional(s.string()),
  filters: s.optional(s.lazy(() => agentFiltersSchema)),
  filtersParsed: s.optional(s.lazy(() => agentKnowledgeFiltersParsedSchema)),
  _keysMap: {
    key: "_key",
  },
});
