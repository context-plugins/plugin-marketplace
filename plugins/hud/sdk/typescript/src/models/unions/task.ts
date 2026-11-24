import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { traceTaskRefSchema, type TraceTaskRef } from "../trace-task-ref.js";

export type Task = TraceTaskRef;

export const taskSchema: Schema<Task> = s.of<Task>(s.union([s.lazy(() => traceTaskRefSchema)]));
