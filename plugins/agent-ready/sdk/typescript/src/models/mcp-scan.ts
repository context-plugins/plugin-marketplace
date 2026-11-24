import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { checkResultSchema, type CheckResult } from "./check-result.js";
import { mcpRatingSchema, type McpRating } from "./mcp-rating.js";
import { status1Schema, type Status1 } from "./status1.js";

/**
 * Full MCP server scan result: the M-series checks plus a weighted mcpScore (0–100). Independent of
 * the site Vercel score.
 */
export type McpScan = {
  id: string;
  shareToken: string;
  endpoint: string;
  host: string;
  status: Status1;
  mcpScore: number;
  /** Coarse rating bucket derived from the Vercel Agent Readability score. */
  mcpRating: McpRating;
  serverName: string | null;
  serverVersion: string | null;
  toolCount: number | null;
  resourceCount: number | null;
  promptCount: number | null;
  checks: CheckResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const mcpScanProperties: s.Shape<McpScan> = {
  id: s.string(),
  shareToken: s.string(),
  endpoint: s.string(),
  host: s.string(),
  status: status1Schema,
  mcpScore: s.int(),
  mcpRating: mcpRatingSchema,
  serverName: s.nullable(s.string()),
  serverVersion: s.nullable(s.string()),
  toolCount: s.nullable(s.int()),
  resourceCount: s.nullable(s.int()),
  promptCount: s.nullable(s.int()),
  checks: s.array(s.lazy(() => checkResultSchema)),
};

export const mcpScanInternalSchema: Schema<McpScan> = s.object<McpScan>(mcpScanProperties, {
  additionalProperties: s.json(),
});

export const mcpScanSchema: Schema<McpScan> = s.lazySchema(() =>
  s.object<McpScan>(
    {
      ...mcpScanProperties,
      endpoint: s.string().check(s.url()),
      mcpScore: s.int().check(s.gte(0), s.lte(100)),
    },
    { additionalProperties: s.json() },
  ),
);
