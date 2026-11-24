import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusParallelAiResponsesApi = {
  InProgress: "in_progress",
  Completed: "completed",
  Incomplete: "incomplete",
} as const;
export type StatusParallelAiResponsesApi =
  | (typeof StatusParallelAiResponsesApi)[keyof typeof StatusParallelAiResponsesApi]
  | (string & {});

export const statusParallelAiResponsesApiSchema: EnumSchema<StatusParallelAiResponsesApi> =
  s.enumOf<StatusParallelAiResponsesApi>(StatusParallelAiResponsesApi);
