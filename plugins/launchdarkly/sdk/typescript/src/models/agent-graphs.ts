import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentGraphSchema, type AgentGraph } from "./agent-graph.js";
import { paginatedLinksSchema, type PaginatedLinks } from "./paginated-links.js";

/** A collection of agent graphs */
export type AgentGraphs = {
  links?: PaginatedLinks;
  items: AgentGraph[];
  totalCount: number;
};

export const agentGraphsSchema: Schema<AgentGraphs> = s.object<AgentGraphs>({
  links: s.optional(s.lazy(() => paginatedLinksSchema)),
  items: s.array(s.lazy(() => agentGraphSchema)),
  totalCount: s.int(),
  _keysMap: {
    links: "_links",
  },
});
