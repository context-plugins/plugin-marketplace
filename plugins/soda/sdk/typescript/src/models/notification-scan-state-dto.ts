import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationScanStateDto = {
  Failed: "failed",
  TimedOut: "timedOut",
  Canceled: "canceled",
  CompletedWithErrors: "completedWithErrors",
} as const;
export type NotificationScanStateDto =
  | (typeof NotificationScanStateDto)[keyof typeof NotificationScanStateDto]
  | (string & {});

export const notificationScanStateDtoSchema: EnumSchema<NotificationScanStateDto> =
  s.enumOf<NotificationScanStateDto>(NotificationScanStateDto);
