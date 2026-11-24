import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { choiceDeltaToolCallSchema, type ChoiceDeltaToolCall } from "../choice-delta-tool-call.js";

export type ToolCalls = ChoiceDeltaToolCall[];

export const toolCallsSchema: Schema<ToolCalls> = s.of<ToolCalls>(
  s.union([s.array(s.lazy(() => choiceDeltaToolCallSchema))]),
);
