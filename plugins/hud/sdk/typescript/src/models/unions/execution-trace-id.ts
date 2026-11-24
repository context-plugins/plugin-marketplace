import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ExecutionTraceId = string;

export const executionTraceIdSchema: Schema<ExecutionTraceId> = s.of<ExecutionTraceId>(s.union([s.string()]));
