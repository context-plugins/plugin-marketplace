import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevTasksApi = {
  Open: "open",
  InProgress: "in_progress",
  Blocked: "blocked",
  AwaitingApproval: "awaiting_approval",
  Completed: "completed",
  Cancelled: "cancelled",
} as const;
export type StatusDeliverdDevTasksApi =
  | (typeof StatusDeliverdDevTasksApi)[keyof typeof StatusDeliverdDevTasksApi]
  | (string & {});

export const statusDeliverdDevTasksApiSchema: EnumSchema<StatusDeliverdDevTasksApi> =
  s.enumOf<StatusDeliverdDevTasksApi>(StatusDeliverdDevTasksApi);
