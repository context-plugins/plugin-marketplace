import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { insightToolDefinitionSchema, type InsightToolDefinition } from "../insight-tool-definition.js";

/** Insight Tool Definition */
export type InsightToolDefinition1 = InsightToolDefinition;

export const insightToolDefinition1Schema: Schema<InsightToolDefinition1> = s.of<InsightToolDefinition1>(
  s.union([s.lazy(() => insightToolDefinitionSchema)]),
);
