import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { atifToolCallSchema, type AtifToolCall } from "../atif-tool-call.js";

export type ToolCalls = AtifToolCall[];

export const toolCallsInternalSchema: Schema<ToolCalls> = s.of<ToolCalls>(
  s.union([s.array(s.lazy(() => atifToolCallSchema))]),
);

export const toolCallsSchema: Schema<ToolCalls> = s.lazySchema(() =>
  s.of<ToolCalls>(s.union([s.array(s.lazy(() => atifToolCallSchema)).check(s.maxLength(1000))])),
);
