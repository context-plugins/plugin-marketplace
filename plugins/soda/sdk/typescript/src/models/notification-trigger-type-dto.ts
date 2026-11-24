import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationTriggerTypeDto = {
  TestResultLevel: "testResultLevel",
  ScanState: "scanState",
} as const;
export type NotificationTriggerTypeDto =
  | (typeof NotificationTriggerTypeDto)[keyof typeof NotificationTriggerTypeDto]
  | (string & {});

export const notificationTriggerTypeDtoSchema: EnumSchema<NotificationTriggerTypeDto> =
  s.enumOf<NotificationTriggerTypeDto>(NotificationTriggerTypeDto);
