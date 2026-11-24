import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationFilterTypeDto = {
  Equals: "equals",
  Contains: "contains",
  In: "in",
  And: "and",
  Or: "or",
  Not: "not",
} as const;
export type NotificationFilterTypeDto =
  | (typeof NotificationFilterTypeDto)[keyof typeof NotificationFilterTypeDto]
  | (string & {});

export const notificationFilterTypeDtoSchema: EnumSchema<NotificationFilterTypeDto> =
  s.enumOf<NotificationFilterTypeDto>(NotificationFilterTypeDto);
