import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mcpScanInternalSchema, mcpScanSchema, type McpScan } from "./mcp-scan.js";

/** Result of POST /api/v1/scan/mcp. */
export type McpScanResponse = {
  /**
   * Full MCP server scan result: the M-series checks plus a weighted mcpScore (0–100). Independent
   * of the site Vercel score.
   */
  scan: McpScan;
  shareUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mcpScanResponseProperties: s.Shape<McpScanResponse> = {
  scan: mcpScanInternalSchema,
  shareUrl: s.string(),
};

export const mcpScanResponseInternalSchema: Schema<McpScanResponse> = s.object<McpScanResponse>(
  mcpScanResponseProperties,
  { additionalProperties: s.json() },
);

export const mcpScanResponseSchema: Schema<McpScanResponse> = s.lazySchema(() =>
  s.object<McpScanResponse>(
    {
      ...mcpScanResponseProperties,
      scan: mcpScanSchema,
    },
    { additionalProperties: s.json() },
  ),
);
