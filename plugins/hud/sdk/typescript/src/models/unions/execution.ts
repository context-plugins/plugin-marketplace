import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { toolExecutionSchema, type ToolExecution } from "../tool-execution.js";

export type Execution = ToolExecution;

export const executionSchema: Schema<Execution> = s.of<Execution>(
  s.union([s.lazy(() => toolExecutionSchema)]),
);
