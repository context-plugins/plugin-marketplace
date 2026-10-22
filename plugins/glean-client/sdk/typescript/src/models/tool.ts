import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolParameterSchema, type ToolParameter } from "./tool-parameter.js";
import { type7Schema, type Type7 } from "./type7.js";

export type Tool = {
  /** Type of tool (READ, WRITE) */
  type?: Type7;
  /** Unique identifier for the tool */
  name?: string;
  /** Human-readable name */
  displayName?: string;
  /** LLM friendly description of the tool */
  description?: string;
  /**
   * The parameters for the tool. Each key is the name of the parameter and the value is the
   * parameter object.
   */
  parameters?: Record<string, ToolParameter>;
};

export const toolSchema: Schema<Tool> = s.object<Tool>({
  type: s.optional(s.lazy(() => type7Schema)),
  name: s.optional(s.string()),
  displayName: s.optional(s.string()),
  description: s.optional(s.string()),
  parameters: s.optional(
    s.record(
      s.string(),
      s.lazy(() => toolParameterSchema),
    ),
  ),
});
