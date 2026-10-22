import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolResponseSchema, type ToolResponse } from "../tool-response.js";

/** Tools associated with the agent */
export type Tools = ToolResponse[];

export const toolsSchema: Schema<Tools> = s.of<Tools>(s.union([s.array(s.lazy(() => toolResponseSchema))]));
