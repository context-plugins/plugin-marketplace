import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of the tool that was invoked */
export type ToolName = string;

export const toolNameSchema: Schema<ToolName> = s.of<ToolName>(s.union([s.string()]));
