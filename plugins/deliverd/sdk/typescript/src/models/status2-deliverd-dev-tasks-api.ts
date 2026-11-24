import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status2DeliverdDevTasksApi = {
  Open: "open",
  InProgress: "in_progress",
  Blocked: "blocked",
  AwaitingApproval: "awaiting_approval",
  Completed: "completed",
  Cancelled: "cancelled",
  Active: "active",
} as const;
export type Status2DeliverdDevTasksApi =
  | (typeof Status2DeliverdDevTasksApi)[keyof typeof Status2DeliverdDevTasksApi]
  | (string & {});

export const status2DeliverdDevTasksApiSchema: EnumSchema<Status2DeliverdDevTasksApi> =
  s.enumOf<Status2DeliverdDevTasksApi>(Status2DeliverdDevTasksApi);
