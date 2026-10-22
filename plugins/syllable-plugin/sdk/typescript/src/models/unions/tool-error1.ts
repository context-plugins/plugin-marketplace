import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tool error payload, JSON-encoded */
export type ToolError1 = string;

export const toolError1Schema: Schema<ToolError1> = s.of<ToolError1>(s.union([s.string()]));
