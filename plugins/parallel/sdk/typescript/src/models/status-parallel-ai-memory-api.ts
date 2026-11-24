import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the monitor. */
export const StatusParallelAiMemoryApi = {
  Active: "active",
  Cancelled: "cancelled",
} as const;
export type StatusParallelAiMemoryApi =
  | (typeof StatusParallelAiMemoryApi)[keyof typeof StatusParallelAiMemoryApi]
  | (string & {});

export const statusParallelAiMemoryApiSchema: EnumSchema<StatusParallelAiMemoryApi> =
  s.enumOf<StatusParallelAiMemoryApi>(StatusParallelAiMemoryApi);
