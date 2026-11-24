import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationLevelDto = {
  Info: "info",
  Warning: "warning",
  Critical: "critical",
  NotEvaluated: "not_evaluated",
} as const;
export type NotificationLevelDto =
  | (typeof NotificationLevelDto)[keyof typeof NotificationLevelDto]
  | (string & {});

export const notificationLevelDtoSchema: EnumSchema<NotificationLevelDto> =
  s.enumOf<NotificationLevelDto>(NotificationLevelDto);
