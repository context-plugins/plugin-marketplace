import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type4ParallelAiTasksApi, type4ParallelAiTasksApiSchema } from "./type4-parallel-ai-tasks-api.js";
import { allowedToolsSchema, type AllowedTools } from "./unions/allowed-tools.js";
import { headersSchema, type Headers } from "./unions/headers.js";

/** MCP server configuration. */
export type McpServerParallelAiTasksApi = {
  /** Type of MCP server being configured. Always `url`. @default Type4ParallelAiTasksApi.Url */
  type?: Type4ParallelAiTasksApi;
  /** URL of the MCP server. */
  url: string;
  /** Headers for the MCP server. */
  headers?: Headers;
  /** Name of the MCP server. */
  name: string;
  /** List of allowed tools for the MCP server. */
  allowedTools?: AllowedTools;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mcpServerParallelAiTasksApiSchema: Schema<McpServerParallelAiTasksApi> =
  s.object<McpServerParallelAiTasksApi>(
    {
      type: s.defaulted(type4ParallelAiTasksApiSchema, Type4ParallelAiTasksApi.Url),
      url: s.string(),
      headers: s.optional(s.lazy(() => headersSchema)),
      name: s.string(),
      allowedTools: s.optional(s.lazy(() => allowedToolsSchema)),
      _keysMap: {
        allowedTools: "allowed_tools",
      },
    },
    { additionalProperties: s.json() },
  );
