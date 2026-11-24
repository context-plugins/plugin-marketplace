import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  qaExecutionErrorInternalSchema,
  qaExecutionErrorSchema,
  type QaExecutionError,
} from "../qa-execution-error.js";

export type ExecutionError = QaExecutionError;

export const executionErrorInternalSchema: Schema<ExecutionError> = s.of<ExecutionError>(
  s.union([s.lazy(() => qaExecutionErrorInternalSchema)]),
);

export const executionErrorSchema: Schema<ExecutionError> = s.lazySchema(() =>
  s.of<ExecutionError>(s.union([s.lazy(() => qaExecutionErrorSchema)])),
);
