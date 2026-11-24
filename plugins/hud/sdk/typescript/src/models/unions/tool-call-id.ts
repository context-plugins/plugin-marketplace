import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ToolCallId = string;

export const toolCallIdSchema: Schema<ToolCallId> = s.of<ToolCallId>(s.union([s.string()]));
