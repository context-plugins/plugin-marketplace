import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Headers for the MCP server. */
export type Headers = Record<string, string>;

export const headersSchema: Schema<Headers> = s.of<Headers>(s.union([s.record(s.string(), s.string())]));
