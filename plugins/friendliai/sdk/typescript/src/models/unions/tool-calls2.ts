import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { streamedToolCallResultSchema, type StreamedToolCallResult } from "../streamed-tool-call-result.js";

export type ToolCalls2 = StreamedToolCallResult[];

export const toolCalls2Schema: Schema<ToolCalls2> = s.of<ToolCalls2>(
  s.union([s.array(s.lazy(() => streamedToolCallResultSchema))]),
);
