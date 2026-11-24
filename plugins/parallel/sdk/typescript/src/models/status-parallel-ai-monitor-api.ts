import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the monitor. */
export const StatusParallelAiMonitorApi = {
  Active: "active",
  Cancelled: "cancelled",
} as const;
export type StatusParallelAiMonitorApi =
  | (typeof StatusParallelAiMonitorApi)[keyof typeof StatusParallelAiMonitorApi]
  | (string & {});

export const statusParallelAiMonitorApiSchema: EnumSchema<StatusParallelAiMonitorApi> =
  s.enumOf<StatusParallelAiMonitorApi>(StatusParallelAiMonitorApi);
