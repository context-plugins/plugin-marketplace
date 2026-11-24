import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current processing status of the queue item */
export const StatusUiPathOrchestratorQueueItemsApi = {
  New: "New",
  InProgress: "InProgress",
  Failed: "Failed",
  Successful: "Successful",
  Abandoned: "Abandoned",
  Retried: "Retried",
  Deleted: "Deleted",
} as const;
export type StatusUiPathOrchestratorQueueItemsApi =
  | (typeof StatusUiPathOrchestratorQueueItemsApi)[keyof typeof StatusUiPathOrchestratorQueueItemsApi]
  | (string & {});

export const statusUiPathOrchestratorQueueItemsApiSchema: EnumSchema<StatusUiPathOrchestratorQueueItemsApi> =
  s.enumOf<StatusUiPathOrchestratorQueueItemsApi>(StatusUiPathOrchestratorQueueItemsApi);
