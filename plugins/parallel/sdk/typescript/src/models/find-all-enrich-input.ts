import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jsonSchema2Schema, type JsonSchema2 } from "./json-schema2.js";
import { mcpServersSchema, type McpServers } from "./unions/mcp-servers.js";

/** Input model for FindAll enrich. */
export type FindAllEnrichInput = {
  /** Processor to use for the task. @default "core" */
  processor?: string;
  /** JSON schema for the enrichment output schema for the FindAll run. */
  outputSchema: JsonSchema2;
  /** List of MCP servers to use for the task. */
  mcpServers?: McpServers;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const findAllEnrichInputSchema: Schema<FindAllEnrichInput> = s.object<FindAllEnrichInput>(
  {
    processor: s.defaulted(s.string(), "core"),
    outputSchema: jsonSchema2Schema,
    mcpServers: s.optional(s.lazy(() => mcpServersSchema)),
    _keysMap: {
      outputSchema: "output_schema",
      mcpServers: "mcp_servers",
    },
  },
  { additionalProperties: s.json() },
);
