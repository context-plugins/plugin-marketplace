import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Body for POST /api/v1/scan/mcp. A remote http(s) MCP endpoint (Streamable HTTP). */
export type McpScanRequest = {
  endpoint: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mcpScanRequestProperties: s.Shape<McpScanRequest> = {
  endpoint: s.string(),
};

export const mcpScanRequestInternalSchema: Schema<McpScanRequest> = s.object<McpScanRequest>(
  mcpScanRequestProperties,
  { additionalProperties: s.json() },
);

export const mcpScanRequestSchema: Schema<McpScanRequest> = s.lazySchema(() =>
  s.object<McpScanRequest>(
    {
      ...mcpScanRequestProperties,
      endpoint: s.string().check(s.maxLength(2000), s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
