import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Request sent to the tool API, if applicable */
export type ToolRequest = string;

export const toolRequestSchema: Schema<ToolRequest> = s.of<ToolRequest>(s.union([s.string()]));
