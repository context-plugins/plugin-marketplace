import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationCustomizationTypeDto = {
  Rich: "rich",
  Minimal: "minimal",
} as const;
export type NotificationCustomizationTypeDto =
  | (typeof NotificationCustomizationTypeDto)[keyof typeof NotificationCustomizationTypeDto]
  | (string & {});

export const notificationCustomizationTypeDtoSchema: EnumSchema<NotificationCustomizationTypeDto> =
  s.enumOf<NotificationCustomizationTypeDto>(NotificationCustomizationTypeDto);
