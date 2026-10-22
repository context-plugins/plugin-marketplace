import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Model for an insight tool definition. This is a template that can be used by multiple insight
 * tool configurations, each providing their own parameter values.
 */
export type InsightToolDefinition = {
  /** Unique ID for insight tool definition */
  id: number;
  /** Human-readable name of insight tool definition */
  name: string;
  /** Type of insight tool definition */
  type: string;
  /** Text description of insight tool definition */
  description: string;
  /** Parameters for tools that use this definition and their associated types */
  toolParameters: Record<string, unknown>;
  /** Result key/types for insight tool definition */
  toolResultSet: Record<string, unknown>;
};

export const insightToolDefinitionSchema: Schema<InsightToolDefinition> = s.object<InsightToolDefinition>({
  id: s.int(),
  name: s.string(),
  type: s.string(),
  description: s.string(),
  toolParameters: s.record(s.string(), s.unknown()),
  toolResultSet: s.record(s.string(), s.unknown()),
  _keysMap: {
    toolParameters: "tool_parameters",
    toolResultSet: "tool_result_set",
  },
});
