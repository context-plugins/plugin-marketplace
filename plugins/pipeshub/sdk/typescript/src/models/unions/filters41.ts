import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  agentKnowledgeFiltersParsedSchema,
  type AgentKnowledgeFiltersParsed,
} from "../agent-knowledge-filters-parsed.js";

export type Filters41 = AgentKnowledgeFiltersParsed | string | Record<string, unknown>[];

export const filters41Schema: Schema<Filters41> = s.of<Filters41>(
  s.union([
    s.lazy(() => agentKnowledgeFiltersParsedSchema),
    s.string(),
    s.array(s.record(s.string(), s.unknown())),
  ]),
);
