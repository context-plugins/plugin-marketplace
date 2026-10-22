import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filters41Schema, type Filters41 } from "./unions/filters41.js";

export type AgentCreateKnowledge = {
  connectorId: string;
  filters?: Filters41;
};

export const agentCreateKnowledgeSchema: Schema<AgentCreateKnowledge> = s.object<AgentCreateKnowledge>({
  connectorId: s.string(),
  filters: s.optional(s.lazy(() => filters41Schema)),
});
