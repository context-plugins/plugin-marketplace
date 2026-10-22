import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { contextToolInfoSchema, type ContextToolInfo } from "../context-tool-info.js";

export type Tool = ContextToolInfo;

export const toolSchema: Schema<Tool> = s.of<Tool>(s.union([s.lazy(() => contextToolInfoSchema)]));
