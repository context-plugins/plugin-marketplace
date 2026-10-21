import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The types of tools that the agent is allowed to use. Only works with FAST and ADVANCED `agent`
 * values
 */
export type ToolSets = {
  /** Whether the agent is allowed to use web search (default: true). */
  enableWebSearch?: boolean;
  /** Whether the agent is allowed to search internal company resources (default: true). */
  enableCompanyTools?: boolean;
};

export const toolSetsSchema: Schema<ToolSets> = s.object<ToolSets>({
  enableWebSearch: s.optional(s.boolean()),
  enableCompanyTools: s.optional(s.boolean()),
});
