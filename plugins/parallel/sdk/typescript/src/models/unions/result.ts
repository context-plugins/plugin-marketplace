import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { findAllMemoryResultSchema, type FindAllMemoryResult } from "../find-all-memory-result.js";
import { monitorMemoryResultSchema, type MonitorMemoryResult } from "../monitor-memory-result.js";
import { taskMemoryResultSchema, type TaskMemoryResult } from "../task-memory-result.js";

export type Result =
  | (FindAllMemoryResult & { kind: "findall" })
  | (MonitorMemoryResult & { kind: "monitor" })
  | (TaskMemoryResult & { kind: "task" });

export const resultSchema: Schema<Result> = s.discriminatedUnion<Result>("kind", {
  findall: findAllMemoryResultSchema,
  monitor: monitorMemoryResultSchema,
  task: taskMemoryResultSchema,
});
