import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolSchema, type Tool } from "./tool.js";

export type ToolsListResponse = {
  tools?: Tool[];
};

export const toolsListResponseSchema: Schema<ToolsListResponse> = s.object<ToolsListResponse>({
  tools: s.optional(s.array(s.lazy(() => toolSchema))),
});
