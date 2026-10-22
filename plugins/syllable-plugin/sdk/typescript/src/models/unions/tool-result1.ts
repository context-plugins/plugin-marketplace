import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Response received from the tool API, if applicable */
export type ToolResult1 = string;

export const toolResult1Schema: Schema<ToolResult1> = s.of<ToolResult1>(s.union([s.string()]));
