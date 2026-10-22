import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tool response payload, JSON-encoded */
export type ToolResult2 = string;

export const toolResult2Schema: Schema<ToolResult2> = s.of<ToolResult2>(s.union([s.string()]));
