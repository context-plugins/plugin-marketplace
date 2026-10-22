import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ToolResultData = {
  /** Tool name */
  toolName: string;
  /** Tool result data */
  toolResult: Record<string, unknown>;
};

export const toolResultDataSchema: Schema<ToolResultData> = s.object<ToolResultData>({
  toolName: s.string(),
  toolResult: s.record(s.string(), s.unknown()),
  _keysMap: {
    toolName: "tool_name",
    toolResult: "tool_result",
  },
});
