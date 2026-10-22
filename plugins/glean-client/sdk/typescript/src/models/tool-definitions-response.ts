import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolDefinitionSchema, type ToolDefinition } from "./tool-definition.js";

export type ToolDefinitionsResponse = {
  /** Definitions for the requested tools that exist on this server. */
  tools: ToolDefinition[];
  /** Requested names that do not exist on this server. */
  notFound?: string[];
};

export const toolDefinitionsResponseSchema: Schema<ToolDefinitionsResponse> =
  s.object<ToolDefinitionsResponse>({
    tools: s.array(s.lazy(() => toolDefinitionSchema)),
    notFound: s.optional(s.array(s.string())),
  });
