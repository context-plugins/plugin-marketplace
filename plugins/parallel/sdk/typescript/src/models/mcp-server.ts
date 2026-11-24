import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { Type1, type1Schema } from "./type1.js";
import { allowedToolsSchema, type AllowedTools } from "./unions/allowed-tools.js";
import { headersSchema, type Headers } from "./unions/headers.js";

/** MCP server configuration. */
export type McpServer = {
  /** Type of MCP server being configured. Always `url`. @default Type1.Url */
  type?: Type1;
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

export const mcpServerSchema: Schema<McpServer> = s.object<McpServer>(
  {
    type: s.defaulted(type1Schema, Type1.Url),
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
