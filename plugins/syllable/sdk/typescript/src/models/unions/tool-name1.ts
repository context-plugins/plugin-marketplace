import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tool name to fetch config for */
export type ToolName1 = string;

export const toolName1Schema: Schema<ToolName1> = s.of<ToolName1>(s.union([s.string()]));
