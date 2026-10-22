import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { durationMsSchema, type DurationMs } from "./unions/duration-ms.js";
import { toolErrorSchema, type ToolError } from "./unions/tool-error.js";
import { toolNameSchema, type ToolName } from "./unions/tool-name.js";
import { toolRequestSchema, type ToolRequest } from "./unions/tool-request.js";
import { toolResult1Schema, type ToolResult1 } from "./unions/tool-result1.js";

/** Information about a given tool invocation as part of a session. */
export type SessionAction = {
  /** Timestamp of the tool invocation */
  timestamp: Date;
  /** Name of the tool that was invoked */
  toolName?: ToolName;
  /** Request sent to the tool API, if applicable */
  toolRequest?: ToolRequest;
  /** Response received from the tool API, if applicable */
  toolResult?: ToolResult1;
  /** Error received from the tool API, if applicable */
  toolError?: ToolError;
  /** How long the tool invocation took, in milliseconds */
  durationMs?: DurationMs;
};

export const sessionActionSchema: Schema<SessionAction> = s.object<SessionAction>({
  timestamp: s.dateTime(),
  toolName: s.optional(s.lazy(() => toolNameSchema)),
  toolRequest: s.optional(s.lazy(() => toolRequestSchema)),
  toolResult: s.optional(s.lazy(() => toolResult1Schema)),
  toolError: s.optional(s.lazy(() => toolErrorSchema)),
  durationMs: s.optional(s.lazy(() => durationMsSchema)),
  _keysMap: {
    toolName: "tool_name",
    toolRequest: "tool_request",
    toolResult: "tool_result",
    toolError: "tool_error",
    durationMs: "duration_ms",
  },
});
