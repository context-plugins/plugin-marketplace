import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filters411Schema, type Filters411 } from "./unions/filters411.js";

export type AgentCreateResponseKnowledge = {
  connectorId: string;
  key: string;
  filters: Filters411;
};

export const agentCreateResponseKnowledgeSchema: Schema<AgentCreateResponseKnowledge> =
  s.object<AgentCreateResponseKnowledge>({
    connectorId: s.string(),
    key: s.string(),
    filters: filters411Schema,
  });
