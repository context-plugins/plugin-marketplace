import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1ParallelAiResponsesApi = {
  Completed: "completed",
  Failed: "failed",
  InProgress: "in_progress",
  Cancelled: "cancelled",
  Queued: "queued",
  Incomplete: "incomplete",
} as const;
export type Status1ParallelAiResponsesApi =
  | (typeof Status1ParallelAiResponsesApi)[keyof typeof Status1ParallelAiResponsesApi]
  | (string & {});

export const status1ParallelAiResponsesApiSchema: EnumSchema<Status1ParallelAiResponsesApi> =
  s.enumOf<Status1ParallelAiResponsesApi>(Status1ParallelAiResponsesApi);
