import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responsesCustomToolSchema, type ResponsesCustomTool } from "../responses-custom-tool.js";
import { responsesFunctionToolSchema, type ResponsesFunctionTool } from "../responses-function-tool.js";

export type ResponsesTool =
  | (ResponsesCustomTool & { type: "custom" })
  | (ResponsesFunctionTool & { type: "function" });

export const responsesToolSchema: Schema<ResponsesTool> = s.discriminatedUnion<ResponsesTool>("type", {
  custom: responsesCustomToolSchema,
  function: responsesFunctionToolSchema,
});
