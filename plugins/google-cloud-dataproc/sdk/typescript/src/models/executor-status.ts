import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExecutorStatus = {
  ExecutorStatusUnspecified: "EXECUTOR_STATUS_UNSPECIFIED",
  ExecutorStatusActive: "EXECUTOR_STATUS_ACTIVE",
  ExecutorStatusDead: "EXECUTOR_STATUS_DEAD",
} as const;
export type ExecutorStatus = (typeof ExecutorStatus)[keyof typeof ExecutorStatus] | (string & {});

export const executorStatusSchema: EnumSchema<ExecutorStatus> = s.enumOf<ExecutorStatus>(ExecutorStatus);
