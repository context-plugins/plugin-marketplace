import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The options for a tool call. */
export type ToolOptions = {
  /** Whether the tool call result should be propagated to the caller. @default false */
  propagateToolResult?: boolean;
};

export const toolOptionsSchema: Schema<ToolOptions> = s.object<ToolOptions>({
  propagateToolResult: s.defaulted(s.boolean(), false),
  _keysMap: {
    propagateToolResult: "propagate_tool_result",
  },
});
