import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** List of allowed tools for the MCP server. */
export type AllowedTools = string[];

export const allowedToolsSchema: Schema<AllowedTools> = s.of<AllowedTools>(s.union([s.array(s.string())]));
