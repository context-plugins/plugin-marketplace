import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesToolSchema, type ResponsesTool } from "./responses-tool.js";

/**
 * An array of tools the model may call while generating a response. You can specify which tool to
 * use by setting the `tool_choice` parameter.
 */
export type Tools4 = ResponsesTool[];

export const tools4Schema: Schema<Tools4> = s.of<Tools4>(
  s.union([s.array(s.lazy(() => responsesToolSchema))]),
);
