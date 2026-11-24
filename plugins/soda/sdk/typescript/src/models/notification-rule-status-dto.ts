import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationRuleStatusDto = {
  Active: "active",
  Paused: "paused",
} as const;
export type NotificationRuleStatusDto =
  | (typeof NotificationRuleStatusDto)[keyof typeof NotificationRuleStatusDto]
  | (string & {});

export const notificationRuleStatusDtoSchema: EnumSchema<NotificationRuleStatusDto> =
  s.enumOf<NotificationRuleStatusDto>(NotificationRuleStatusDto);
