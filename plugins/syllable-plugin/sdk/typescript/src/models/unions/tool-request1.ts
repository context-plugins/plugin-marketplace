import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Tool request payload, JSON-encoded */
export type ToolRequest1 = string;

export const toolRequest1Schema: Schema<ToolRequest1> = s.of<ToolRequest1>(s.union([s.string()]));
