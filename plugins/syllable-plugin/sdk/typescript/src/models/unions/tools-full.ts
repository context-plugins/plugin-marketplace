import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolResponseSchema, type ToolResponse } from "../tool-response.js";

/** Full definitions of tools to which the prompt has access */
export type ToolsFull = ToolResponse[];

export const toolsFullSchema: Schema<ToolsFull> = s.of<ToolsFull>(
  s.union([s.array(s.lazy(() => toolResponseSchema))]),
);
