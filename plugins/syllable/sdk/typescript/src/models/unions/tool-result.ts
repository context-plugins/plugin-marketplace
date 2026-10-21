import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tool result data (only included if tool has propagate_tool_result=true) */
export type ToolResult = Record<string, unknown>;

export const toolResultSchema: Schema<ToolResult> = s.of<ToolResult>(
  s.union([s.record(s.string(), s.unknown())]),
);
