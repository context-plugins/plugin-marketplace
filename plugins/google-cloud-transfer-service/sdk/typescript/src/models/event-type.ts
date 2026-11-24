import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EventType = {
  EventTypeUnspecified: "EVENT_TYPE_UNSPECIFIED",
  TransferOperationSuccess: "TRANSFER_OPERATION_SUCCESS",
  TransferOperationFailed: "TRANSFER_OPERATION_FAILED",
  TransferOperationAborted: "TRANSFER_OPERATION_ABORTED",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
