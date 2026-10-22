import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tool name to update config for */
export type ToolName2 = string;

export const toolName2Schema: Schema<ToolName2> = s.of<ToolName2>(s.union([s.string()]));
