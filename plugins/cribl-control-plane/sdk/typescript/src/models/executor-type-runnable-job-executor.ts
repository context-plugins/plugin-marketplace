import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Executor configuration, including the executor type and its settings. */
export type ExecutorTypeRunnableJobExecutor = {
  /** The type of executor to run */
  type: string;
  /** Determines whether or not to write task results to disk */
  storeTaskResults?: boolean;
  /** Executor-type-specific settings object. Shape varies by executor type. */
  conf?: Record<string, unknown>;
};

export const executorTypeRunnableJobExecutorSchema: Schema<ExecutorTypeRunnableJobExecutor> =
  s.object<ExecutorTypeRunnableJobExecutor>({
    type: s.string(),
    storeTaskResults: s.optional(s.boolean()),
    conf: s.optional(s.record(s.string(), s.unknown())),
  });
