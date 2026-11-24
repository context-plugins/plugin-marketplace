import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Deprecated. mcp-server-2025-07-17 is now included directly in the output (e.g. mcp_tool_calls).
 */
export type BetaFields = Record<string, unknown>;

export const betaFieldsSchema: Schema<BetaFields> = s.of<BetaFields>(
  s.union([s.record(s.string(), s.unknown())]),
);
