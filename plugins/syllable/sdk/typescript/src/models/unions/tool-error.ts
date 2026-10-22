import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Error received from the tool API, if applicable */
export type ToolError = string;

export const toolErrorSchema: Schema<ToolError> = s.of<ToolError>(s.union([s.string()]));
